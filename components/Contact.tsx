import { contacts } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="px-9 py-28">
      <div className="mx-auto max-w-site text-center">
        <h2 className="mb-5 font-serif text-[clamp(44px,7vw,80px)] font-medium leading-tight tracking-tight">
          Let&apos;s get <em className="italic">in touch.</em>
        </h2>
        <p className="mb-11 text-[17px] font-light text-muted">
          Open to product, engineering, and research conversations.
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-7">
          {contacts.map((c) => {
            const inner = (
              <span className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm transition-colors group-hover:border-accent group-hover:text-accent">
                <span className="text-[11px] uppercase tracking-[0.14em] text-muted group-hover:text-accent">
                  {c.label}
                </span>
                {c.value}
              </span>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group"
              >
                {inner}
              </a>
            ) : (
              <span key={c.label} className="group">
                {inner}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
