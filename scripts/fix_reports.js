const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../app/insights/city');

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('/resources/reports/')) {
                console.log(`Fixing: ${filePath}`);
                content = content.replace(/\/resources\/reports\//g, '/insights/reports/');
                fs.writeFileSync(filePath, content);
            }
        }
    });
}

walk(targetDir);
console.log('Done fixing report links.');
