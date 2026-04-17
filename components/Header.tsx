"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О Сармате" },
  { href: "/blog", label: "Блог" },
  { href: "/nadejda", label: "Надежда" },
  { href: "/chosen", label: "Chosen by Hope" },
  { href: "/schedule", label: "Расписание" },
  { href: "/media", label: "Медиа" },
  { href: "/eternity", label: "Измени вечность" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-chosen.jpg" alt="Chosen by Hope" width={40} height={40} className="rounded-full object-cover" />
          <span className="font-bold text-lg hidden sm:block" style={{ color: "var(--foreground)" }}>
            Сармат Темиров
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: pathname === l.href ? "#F4A828" : "var(--muted)",
                background: pathname === l.href ? "rgba(244,168,40,0.1)" : "transparent",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 rounded-lg"
          style={{ color: "var(--muted)" }}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }} className="lg:hidden px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: pathname === l.href ? "#F4A828" : "var(--muted)",
                background: pathname === l.href ? "rgba(244,168,40,0.1)" : "transparent",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
