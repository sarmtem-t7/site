import Link from "next/link";

export default function EternityPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-amber-400 transition-colors">Главная</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "#F4A828" }}>Измени свою вечность</span>
      </nav>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
          Измени свою{" "}
          <span className="gradient-text">вечность</span>
        </h1>
        <p className="text-xl" style={{ color: "var(--muted)" }}>
          «У нас есть целая вечность для наслаждения победой, но лишь одна жизнь для того, чтобы её одержать»
        </p>
      </div>

      {/* Main content */}
      <div
        className="rounded-2xl p-8 md:p-12 mb-8"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: "var(--foreground)" }}
        >
          В мире полно страхов и сомнений, но в Боге можно найти утешение и покой. Не бойся обратиться к Нему — Он всегда услышит и примет.
        </p>
        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: "var(--muted)" }}
        >
          Если у тебя есть вопросы о Боге, о Библии, о смысле жизни — я готов поговорить. Лично. Без осуждения. Приходи на наши встречи или просто напиши мне.
        </p>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Ты можешь прийти на служение в любой момент. Мы рады каждому.
        </p>
      </div>

      {/* Bible verse */}
      <blockquote
        className="rounded-2xl px-8 py-6 mb-8 text-center"
        style={{ background: "rgba(244,168,40,0.08)", border: "1px solid rgba(244,168,40,0.3)" }}
      >
        <p className="text-xl italic mb-3" style={{ color: "var(--foreground)" }}>
          «Ибо так возлюбил Бог мир, что отдал Сына Своего единородного, дабы всякий верующий в Него не погиб, но имел жизнь вечную.»
        </p>
        <footer className="font-semibold" style={{ color: "#F4A828" }}>— Иоанна 3:16</footer>
      </blockquote>

      {/* CTA */}
      <div className="text-center space-y-4">
        <p className="text-lg font-medium" style={{ color: "var(--foreground)" }}>
          Готов поговорить? Напиши мне прямо сейчас.
        </p>
        <a
          href="https://t.me/ladno_7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mx-auto"
          style={{ display: "inline-flex" }}
        >
          <TelegramIcon /> Написать Сармату
        </a>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Или приходи на встречу: воскресенье, 13:45 · Владикавказ, Николаева 75
        </p>
      </div>
    </div>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
