import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-amber-400 transition-colors">Главная</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "#F4A828" }}>О Сармате</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid var(--border)" }}>
            <Image
              src="/sarmat-photo.jpg"
              alt="Сармат Темиров"
              width={500}
              height={500}
              className="w-full object-cover"
            />
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href="https://t.me/ladno_7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex-1 justify-center"
            >
              <TelegramIcon /> Написать
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
            Сармат <span className="gradient-text">Темиров</span>
          </h1>
          <p className="text-lg mb-6" style={{ color: "#F4A828" }}>
            Молодёжный лидер · Церковь «Надежда»
          </p>

          <div className="space-y-4 mb-8">
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Мне 19 лет. Учусь в Северо-Осетинском государственном университете на факультете ПМИ.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Я молодёжный лидер в церкви «Надежда» и руководитель молодёжного служения «Chosen by Hope». Моя цель — мотивировать и наставлять людей, помогать им находить путь к Богу.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Верю, что Бог использует каждого из нас — независимо от возраста и опыта — для великих дел.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Люблю петь и готовлюсь пробежать марафон.
            </p>
          </div>

          <blockquote
            className="px-6 py-4 rounded-xl mb-8"
            style={{ background: "rgba(244,168,40,0.08)", border: "1px solid rgba(244,168,40,0.2)", color: "var(--foreground)" }}
          >
            <p className="italic">«Никто да не пренебрегает юностью твоею; но будь образцом для верных в слове, в житии, в любви, в духе, в вере, в чистоте.»</p>
            <footer className="mt-2 text-sm font-semibold" style={{ color: "#F4A828" }}>— 1 Тимофею 4:12</footer>
          </blockquote>

          <div className="grid grid-cols-2 gap-4">
            <div className="card p-4 text-center">
              <p className="text-2xl font-bold" style={{ color: "#F4A828" }}>19</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>лет</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-2xl font-bold" style={{ color: "#2D6A4F" }}>ЦБН</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>Владикавказ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ministries */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Служения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Молодёжный лидер", desc: "Руководство молодёжным служением Chosen by Hope", color: "#F4A828" },
            { title: "Наставничество", desc: "Личное наставление и помощь в духовном росте", color: "#2D6A4F" },
            { title: "Преподавание Слова", desc: "Проповедь и изучение Библии с молодёжью", color: "#1B3A5C" },
            { title: "Прославление", desc: "Пою в группе прославления церкви «Надежда»", color: "#2D6A4F" },
            { title: "Медиа", desc: "Развитие онлайн-присутствия служения", color: "#F4A828" },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <div className="w-3 h-3 rounded-full mb-3" style={{ background: item.color }} />
              <h3 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/eternity" className="btn-gold">
          Есть вопрос? Напиши мне →
        </Link>
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
