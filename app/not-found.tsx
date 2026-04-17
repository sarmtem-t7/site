import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold mb-4" style={{ color: "#F4A828" }}>404</p>
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          Страница не найдена
        </h1>
        <p className="mb-8 leading-relaxed" style={{ color: "var(--muted)" }}>
          «У нас есть целая вечность для наслаждения победой, но лишь одна жизнь для того, чтобы её одержать» — найди правильный путь.
        </p>
        <Link href="/" className="btn-gold">
          Вернуться домой →
        </Link>
      </div>
    </div>
  );
}
