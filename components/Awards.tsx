import SectionHeading from "./SectionHeading";
import { award } from "@/lib/content";

export default function Awards() {
  return (
    <section id="awards" className="px-9 py-28">
      <div className="mx-auto max-w-site">
        <SectionHeading eyebrow="Recognition" title="Awards" />
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-5 text-4xl">🏆</div>
          <h3 className="mb-3.5 font-serif text-[32px] font-medium leading-tight">
            {award.title}
          </h3>
          <p className="mx-auto max-w-[60ch] font-light text-muted">
            {award.description}
          </p>
          <div className="mt-5 inline-block text-xs uppercase tracking-[0.16em] text-accent">
            {award.period}
          </div>
        </div>
      </div>
    </section>
  );
}
