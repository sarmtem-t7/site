import Link from "next/link";

export default function MediaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-amber-400 transition-colors">Главная</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "#F4A828" }}>Медиа</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
        <span className="gradient-text">Медиа</span>
      </h1>
      <p className="mb-12" style={{ color: "var(--muted)" }}>
        Фотографии из жизни церкви и молодёжного служения
      </p>

      <div className="card p-12 text-center">
        <div className="text-6xl mb-4">📸</div>
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          Галерея скоро появится
        </h2>
        <p style={{ color: "var(--muted)" }}>
          Здесь будут фотографии со служений, молодёжных встреч и мероприятий.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a
            href="https://www.instagram.com/chosenbyhope_vld"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Instagram Chosen by Hope
          </a>
          <a
            href="https://www.tiktok.com/@chosen_by_hope"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            TikTok Chosen by Hope
          </a>
        </div>
      </div>
    </div>
  );
}
