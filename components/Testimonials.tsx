import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-9 py-28">
      <div className="mx-auto max-w-site">
        <SectionHeading eyebrow="In Their Words" title="Testimonials" />
        <div className="grid gap-12 md:grid-cols-2 md:gap-12">
          {testimonials.map((t) => (
            <figure key={t.name} className="px-2 text-center">
              <blockquote className="mb-6 font-serif text-[27px] italic leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="text-[13px] uppercase tracking-[0.12em]">
                  {t.name}
                </div>
                <div className="mt-1 text-[13px] font-light text-muted">
                  {t.affiliation}
                </div>
                {t.pending && (
                  <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-accent">
                    Quote pending
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
