'use client'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedinIn, FaWeixin } from "react-icons/fa";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/i18n";

const ICONS: Record<string, { Icon: typeof FaEnvelope; size: string }> = {
  email: { Icon: FaEnvelope, size: "text-[13px]" },
  phone: { Icon: FaPhone, size: "text-[12px]" },
  github: { Icon: FaGithub, size: "text-[14px]" },
  linkedin: { Icon: FaLinkedinIn, size: "text-[14px]" },
  wechat: { Icon: FaWeixin, size: "text-[15px]" },
};

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="contact" className="flex min-h-[50vh] flex-col border-t border-heroBorder bg-heroBg">
      <div className="flex flex-1 flex-col items-center justify-center px-10 py-16 text-center">
        <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-heroAccent">
          {t.ui.contact.eyebrow}
        </div>
        <h2 className="mb-11 max-w-[720px] font-serif text-[clamp(46px,7vw,84px)] font-medium leading-[1.05] tracking-[-0.01em] text-heroInk">
          {t.ui.contact.heading}{" "}
          <em className="italic">{t.ui.contact.headingItalic}</em>
        </h2>
        <div className="flex max-w-[820px] flex-wrap justify-center gap-3">
          {t.contacts.map((c) => {
            const icon = ICONS[c.id];
            const Icon = icon?.Icon;
            const pillClass =
              "inline-flex items-center gap-[9px] rounded-full border border-heroBorder bg-heroPanel px-[18px] py-2.5 text-[13.5px] text-heroInk transition-colors duration-150 hover:border-heroAccent hover:bg-heroHover";
            const content = (
              <>
                {Icon && <Icon className={`${icon.size} text-heroAccent`} />}
                {c.value}
              </>
            );
            return c.href ? (
              <a
                key={c.id}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={c.label}
                className={pillClass}
              >
                {content}
              </a>
            ) : (
              <span key={c.id} aria-label={c.label} className={pillClass}>
                {content}
              </span>
            );
          })}
        </div>
      </div>
      <div className="border-t border-heroBorder px-10 py-5 text-center text-[11px] tracking-[0.06em] text-[#8A7F6E]">
        © {new Date().getFullYear()} {t.profile.name}
      </div>
    </section>
  );
}
