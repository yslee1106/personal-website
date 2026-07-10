'use client'
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

function splitLast(text: string) {
  const words = text.split(" ");
  if (words.length < 2) return null;
  return { first: words.slice(0, -1).join(" "), last: words[words.length - 1] };
}

function splitDetail(detail: string) {
  const idx = detail.indexOf("·");
  if (idx === -1) return [detail];
  return [detail.slice(0, idx).trim(), detail.slice(idx).trim()];
}

export default function Education() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="education" className="bg-accent-soft px-9 py-28">
      <div className="mx-auto max-w-site">
        <SectionHeading eyebrow={t.ui.education.eyebrow} title={t.ui.education.title} />

        <div className="relative mx-auto grid max-w-[760px] grid-cols-1 gap-9 sm:grid-cols-2">
          <div className="absolute left-1/2 top-[46px] hidden h-[calc(100%-46px)] w-px -translate-x-1/2 bg-[rgba(90,107,78,.25)] sm:block" />

          {t.education.map((e) => {
            const nameLines = splitLast(e.school);
            const detailLines = splitDetail(e.detail);
            return (
              <div key={e.school} className="px-5 py-2 text-center">
                <div className="mx-auto mb-[22px] flex h-[92px] w-[92px] items-center justify-center rounded-full border border-[rgba(90,107,78,.18)] bg-white p-4 shadow-[0_12px_26px_rgba(27,28,26,.08)]">
                  <div
                    className={`relative ${
                      e.logoScale === 82 ? "h-[82%] w-[82%]" : "h-full w-full"
                    }`}
                  >
                    <Image src={e.logo} alt={`${e.school} logo`} fill className="object-contain" />
                  </div>
                </div>
                <h3 className="mb-2 font-serif text-[26px] font-medium leading-[1.25] text-ink">
                  {nameLines ? (
                    <>
                      {nameLines.first}
                      <br />
                      {nameLines.last}
                    </>
                  ) : (
                    e.school
                  )}
                </h3>
                <div className="mb-3 text-sm font-light leading-[1.6] text-muted">
                  {detailLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < detailLines.length - 1 && <br />}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-accent">
                  {e.period}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
