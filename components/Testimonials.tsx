'use client'
import { useEffect, useState } from "react";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

export default function Testimonials() {
  const { lang } = useLang();
  const t = translations[lang];
  const [index, setIndex] = useState(0);
  const total = t.testimonials.length;
  const current = t.testimonials[index];

  const goNext = () => setIndex((i) => (i + 1) % total);
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-projectsBg px-9 py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-20px] -translate-x-1/2 select-none font-serif text-[260px] italic leading-none text-[rgba(251,246,239,.045)]"
      >
        &rdquo;
      </div>

      <div className="relative mx-auto max-w-[760px]">
        <div className="mb-14 text-center">
          <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.28em] text-projectsAccent">
            {t.ui.testimonials.eyebrow}
          </div>
          <h2 className="font-serif text-[clamp(38px,5vw,48px)] font-medium leading-[1.1] tracking-[-0.01em] text-projectsInk">
            {t.ui.testimonials.title}
          </h2>
        </div>

        <div className="flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border border-[rgba(251,246,239,.28)] bg-[rgba(251,246,239,.05)] text-xl text-projectsInk transition duration-150 hover:border-[rgba(251,246,239,.5)] hover:bg-[rgba(251,246,239,.14)] active:scale-[0.94]"
          >
            &larr;
          </button>

          <div
            className="flex min-h-[260px] max-w-[600px] flex-1 flex-col justify-center text-center"
            aria-live="polite"
          >
            <blockquote
              key={index}
              className="mb-7 animate-fadeUp font-serif text-[22px] italic leading-[1.6] text-projectsInk"
            >
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div>
              <div className="text-[13px] font-medium tracking-[0.06em] text-projectsInk">
                {current.name}
              </div>
              <div className="mt-[5px] text-xs leading-[1.4] text-projectsAccent">
                {current.relationship} · {current.affiliation}
              </div>
              {current.pending && (
                <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-projectsAccent">
                  {t.ui.testimonials.pending}
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border border-[rgba(251,246,239,.28)] bg-[rgba(251,246,239,.05)] text-xl text-projectsInk transition duration-150 hover:border-[rgba(251,246,239,.5)] hover:bg-[rgba(251,246,239,.14)] active:scale-[0.94]"
          >
            &rarr;
          </button>
        </div>

        <div className="mt-9 flex flex-col items-center gap-3.5">
          <div className="flex items-center gap-2.5">
            {t.testimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-[3px] transition-all duration-150 ${
                  i === index
                    ? "h-[6px] w-[22px] bg-projectsAccent"
                    : "h-[6px] w-[6px] bg-[rgba(251,246,239,.28)]"
                }`}
              />
            ))}
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-[rgba(251,246,239,.4)]">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
