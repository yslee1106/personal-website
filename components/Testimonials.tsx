"use client";

import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="testimonials" className="px-9 py-28">
      <div className="mx-auto max-w-site">
        <SectionHeading eyebrow={t.ui.testimonials.eyebrow} title={t.ui.testimonials.title} />
        <div className="grid gap-12 md:grid-cols-2 md:gap-12">
          {t.testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="px-2 text-center">
              <blockquote className="mb-6 font-serif text-[27px] italic leading-snug">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="text-[13px] uppercase tracking-[0.12em]">
                  {testimonial.name}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted">
                  {testimonial.relationship}
                </div>
                <div className="mt-1 text-[13px] font-light text-muted">
                  {testimonial.affiliation}
                </div>
                {testimonial.pending && (
                  <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-accent">
                    {t.ui.testimonials.pending}
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
