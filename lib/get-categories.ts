import { getAllPosts } from "./get-posts";

export function getAllCategories() {
    const posts = getAllPosts();
    const categories = new Set(posts.map((p) => p.category));
    return Array.from(categories).filter((c): c is string => typeof c === 'string' && c.length > 0);
}

export function getPostsByCategory(category: string) {
    const posts = getAllPosts();
    // Normalize category for comparison (handle dashes vs spaces if needed)
    // The route usually passes 'industry-insights', we should match loosely or normalize both
    return posts.filter((p) => {
        const pCat = p.category.toLowerCase().replace(/\s+/g, "-");
        const qCat = category.toLowerCase().replace(/\s+/g, "-");
        return pCat === qCat;
    });
}
