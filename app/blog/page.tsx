import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-amber-400 transition-colors">Главная</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "#F4A828" }}>Блог</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
        <span className="gradient-text">Блог</span>
      </h1>
      <p className="mb-12" style={{ color: "var(--muted)" }}>
        Мысли о вере, служении и жизни
      </p>

      {posts.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-lg" style={{ color: "var(--muted)" }}>Скоро здесь появятся первые записи...</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 block">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <p className="text-xs mb-2 font-medium" style={{ color: "#F4A828" }}>{post.date}</p>
                  <h2 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{post.title}</h2>
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--muted)" }}>{post.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold" style={{ color: "#F4A828" }}>
                    Читать →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
