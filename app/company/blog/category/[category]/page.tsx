import { getPostsByCategory } from "@/lib/get-categories";
import Link from "next/link";
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const categoryName = category.replace(/-/g, " ");
    return {
        title: `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} - Blog | FNSG`,
        description: `Articles about ${categoryName} from First National Staffing.`,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const categoryName = category.replace(/-/g, " ");
    const posts = getPostsByCategory(categoryName);

    return (
        <main className="bg-white min-h-screen">
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <CompanyBreadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Company', href: '/company' },
                    { label: 'Blog', href: '/company/blog' },
                    { label: categoryName, href: '' }
                ]} />

                <div className="max-w-4xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 capitalize">{categoryName}</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Browse all articles in {categoryName}.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/company/blog/${post.slug}`}
                            className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-lg transition flex flex-col h-full"
                        >
                            <p className="text-xs uppercase text-blue-600 mb-2 font-bold">{post.category}</p>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">{post.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.description}</p>
                            <p className="text-gray-400 text-xs mt-auto">{post.date}</p>
                        </Link>
                    ))}
                </div>
                {posts.length === 0 && (
                    <p className="text-slate-500">No articles found in this category.</p>
                )}
            </div>
        </main>
    );
}
