import { navLinks, profile } from "@/lib/content";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/[0.88] backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-site items-center justify-between border-b border-line px-9">
        <a
          href="#top"
          className="font-serif text-[23px] font-semibold tracking-[0.02em]"
        >
          {profile.name}
        </a>
        <div className="hidden gap-[34px] text-[13px] uppercase tracking-[0.04em] text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
