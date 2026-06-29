'use client'
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="border-t border-line py-14 text-center text-xs tracking-[0.06em] text-muted">
      © {new Date().getFullYear()} {t.profile.name}
    </footer>
  );
}
