import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    category: string;
    featured?: boolean;
    tags?: string[];
}

const BLOG_PATH = path.join(process.cwd(), "app/company/blog");

function parseMetadata(content: string): any {
    const metadataRegex = /export\s+const\s+metadata\s*=\s*({[\s\S]*?});/;
    const match = content.match(metadataRegex);
    if (!match) return {};

    const metadataBlock = match[1];
    const metadata: any = {};

    // Helper to extract values
    const extract = (key: string) => {
        const regex = new RegExp(`${key}:\\s*"([^"]+)"`);
        const match = metadataBlock.match(regex);
        return match ? match[1] : null;
    };

    metadata.title = extract("title");
    metadata.description = extract("description");
    metadata.category = extract("category");
    metadata.date = extract("date");

    return metadata;
}

export function getAllPosts(): BlogPost[] {
    const folders = fs.readdirSync(BLOG_PATH);

    const posts: BlogPost[] = folders
        .map((folder) => {
            const filePath = path.join(BLOG_PATH, folder, "page.mdx");
            if (!fs.existsSync(filePath)) return null;

            const fileContent = fs.readFileSync(filePath, "utf-8");
            try {
                const { data } = matter(fileContent);
                const metadata = parseMetadata(fileContent);

                // Resolution order: metadata -> frontmatter -> fallback
                const title = metadata.title ?? data.title ?? "Untitled";
                const description = metadata.description ?? data.description ?? "";
                const category = metadata.category ?? data.category ?? "General";

                // Date resolution
                const parseDate = (d: any) => {
                    if (d instanceof Date) return d;
                    if (!d) return null;
                    const parsed = new Date(d);
                    return isNaN(parsed.getTime()) ? null : parsed;
                };

                const dateObj = parseDate(metadata.date) ?? parseDate(data.date) ?? new Date();
                // Format to YYYY-MM-DD for consistency
                const dateStr = dateObj.toISOString().split('T')[0];

                return {
                    slug: folder,
                    title: title,
                    date: dateStr,
                    description: description,
                    category: category,
                    featured: data.featured ?? false,
                    tags: data.tags ?? [],
                };
            } catch (e) {
                console.error(`Error parsing metadata for ${folder}:`, e);
                return null;
            }
        })
        .filter(Boolean) as BlogPost[];

    // Order newest first
    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getFeaturedPost(): BlogPost | null {
    const posts = getAllPosts();
    return posts.find((p) => p.featured) ?? null;
}
