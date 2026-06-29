'use client'
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

export default function Awards() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="awards" className="px-9 py-28">
      <div className="mx-auto max-w-site">
        <SectionHeading eyebrow={t.ui.awards.eyebrow} title={t.ui.awards.title} />
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-5 text-4xl">🏆</div>
          <h3 className="mb-3.5 font-serif text-[32px] font-medium leading-tight">
            {t.award.title}
          </h3>
          <p className="mx-auto max-w-[60ch] font-light text-muted">
            {t.award.description}
          </p>
          <div className="mt-5 inline-block text-xs uppercase tracking-[0.16em] text-accent">
            {t.award.period}
          </div>
          {t.award.images && t.award.images.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {t.award.images.map((src, i) => (
                <div key={src} className="overflow-hidden border border-line bg-card">
                  <Image
                    src={src}
                    alt={`Award photo ${i + 1}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 50vw, 380px"
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
