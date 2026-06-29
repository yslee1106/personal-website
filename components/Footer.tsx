import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-14 text-center text-xs tracking-[0.06em] text-muted">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
