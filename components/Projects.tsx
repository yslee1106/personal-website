import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/lib/content";

function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-line bg-card">
        <Image
          src={project.image}
          alt={project.imageAlt ?? project.title}
          fill
          sizes="(max-width: 740px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 border border-line bg-accent-soft p-6 text-center text-[13px] tracking-[0.04em] text-muted">
      <span className="text-3xl">◇</span>
      <span>{project.placeholder}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-9 py-28">
      <div className="mx-auto max-w-site">
        <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
        <div className="grid gap-20">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="grid items-center gap-7 md:grid-cols-2 md:gap-14"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <ProjectMedia project={project} />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="mb-4 text-xs uppercase tracking-[0.16em] text-accent">
                  {project.role}
                  {project.period ? ` · ${project.period}` : ""}
                </div>
                <h3 className="mb-4 font-serif text-[34px] font-medium leading-tight">
                  {project.title}
                </h3>
                <p className="mb-5 font-light text-muted">
                  {project.description}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-accent pb-0.5 text-[13px] uppercase tracking-[0.06em] text-accent transition-opacity hover:opacity-70"
                  >
                    {project.hrefLabel ?? "Visit"}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
