import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }} className="mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>Сармат Темиров</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Молодёжный лидер церкви «Надежда», Владикавказ
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://t.me/ladno_7" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
                <TelegramIcon /> Написать
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3" style={{ color: "var(--foreground)" }}>Разделы</h3>
            <div className="flex flex-col gap-2">
              {[
                ["О Сармате", "/about"],
                ["Блог", "/blog"],
                ["Церковь Надежда", "/nadejda"],
                ["Chosen by Hope", "/chosen"],
                ["Расписание", "/schedule"],
                ["Медиа", "/media"],
                ["Измени вечность", "/eternity"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="text-sm hover:text-amber-400 transition-colors" style={{ color: "var(--muted)" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3" style={{ color: "var(--foreground)" }}>Контакты</h3>
            <div className="flex flex-col gap-3">
              <a href="https://t.me/ladno_7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors" style={{ color: "var(--muted)" }}>
                <TelegramIcon /> @ladno_7
              </a>
              <a href="https://t.me/Nadejda757575" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors" style={{ color: "var(--muted)" }}>
                <TelegramIcon /> @Nadejda757575
              </a>
              <a href="https://t.me/chosenbyhope" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors" style={{ color: "var(--muted)" }}>
                <TelegramIcon /> @chosenbyhope
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }} className="mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Сармат Темиров · Владикавказ</p>
        </div>
      </div>
    </footer>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
