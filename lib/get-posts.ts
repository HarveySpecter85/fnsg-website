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

export function getAllPosts(): BlogPost[] {
    const folders = fs.readdirSync(BLOG_PATH);

    const posts: BlogPost[] = folders
        .map((folder) => {
            const filePath = path.join(BLOG_PATH, folder, "page.mdx");
            if (!fs.existsSync(filePath)) return null;

            const fileContent = fs.readFileSync(filePath, "utf-8");
            try {
                const { data } = matter(fileContent);

                return {
                    slug: folder,
                    title: data.title ?? "Untitled",
                    date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : (data.date ? String(data.date) : "1970-01-01"),
                    description: data.description ?? "",
                    category: data.category ?? "General",
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
