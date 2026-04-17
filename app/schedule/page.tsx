import Link from "next/link";

const schedule = [
  {
    day: "Воскресенье",
    events: [
      { time: "11:00", title: "Воскресное богослужение", place: "Церковь «Надежда»", color: "#7B1D1D" },
      { time: "13:45", title: "Молодёжная встреча", place: "Chosen by Hope", color: "#F4A828" },
    ],
  },
  {
    day: "Среда",
    events: [
      { time: "18:00", title: "Домашние группы", place: "Chosen by Hope", color: "#2D6A4F" },
    ],
  },
];

export default function SchedulePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-amber-400 transition-colors">Главная</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "#F4A828" }}>Расписание</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
        <span className="gradient-text">Расписание</span>
      </h1>
      <p className="mb-12" style={{ color: "var(--muted)" }}>
        Владикавказ, ул. Николаева, 75
      </p>

      <div className="space-y-8">
        {schedule.map(({ day, events }) => (
          <div key={day}>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>{day}</h2>
            <div className="space-y-3">
              {events.map((e) => (
                <div key={e.title} className="card p-6 flex items-center gap-6">
                  <div
                    className="text-2xl font-bold w-16 flex-shrink-0 text-center"
                    style={{ color: e.color }}
                  >
                    {e.time}
                  </div>
                  <div
                    className="w-px h-12 flex-shrink-0"
                    style={{ background: e.color + "44" }}
                  />
                  <div>
                    <p className="font-bold" style={{ color: "var(--foreground)" }}>{e.title}</p>
                    <p className="text-sm mt-1" style={{ color: e.color }}>{e.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-12 rounded-2xl p-6"
        style={{ background: "var(--surface)", border: "1px solid rgba(244,168,40,0.2)" }}
      >
        <p className="font-medium mb-2" style={{ color: "var(--foreground)" }}>Хочешь прийти?</p>
        <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
          Мы рады каждому. Просто приходи — никакой регистрации не нужно.
        </p>
        <a
          href="https://t.me/ladno_7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Написать Сармату
        </a>
      </div>
    </div>
  );
}
