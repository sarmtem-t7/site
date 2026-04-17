import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/ReadingProgress";
import ShareButtons from "@/components/ShareButtons";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n").filter(Boolean);
  const headings = paragraphs.filter((p) => p.startsWith("#")).map((h) => {
    const level = h.match(/^#+/)?.[0].length ?? 1;
    const text = h.replace(/^#+\s*/, "");
    const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    return { level, text, id };
  });

  return (
    <>
      <ReadingProgress />
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8" style={{ color: "var(--muted)" }}>
          <Link href="/" className="hover:text-amber-400 transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-amber-400 transition-colors">Блог</Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#F4A828" }}>{post.title}</span>
        </nav>

        <p className="text-sm mb-3 font-medium" style={{ color: "#F4A828" }}>{post.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "var(--foreground)" }}>
          {post.title}
        </h1>

        {/* TOC */}
        {headings.length > 1 && (
          <div
            className="rounded-xl p-6 mb-8"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p className="text-sm font-semibold mb-3" style={{ color: "var(--muted)" }}>Содержание</p>
            <ul className="space-y-2">
              {headings.map((h) => (
                <li key={h.id} style={{ paddingLeft: `${(h.level - 1) * 16}px` }}>
                  <a href={`#${h.id}`} className="text-sm hover:text-amber-400 transition-colors" style={{ color: "var(--muted)" }}>
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content */}
        <article className="prose-content space-y-4">
          {paragraphs.map((para, i) => {
            if (para.startsWith("# ")) {
              const text = para.slice(2);
              const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
              return <h1 key={i} id={id} className="text-3xl font-bold mt-8 mb-4" style={{ color: "var(--foreground)" }}>{text}</h1>;
            }
            if (para.startsWith("## ")) {
              const text = para.slice(3);
              const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
              return <h2 key={i} id={id} className="text-2xl font-bold mt-6 mb-3" style={{ color: "var(--foreground)" }}>{text}</h2>;
            }
            if (para.startsWith("### ")) {
              const text = para.slice(4);
              const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
              return <h3 key={i} id={id} className="text-xl font-bold mt-4 mb-2" style={{ color: "var(--foreground)" }}>{text}</h3>;
            }
            if (para.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="px-6 py-4 rounded-xl my-6 italic text-lg"
                  style={{ background: "rgba(244,168,40,0.08)", border: "1px solid rgba(244,168,40,0.2)", color: "var(--foreground)" }}
                >
                  {para.slice(2)}
                </blockquote>
              );
            }
            if (para.startsWith("- ") || para.startsWith("* ")) {
              return <li key={i} className="ml-4" style={{ color: "var(--muted)" }}>{para.slice(2)}</li>;
            }
            return <p key={i} className="leading-relaxed" style={{ color: "var(--muted)" }}>{para}</p>;
          })}
        </article>

        {/* Share */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-sm font-medium mb-4" style={{ color: "var(--muted)" }}>Поделиться</p>
          <ShareButtons title={post.title} />
        </div>

        {/* Comments placeholder */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Комментарии</h2>
          <div className="card p-8 text-center">
            <p style={{ color: "var(--muted)" }}>Комментарии будут доступны после подключения GitHub Discussions.</p>
            <a
              href="https://t.me/ladno_7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 mx-auto"
              style={{ display: "inline-flex" }}
            >
              Написать Сармату
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
