import { profile, resumes } from "@/lib/content";

export default function Hero() {
  return (
    <header id="top" className="px-9 pb-28 pt-32 text-center sm:pt-36">
      <div className="mx-auto max-w-site">
        <div className="mb-9 text-xs uppercase tracking-[0.28em] text-accent">
          {profile.eyebrow}
        </div>
        <h1 className="mx-auto font-serif text-[clamp(56px,10vw,124px)] font-medium leading-[0.98] tracking-tight">
          {profile.firstName} <em className="italic">{profile.lastName}</em>
        </h1>
        <p className="mx-auto mb-11 mt-7 max-w-[50ch] text-[19px] font-light text-muted">
          {profile.bio}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {resumes.map((resume, i) => (
            <a
              key={resume.href}
              href={resume.href}
              download
              className={
                "inline-flex items-center gap-2 border px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 " +
                (i === 0
                  ? "border-ink bg-ink text-bg hover:border-accent hover:bg-accent"
                  : "border-ink text-ink hover:bg-ink hover:text-bg")
              }
            >
              {resume.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
