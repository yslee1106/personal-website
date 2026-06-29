'use client'
import SectionHeading from "./SectionHeading";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

export default function Education() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="education" className="px-9 py-28">
      <div className="mx-auto max-w-site">
        <SectionHeading eyebrow={t.ui.education.eyebrow} title={t.ui.education.title} />
        <div className="mx-auto max-w-[760px]">
          {t.education.map((e) => (
            <div
              key={e.school}
              className="grid grid-cols-1 items-baseline gap-2 border-t border-line py-8 last:border-b sm:grid-cols-[1fr_auto] sm:gap-6"
            >
              <div>
                <h3 className="mb-1.5 font-serif text-[26px] font-medium">
                  {e.school}
                </h3>
                <div className="text-sm font-light text-muted">{e.detail}</div>
              </div>
              <div className="whitespace-nowrap text-xs uppercase tracking-[0.1em] text-accent sm:text-right">
                {e.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
