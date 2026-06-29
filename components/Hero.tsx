'use client'
import Image from "next/image";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <header id="top" className="px-9 pb-28 pt-32 text-center sm:pt-36">
      <div className="mx-auto max-w-site">
        <div className="mb-8 flex justify-center">
          <Image
            src="/lee-ying-sheng.jpg"
            alt="Lee Ying Sheng"
            width={140}
            height={140}
            className="rounded-full object-cover ring-1 ring-line"
            priority
          />
        </div>
        <div className="mb-9 text-xs uppercase tracking-[0.28em] text-accent">
          {t.profile.eyebrow}
        </div>
        <h1 className="mx-auto font-serif text-[clamp(56px,10vw,124px)] font-medium leading-[0.98] tracking-tight">
          {t.profile.firstName} <em className="italic">{t.profile.lastName}</em>
        </h1>
        <p className="mx-auto mb-11 mt-7 max-w-[50ch] text-[19px] font-light text-muted">
          {t.profile.bio}
        </p>
        <div className="flex flex-col items-center gap-5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-ink bg-ink px-9 py-4 text-[13px] font-medium uppercase tracking-[0.08em] text-bg transition-colors duration-200 hover:border-accent hover:bg-accent"
          >
            {t.ui.hero.viewWorks}
          </a>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {t.resumes.map((resume) => (
              <a
                key={resume.href}
                href={resume.href}
                download
                className="inline-flex items-center gap-1.5 border border-ink px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-200 hover:bg-ink hover:text-bg"
              >
                {resume.label} ↓
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
