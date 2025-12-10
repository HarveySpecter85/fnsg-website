import { getAllPosts, getFeaturedPost } from "@/lib/get-posts";
import Link from "next/link";
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import { BlogSidebar } from '@/app/components/blog/BlogSidebar';

export const metadata = {
    title: "Company Blog – First National Staffing OS",
    description: "Articles, insights and workforce intelligence from First National Staffing OS.",
};

export default async function BlogPage() {
    const posts = getAllPosts();
    const featured = getFeaturedPost();

    const formatDate = (date: string) => {
        try {
            return new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        } catch {
            return date;
        }
    };

    return (
        <main className="bg-white min-h-screen">
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <CompanyBreadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Company', href: '/company' },
                    { label: 'Blog', href: '' }
                ]} />

                <div className="max-w-4xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Company Blog</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Insights, culture, and updates from the team building the future of industrial staffing in Georgia.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Main Content Column */}
                    <div className="lg:col-span-3 space-y-12">

                        {/* Featured Article */}
                        {featured && (
                            <section className="mb-16">
                                <h2 className="text-lg font-semibold mb-4 text-slate-500 uppercase tracking-wider">Featured Article</h2>
                                <Link
                                    href={`/company/blog/${featured.slug}`}
                                    className="block p-6 rounded-xl border bg-white shadow-sm hover:shadow-lg transition group"
                                >
                                    <p className="text-sm uppercase text-blue-600 mb-2 font-bold">
                                        {featured.category}
                                    </p>
                                    <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{featured.title}</h3>
                                    <p className="text-gray-600 mt-2 line-clamp-2">{featured.description}</p>
                                    <p className="text-gray-400 text-sm mt-4">{formatDate(featured.date)}</p>
                                </Link>
                            </section>
                        )}

                        {/* All Articles */}
                        <section>
                            <h2 className="text-lg font-semibold mb-4 text-slate-500 uppercase tracking-wider">Latest Articles</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {posts
                                    .filter((p) => p.slug !== featured?.slug)
                                    .map((post) => (
                                        <Link
                                            key={post.slug}
                                            href={`/company/blog/${post.slug}`}
                                            className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-lg transition group h-full flex flex-col"
                                        >
                                            <p className="text-sm uppercase text-blue-600 mb-2 font-bold">
                                                {post.category}
                                            </p>
                                            <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors mb-2">{post.title}</h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.description}</p>
                                            <p className="text-gray-400 text-xs mt-auto">{formatDate(post.date)}</p>
                                        </Link>
                                    ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-1">
                        <BlogSidebar className="sticky top-24" />
                    </div>
                </div>
            </div>
        </main>
    );
}
