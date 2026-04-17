"use client";

import { useState } from "react";

interface Props {
  ministries: string[];
}

export default function ApplicationForm({ ministries }: Props) {
  const [form, setForm] = useState({ name: "", age: "", telegram: "", ministry: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `📋 Новая заявка на служение\n\nИмя: ${form.name}\nВозраст: ${form.age}\nTelegram: @${form.telegram}\nСлужение: ${form.ministry}`
    );
    window.open(`https://t.me/TemirovSarmat?text=${text}`, "_blank");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">🙌</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>Заявка отправлена!</h3>
        <p style={{ color: "var(--muted)" }}>Откроется Telegram — напиши сообщение и мы свяжемся с тобой.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-4 text-sm underline"
          style={{ color: "var(--muted)" }}
        >
          Отправить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>
            Имя *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Твоё имя"
            className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#F4A828")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>
            Возраст *
          </label>
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            placeholder="Сколько тебе лет"
            type="number"
            min="10"
            max="99"
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#F4A828")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>
          Telegram *
        </label>
        <div className="flex">
          <span
            className="px-3 py-3 rounded-l-lg text-sm"
            style={{ background: "var(--border)", color: "var(--muted)" }}
          >
            @
          </span>
          <input
            name="telegram"
            value={form.telegram}
            onChange={handleChange}
            required
            placeholder="username"
            className="flex-1 px-4 py-3 rounded-r-lg text-sm outline-none"
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              borderLeft: "none",
              color: "var(--foreground)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#F4A828")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>
          Какое служение интересует? *
        </label>
        <select
          name="ministry"
          value={form.ministry}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={{
            background: "var(--background)",
            border: "1px solid var(--border)",
            color: form.ministry ? "var(--foreground)" : "var(--muted)",
          }}
        >
          <option value="">Выбери служение</option>
          {ministries.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn-gold w-full justify-center">
        Подать заявку →
      </button>
    </form>
  );
}
