"use client";

export default function ShareButtons({ title }: { title: string }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`https://t.me/share/url?url=${encodedUrl}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-sm py-2 px-4"
      >
        Telegram
      </a>
      <a
        href={`https://vk.com/share.php?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-sm py-2 px-4"
      >
        ВКонтакте
      </a>
      <button
        onClick={() => navigator.clipboard?.writeText(url)}
        className="btn-primary text-sm py-2 px-4"
      >
        Скопировать ссылку
      </button>
    </div>
  );
}
