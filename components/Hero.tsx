'use client'
import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen((v) => !v);
  };

  return (
    <header
      id="top"
      onClick={closeMenu}
      className="bg-heroBg px-6 py-16 md:px-[72px] md:py-[88px]"
    >
      <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:min-h-[640px]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-[26px] bg-heroAccent" />
            <span className="text-xs uppercase tracking-[0.28em] text-heroAccent">
              {t.profile.eyebrow}
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,9vw,84px)] font-semibold leading-[0.98] tracking-tight text-heroInk">
            {t.profile.firstName}
            <br />
            {t.profile.lastName}
          </h1>
          <p className="mt-6 max-w-[46ch] text-[17px] font-light leading-relaxed text-heroMuted">
            {t.profile.bio}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-[2px] border border-heroAccent bg-heroAccent px-9 py-4 text-[13px] font-medium uppercase tracking-[0.08em] text-heroOnAccent transition-colors duration-200 hover:border-heroInk hover:bg-heroInk"
            >
              {t.ui.hero.viewWorks}
            </a>
            <div className="relative">
              <button
                type="button"
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                className="inline-flex items-center gap-2 rounded-[2px] border border-heroInk px-6 py-[15px] text-[13px] font-medium uppercase tracking-[0.08em] text-heroInk transition-colors duration-200 hover:bg-heroHover"
              >
                {t.ui.hero.resume}
                <span
                  className={`inline-block transition-transform duration-[180ms] ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>
              {menuOpen && (
                <div className="absolute left-0 top-full z-20 mt-2 min-w-[240px] w-max rounded-[2px] border border-heroBorder bg-heroPanel py-2 shadow-[0_12px_30px_rgba(42,37,32,.14)]">
                  {t.resumes.map((resume) => (
                    <a
                      key={resume.href}
                      href={resume.href}
                      download
                      className="block px-5 py-3 text-[13px] font-medium text-heroInk transition-colors duration-150 hover:bg-heroHover"
                    >
                      {resume.label} ↓
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="order-first md:order-none">
          <div className="relative h-[320px] w-full overflow-hidden rounded-[2px] md:h-full md:min-h-[480px] md:[clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)]">
            <Image
              src="/lee-ying-sheng.jpg"
              alt="Lee Ying Sheng"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover [filter:sepia(.35)_saturate(1.3)_hue-rotate(-8deg)_contrast(1.02)]"
            />
            <div className="absolute inset-0 [background:linear-gradient(200deg,rgba(180,85,45,.22),rgba(42,37,32,.08))]" />
          </div>
        </div>
      </div>
    </header>
  );
}
