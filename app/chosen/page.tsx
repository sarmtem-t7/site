import Image from "next/image";
import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";

export default function ChosenPage() {
  const ministries = [
    "Соц. сети",
    "Приветствия",
    "Звук",
    "Свет",
    "Экран",
    "Слово",
    "Порядок",
    "Прославление",
    "Организаторы",
    "Наставники",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-amber-400 transition-colors">Главная</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "#F4A828" }}>Chosen by Hope</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-16">
        <Image
          src="/logo-chosen.jpg"
          alt="Chosen by Hope"
          width={120}
          height={120}
          className="rounded-full object-cover mx-auto mb-6"
          style={{ boxShadow: "0 0 0 4px #F4A828" }}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          <span className="gradient-text">Chosen by Hope</span>
        </h1>
        <p className="text-lg" style={{ color: "#F4A828" }}>Избранные Надеждой</p>
      </div>

      {/* About */}
      <div
        className="rounded-2xl p-8 mb-12"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
          Молодёжное служение «Избранные Надеждой» существует для радости и любви во Христе Иисусе. Мы всегда рады тебе на наших молодёжных встречах — приходи, ты здесь нужен.
        </p>
      </div>

      {/* Schedule */}
      <div className="card p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Расписание</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="font-medium" style={{ color: "var(--foreground)" }}>Молодёжная встреча</span>
            <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ background: "rgba(244,168,40,0.15)", color: "#F4A828" }}>
              Воскресенье · 13:45
            </span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="font-medium" style={{ color: "var(--foreground)" }}>Домашние группы</span>
            <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ background: "rgba(45,106,79,0.15)", color: "#2D6A4F" }}>
              Среда · 18:00
            </span>
          </div>
        </div>
        <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
          📍 Владикавказ, ул. Николаева, 75
        </p>
      </div>

      {/* Socials */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Мы в соцсетях</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://t.me/chosenbyhope"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <TelegramIcon /> Telegram
          </a>
          <a
            href="https://www.instagram.com/chosenbyhope_vld"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <InstagramIcon /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@chosen_by_hope"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <TikTokIcon /> TikTok
          </a>
        </div>
      </div>

      {/* Ministries */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Команда служений</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {ministries.map((m) => (
            <div
              key={m}
              className="card p-4 text-center text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              {m}
            </div>
          ))}
        </div>
      </div>

      {/* Application form */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
          Хочешь служить?
        </h2>
        <p className="mb-8" style={{ color: "var(--muted)" }}>
          Подай заявку — мы свяжемся с тобой и расскажем о возможностях.
        </p>
        <ApplicationForm ministries={ministries} />
      </div>
    </div>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
    </svg>
  );
}
