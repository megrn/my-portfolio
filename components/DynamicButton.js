// components/DynamicButton.js
import { useState, useEffect } from "react";

/**
 * DynamicButton
 * props:
 * - href: رابط الوجهة
 * - children: نص الزر
 * - variants (اختياري): array من مفاتيح الألوان في Tailwind
 */
export default function DynamicButton({
  href,
  children,
  variants = ["secondary", "accent", "purple-500", "pink-500", "yellow-400"],
}) {
  const [bg, setBg] = useState(variants[0]);

  useEffect(() => {
    const idx = Math.floor(Math.random() * variants.length);
    setBg(variants[idx]);
  }, [variants]);

  // خريطة لفئات Tailwind
  const mapBg = {
    secondary:   "bg-secondary",
    accent:      "bg-accent",
    "purple-500":"bg-purple-500",
    "pink-500":  "bg-pink-500",
    "yellow-400":"bg-yellow-400",
  };

  const bgClass = mapBg[bg] || "bg-secondary";

  return (
    <a
      href={href}
      className={`${bgClass} text-white px-6 py-3 rounded-lg shadow-card hover:shadow-hover transition`}
    >
      {children}
    </a>
  );
}
