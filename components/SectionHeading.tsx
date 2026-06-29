export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-16 text-center">
      <div className="mb-3.5 text-xs uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </div>
      <h2 className="font-serif text-[clamp(38px,5vw,58px)] font-medium leading-tight tracking-tight">
        {title}
      </h2>
    </div>
  );
}
