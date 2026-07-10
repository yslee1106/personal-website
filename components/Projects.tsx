'use client'
import Image from "next/image";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

export default function Projects() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="projects" className="bg-projectsBg px-6 py-16 md:px-16 md:py-[88px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-16">
          <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-projectsAccent">
            {t.ui.projects.eyebrow}
          </div>
          <h2 className="font-display text-[46px] font-medium leading-[1.1] text-projectsInk">
            {t.ui.projects.title}
          </h2>
        </div>

        <div>
          {t.projects.map((project, i) => (
            <article
              key={project.title}
              className={`border-b border-projectsBorder ${i === 0 ? "border-t" : ""}`}
            >
              <div className="grid grid-cols-1 items-center gap-10 pb-10 pt-7 md:grid-cols-[1fr_1.15fr]">
                <div>
                  <div className="mb-[18px] flex items-baseline gap-4">
                    <span className="font-display text-[15px] font-medium text-projectsAccent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-[27px] font-medium leading-[1.25] text-projectsInk">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-projectsAccent">
                    {project.role}
                  </div>
                  <p className="mb-[18px] text-[15.5px] leading-[1.7] text-projectsMuted">
                    {project.description}
                  </p>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-projectsAccent pb-0.5 text-xs font-medium uppercase tracking-[0.05em] text-projectsAccent transition-opacity hover:opacity-70"
                    >
                      {project.hrefLabel}
                    </a>
                  )}
                </div>

                {project.image && (
                  <div className="overflow-hidden rounded-[6px] bg-projectsPlaceholder">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      width={1200}
                      height={900}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
