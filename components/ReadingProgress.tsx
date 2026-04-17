"use client";

import { useEffect } from "react";

export default function ReadingProgress() {
  useEffect(() => {
    const bar = document.getElementById("reading-progress");
    if (!bar) return;

    function update() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = scrollTop / (scrollHeight - clientHeight);
      if (bar) bar.style.width = `${Math.min(progress * 100, 100)}%`;
    }

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div id="reading-progress" />;
}
