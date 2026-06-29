'use client'
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

export default function Nav() {
  const { lang, setLang } = useLang();
  const t = translations[lang];

  return (
    <nav className="sticky top-0 z-50 bg-bg/[0.88] backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-site items-center justify-between border-b border-line px-9">
        <a
          href="#top"
          className="font-serif text-[23px] font-semibold tracking-[0.02em]"
        >
          {t.profile.name}
        </a>
        <div className="flex items-center gap-[34px]">
          <div className="hidden gap-[34px] text-[13px] uppercase tracking-[0.04em] text-muted md:flex">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-[13px] uppercase tracking-[0.04em] text-muted transition-colors hover:text-accent"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
