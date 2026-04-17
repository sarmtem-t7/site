import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.(md|mdx)$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ? new Date(data.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }) : "",
      excerpt: data.excerpt ?? content.slice(0, 150).replace(/[#*_]/g, "") + "...",
      cover: data.cover ?? null,
      content,
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const filePathMdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const fp = fs.existsSync(filePath) ? filePath : fs.existsSync(filePathMdx) ? filePathMdx : null;
  if (!fp) return null;
  const raw = fs.readFileSync(fp, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? new Date(data.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }) : "",
    excerpt: data.excerpt ?? content.slice(0, 150).replace(/[#*_]/g, "") + "...",
    cover: data.cover ?? null,
    content,
  };
}
