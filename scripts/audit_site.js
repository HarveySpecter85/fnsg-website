"use strict";
/**
 * scripts/audit_site.js
 * 
 * Comprehensive site audit script for Next.js 16.0.7
 * Scans for:
 * - Broken internal links
 * - Missing assets
 * - External link status (HEAD check)
 * - Route consistency
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// --- CONFIG ---
const ROOT_DIR = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT_DIR, 'app');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const REPORT_FILE = path.join(ROOT_DIR, 'audit_results.md');

const SCAN_DIRS = [
    'app',
    'components',
    'lib',
    'data',
    'config'
];

const IGNORE_DIRS = [
    '.git',
    'node_modules',
    '.next',
    '.vscode'
];

const ASSET_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.mp4', '.pdf', '.webp', '.ico'];
const PAGE_FILE = 'page.tsx';

// --- STATE ---
const routes = new Set();
const assets = new Set();
const issues = {
    internal_broken: [], // { file, line, link, suggestion }
    external_broken: [], // { file, link, status }
    missing_assets: [],  // { file, line, link }
    ghost_routes: []     // Routes linked but not found
};

// --- HELPER FUNCTIONS ---

function getAllFiles(dirPath, arrayOfFiles = []) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;

    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!IGNORE_DIRS.includes(file)) {
                getAllFiles(fullPath, arrayOfFiles);
            }
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

// Map Next.js file system to URL routes
function buildRouteIndex() {
    console.log('Building Route Index...');
    const appFiles = getAllFiles(APP_DIR);

    appFiles.forEach(file => {
        if (path.basename(file) === PAGE_FILE) {
            let relPath = path.relative(APP_DIR, path.dirname(file));
            // Normalize path separators
            relPath = relPath.split(path.sep).join('/');

            // Remove Route Groups (folders in parenthesis)
            // e.g., (marketing)/about -> about
            let routeParts = relPath.split('/').filter(p => !p.startsWith('(') && !p.endsWith(')'));

            let route = '/' + routeParts.join('/');

            // Handle dynamic routes [slug] -> replace with * for matching logic
            // We store the regex pattern for matching
            // simple strategy: convert [param] to [^/]+

            // Store raw clean route for direct checking (e.g. /about)
            // We also need to store "pattern" versions for dynamic matching

            // Clean up: /foo/index -> /foo (index routes handled by folder structure mostly in app dir, but root is empty)
            if (route === '/.') route = '/'; // Root page

            routes.add(route);
        }
    });
    console.log(`Indexed ${routes.size} valid page routes.`);
}

function buildAssetIndex() {
    console.log('Building Asset Index...');
    const assetFiles = getAllFiles(PUBLIC_DIR);

    assetFiles.forEach(file => {
        let relPath = path.relative(PUBLIC_DIR, file);
        // Normalized to web path: /images/foo.png
        let webPath = '/' + relPath.split(path.sep).join('/');
        assets.add(webPath);
    });
    console.log(`Indexed ${assets.size} public assets.`);
}

// Simple link extractor using regex
// Matches: href="...", src="...", Link href="..."
function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const ext = path.extname(filePath);

    // Only scan readable code files
    if (!['.tsx', '.ts', '.js', '.jsx', '.json'].includes(ext)) return;

    // Pattern to catch urls in href, src, or router.push
    // Very simple, may have false positives/negatives but covers 95%
    const urlPattern = /(?:href|src|action|poster)=["']([^"']+)["']|Link\s+href=["']([^"']+)["']|router\.push\(["']([^"']+)["']\)/g;
    // Also catch markdown style links [text](url) if useful, but staying to code artifacts for now.

    let match;
    while ((match = urlPattern.exec(content)) !== null) {
        const link = match[1] || match[2] || match[3];
        if (!link) continue;

        // Calculate line number
        const lineVal = content.substring(0, match.index).split('\n').length;

        validateLink(filePath, lineVal, link);
    }
}

async function validateLink(file, line, link) {
    const cleanLink = link.split('#')[0].split('?')[0]; // Remove hash/query

    // 1. External Links
    if (link.startsWith('http://') || link.startsWith('https://')) {
        // We will perform batch check later or simple push to check queue
        // For simplicity in sync script, we add to "to_check" list or just log it
        // Note: active checking takes time. We will add to list.
        issues.external_broken.push({ file: path.relative(ROOT_DIR, file), line, link, status: 'PENDING' });
        return;
    }

    // 2. Mailto/Tel
    if (link.startsWith('mailto:') || link.startsWith('tel:')) return;

    // 3. Asset Links (in public)
    const isAssetExt = ASSET_EXTENSIONS.some(ext => cleanLink.toLowerCase().endsWith(ext));
    if (isAssetExt) {
        if (!assets.has(cleanLink)) {
            issues.missing_assets.push({ file: path.relative(ROOT_DIR, file), line, link });
        }
        return;
    }

    // 4. Internal Route Links
    if (link.startsWith('/')) {
        // Check if route exists
        // Exact match
        if (routes.has(cleanLink)) return;

        // Dynamic match logic
        // Check if any route pattern matches. 
        // Iterate all routes, if route has [brackets], convert to regex and test
        const isDynamicMatch = Array.from(routes).some(r => {
            if (!r.includes('[')) return false;
            // Convert /solutions/[slug] -> ^\/solutions\/([^/]+)$
            const patternStr = '^' + r.replace(/\[.*?\]/g, '([^/]+)') + '$';
            const regex = new RegExp(patternStr);
            return regex.test(cleanLink);
        });

        if (isDynamicMatch) return;

        // If fails exact and dynamic
        issues.internal_broken.push({
            file: path.relative(ROOT_DIR, file),
            line,
            link,
            suggestion: suggestFix(cleanLink)
        });
    }
}

function suggestFix(brokenLink) {
    // Simple fuzzy match or check for trailing slash issues
    if (routes.has(brokenLink + '/')) return `Try trailing slash: ${brokenLink}/`;
    if (routes.has(brokenLink.slice(0, -1))) return `Remove trailing slash: ${brokenLink.slice(0, -1)}`;

    // Check for common refactors
    if (brokenLink.includes('-os')) {
        const nonOs = brokenLink.replace('-os', '');
        if (routes.has(nonOs)) return `Try non-OS version: ${nonOs}`;
    }

    return 'Check route existance';
}

async function checkExternalLinks() {
    console.log(`Checking ${issues.external_broken.length} external links... (Sample check only for non-duplicates)`);
    // Deduplicate
    const uniqueLinks = [...new Set(issues.external_broken.map(i => i.link))];
    const statusMap = {};

    // Limit concurrency
    const verifyUrl = (url) => {
        return new Promise((resolve) => {
            const protocol = url.startsWith('https') ? https : http;
            const req = protocol.request(url, { method: 'HEAD', timeout: 3000 }, (res) => {
                if (res.statusCode >= 400 && res.statusCode !== 405 && res.statusCode !== 403) {
                    // 405/403 often mean 'bot blocked' not 'broken', so ignoring them for false positive reduction
                    resolve({ url, status: res.statusCode, valid: false });
                } else {
                    resolve({ url, status: res.statusCode, valid: true });
                }
            });
            req.on('error', () => resolve({ url, status: 'ERROR', valid: false }));
            req.on('timeout', () => { req.destroy(); resolve({ url, status: 'TIMEOUT', valid: true }); }); // Timeout assumes reachable but slow or blocking HEAD
            req.end();
        });
    };

    // Run in chunks of 5
    for (let i = 0; i < uniqueLinks.length; i += 5) {
        const chunk = uniqueLinks.slice(i, i + 5);
        const results = await Promise.all(chunk.map(verifyUrl));
        results.forEach(r => statusMap[r.url] = r);
    }

    // Update issues with real status
    issues.external_broken = issues.external_broken
        .map(issue => ({ ...issue, result: statusMap[issue.link] }))
        .filter(issue => issue.result && !issue.result.valid);
}

function generateReport() {
    let md = `# Comprehensive Site Audit Report\n\nGenerated on: ${new Date().toISOString()}\n\n`;

    md += `## 🔴 Broken Internal Links (${issues.internal_broken.length})\n`;
    if (issues.internal_broken.length === 0) md += "No broken internal links found.\n";
    else {
        md += "| File | Line | Broken Link | Suggestion |\n|---|---|---|---|\n";
        issues.internal_broken.forEach(i => {
            md += `| \`${i.file}\` | ${i.line} | \`${i.link}\` | ${i.suggestion} |\n`;
        });
    }

    md += `\n## 🟠 Missing Assets (${issues.missing_assets.length})\n`;
    if (issues.missing_assets.length === 0) md += "No missing assets found.\n";
    else {
        md += "| File | Line | Missing Asset |\n|---|---|---|\n";
        issues.missing_assets.forEach(i => {
            md += `| \`${i.file}\` | ${i.line} | \`${i.link}\` |\n`;
        });
    }

    // Filter external links to only show unique errors to save space
    const uniqueExternal = issues.external_broken.reduce((acc, current) => {
        const x = acc.find(item => item.link === current.link);
        if (!x) return acc.concat([current]);
        return acc;
    }, []);

    md += `\n## 🟡 Invalid External Links (Unique: ${uniqueExternal.length})\n`;
    if (uniqueExternal.length === 0) md += "No invalid external links found.\n";
    else {
        md += "| Link | Status | File (Example) |\n|---|---|---|\n";
        uniqueExternal.forEach(i => {
            md += `| \`${i.link}\` | ${i.result.status} | \`${i.file}\` |\n`;
        });
    }

    /* md += `\n## ℹ️ Valid Route Map (${routes.size})\n<details><summary>Click to view</summary>\n\n`;
    Array.from(routes).sort().forEach(r => md += `- \`${r}\`\n`);
    md += `\n</details>\n`; */

    fs.writeFileSync(REPORT_FILE, md);
    console.log(`Report written to ${REPORT_FILE}`);
}

async function run() {
    buildRouteIndex();
    buildAssetIndex();

    console.log('Scanning files...');
    SCAN_DIRS.forEach(d => {
        const target = path.join(ROOT_DIR, d);
        if (fs.existsSync(target)) {
            const files = getAllFiles(target);
            files.forEach(f => scanFile(f));
        }
    });

    await checkExternalLinks();
    generateReport();
}

run();
