import Image from "next/image";
import Link from "next/link";

export default function NadejdaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-amber-400 transition-colors">Главная</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "#F4A828" }}>Церковь «Надежда»</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-16">
        <Image
          src="/logo-nadejda.jpg"
          alt="Надежда"
          width={100}
          height={100}
          className="rounded-full object-cover mx-auto mb-6"
          style={{ boxShadow: "0 0 0 4px #7B1D1D" }}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          Церковь <span className="gradient-text">«Надежда»</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
          Церковь Евангельских Христиан-Баптистов · Владикавказ
        </p>
      </div>

      {/* Mission */}
      <div
        className="rounded-2xl p-8 mb-12"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Наша миссия</h2>
        <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
          Быть светом в этом мире, неся Евангелие Иисуса Христа всем людям. Мы — место, где люди находят поддержку, общение и возможность духовного развития.
        </p>
      </div>

      {/* Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Ценности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Молитва", desc: "Признание её силы и важности в духовной жизни" },
            { title: "Библейское учение", desc: "Изучение и применение Слова Божьего" },
            { title: "Служение в любви", desc: "Служение друг другу с верой и истиной" },
            { title: "Христианское сообщество", desc: "Домашние группы и близкое общение" },
          ].map((v) => (
            <div key={v.title} className="card p-6">
              <div className="w-2 h-8 rounded-full mb-3 inline-block" style={{ background: "#7B1D1D" }} />
              <h3 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>{v.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pastor */}
      <div className="card p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Пастор</h2>
        <div className="flex items-center gap-6">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #7B1D1D, #1B3A5C)" }}
          >
            НК
          </div>
          <div>
            <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>Николай Николаевич Кобзев</h3>
            <p className="text-sm mt-1" style={{ color: "#F4A828" }}>Старший пастор церкви «Надежда»</p>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="card p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Расписание богослужений</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="font-medium" style={{ color: "var(--foreground)" }}>Воскресное богослужение</span>
            <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ background: "rgba(244,168,40,0.15)", color: "#F4A828" }}>
              Воскресенье · 11:00
            </span>
          </div>
          <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="font-medium" style={{ color: "var(--foreground)" }}>Молодёжное служение</span>
            <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ background: "rgba(45,106,79,0.15)", color: "#2D6A4F" }}>
              Воскресенье · 13:45
            </span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="font-medium" style={{ color: "var(--foreground)" }}>Домашние группы</span>
            <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ background: "rgba(27,58,92,0.3)", color: "#4A8FCC" }}>
              Среда · 18:00
            </span>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="card overflow-hidden mb-12">
        <div className="p-6" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Как нас найти</h2>
          <p className="mt-2" style={{ color: "var(--muted)" }}>Владикавказ, ул. Николаева, д. 75</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.123!2d44.6819!3d43.0247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDAxJzI5LjAiTiA0NMKwNDAnNTQuOCJF!5e0!3m2!1sru!2sru!4v1713400000000!5m2!1sru!2sru"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта церкви Надежда"
        />
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="https://t.me/Nadejda757575"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <TelegramIcon /> Telegram-канал
        </a>
        <a
          href="https://cerkov-nadyezhda.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Официальный сайт →
        </a>
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
