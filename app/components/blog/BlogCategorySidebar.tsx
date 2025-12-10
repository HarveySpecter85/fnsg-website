import Link from "next/link";
import { getAllCategories } from "@/lib/get-categories";

export default function BlogCategorySidebar() {
    const categories = getAllCategories();

    return (
        <div className="w-full p-6 rounded-xl border bg-white shadow-sm sticky top-24">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
                {categories.map((cat) => (
                    <li key={cat}>
                        <Link
                            href={`/company/blog/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-blue-600 hover:underline block py-1"
                        >
                            {cat}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
