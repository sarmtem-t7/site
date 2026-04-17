import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function HomePage() {
  const posts = await getBlogPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center px-4"
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #1B3A5C 50%, #0d1117 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #F4A828 0%, transparent 50%), radial-gradient(circle at 70% 80%, #2D6A4F 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/sarmat-photo.jpg"
              alt="Сармат Темиров"
              width={120}
              height={120}
              className="rounded-full object-cover"
              style={{ boxShadow: "0 0 0 4px #F4A828" }}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
            Сармат{" "}
            <span className="gradient-text">Темиров</span>
          </h1>
          <p className="text-lg md:text-xl mb-4" style={{ color: "var(--muted)" }}>
            Молодёжный лидер · Церковь «Надежда» · Владикавказ
          </p>
          <blockquote
            className="text-base md:text-lg italic max-w-2xl mx-auto mb-8 px-6 py-4 rounded-xl"
            style={{
              background: "rgba(244,168,40,0.08)",
              border: "1px solid rgba(244,168,40,0.2)",
              color: "var(--foreground)",
            }}
          >
            «У нас есть целая вечность для наслаждения победой, но лишь одна жизнь для того, чтобы её одержать»
          </blockquote>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://t.me/TemirovSarmat"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <TelegramIcon /> Написать в Telegram
            </a>
            <Link href="/about" className="btn-primary">
              Узнать обо мне
            </Link>
          </div>
        </div>
      </section>

      {/* Bible verse */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xl md:text-2xl font-medium leading-relaxed"
            style={{ color: "var(--foreground)" }}
          >
            «Никто да не пренебрегает юностью твоею; но будь образцом для верных в слове, в житии, в любви, в духе, в вере, в чистоте.»
          </p>
          <p className="mt-3 font-semibold" style={{ color: "#F4A828" }}>
            — 1 Тимофею 4:12
          </p>
        </div>
      </section>

      {/* Church blocks */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/nadejda" className="card p-8 block">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/logo-nadejda.jpg"
                alt="Надежда"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                Церковь «Надежда»
              </h2>
            </div>
            <p className="leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              Церковь Евангельских Христиан-Баптистов, несущая Евангелие Иисуса Христа людям Владикавказа.
            </p>
            <span className="text-sm font-semibold" style={{ color: "#F4A828" }}>
              Узнать больше →
            </span>
          </Link>

          <Link href="/chosen" className="card p-8 block">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/logo-chosen.jpg"
                alt="Chosen by Hope"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                Chosen by Hope
              </h2>
            </div>
            <p className="leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              Молодёжное служение «Избранные Надеждой» — для радости и любви во Христе Иисусе.
            </p>
            <span className="text-sm font-semibold" style={{ color: "#F4A828" }}>
              Узнать больше →
            </span>
          </Link>
        </div>
      </section>

      {/* Latest blog posts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>
              Последние записи
            </h2>
            <Link
              href="/blog"
              className="text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "#F4A828" }}
            >
              Все записи →
            </Link>
          </div>
          {latestPosts.length === 0 ? (
            <div className="card p-12 text-center">
              <p style={{ color: "var(--muted)" }}>Скоро здесь появятся первые записи...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 block">
                  {post.cover && (
                    <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={post.cover}
                        alt={post.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-xs mb-2" style={{ color: "#F4A828" }}>
                    {post.date}
                  </p>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-3"
                    style={{ color: "var(--muted)" }}
                  >
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div
          className="max-w-3xl mx-auto text-center rounded-2xl p-12"
          style={{
            background: "linear-gradient(135deg, #1B3A5C, #2D6A4F)",
            border: "1px solid rgba(244,168,40,0.2)",
          }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Есть вопросы о Боге?</h2>
          <p className="mb-8 text-white/80">
            Я готов поговорить с тобой лично. Напиши мне — отвечу на любые вопросы.
          </p>
          <Link href="/eternity" className="btn-gold">
            Измени свою вечность →
          </Link>
        </div>
      </section>
    </>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
