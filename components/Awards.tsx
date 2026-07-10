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

        <div className="mx-auto grid max-w-[800px] grid-cols-1 items-center gap-12 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="relative order-first h-[340px] sm:order-none">
            <div className="absolute right-0 top-0 aspect-[4/3] w-[74%] overflow-hidden shadow-[0_18px_40px_rgba(27,28,26,.14)]">
              <Image
                src={t.award.images[0]}
                alt="1st Prize award photo — team with amphibious vehicle"
                fill
                sizes="(max-width: 640px) 60vw, 320px"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 aspect-[4/3] w-[56%] overflow-hidden border-[6px] border-bg shadow-[0_18px_40px_rgba(27,28,26,.18)]">
              <Image
                src={t.award.images[1]}
                alt="1st Prize award photo — vehicle prototype"
                fill
                sizes="(max-width: 640px) 45vw, 240px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-[clamp(44px,5vw,68px)] font-medium leading-[0.95] tracking-[-0.01em] text-accent">
              {t.award.badge}
            </h3>
            <div className="mb-[18px] text-[15px] font-medium leading-[1.4] text-ink">
              {t.award.competition}
            </div>
            <p className="text-[15px] font-light leading-[1.7] text-muted">
              {t.award.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
