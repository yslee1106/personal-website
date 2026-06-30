// Single source of truth for all site content.
// Edit values here to update the website — no component changes needed.

export const profile = {
  name: "Lee Ying Sheng",
  firstName: "Lee Ying",
  lastName: "Sheng",
  eyebrow: "ECE · Shanghai Jiao Tong University",
  bio: "Building across platforms, hardware, and AI — leading cross-functional teams from research to shipped product, and finding real user needs before writing a line of code.",
};

export type Resume = { label: string; href: string };

export const resumes: Resume[] = [
  { label: "Tech Resume", href: "/personal-website/lee-ying-sheng-tech-resume.pdf" },
  { label: "Non-technical Resume", href: "/personal-website/lee-ying-sheng-resume.pdf" },
];

export type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  href?: string;
  hrefLabel?: string;
  image?: string;
  imageAlt?: string;
  placeholder?: string;
};

export const projects: Project[] = [
  {
    title: "LaowaiCentral — SJTU International Events Platform",
    role: "Co-founder",
    period: "04/26 – Present",
    description:
      "LaowaiCentral is an events platform built for international students at SJTU — aggregating listings from 50+ WeChat Official Accounts and surfacing them with LLM-powered spam filtering, smart categorization, and multilingual summaries. The platform is live at laowaicentral.com, delivering a weekly newsletter to subscribers and tracking engagement through built-in retention, CTR, and conversion analytics.",
    href: "https://laowaicentral.com",
    hrefLabel: "laowaicentral.com",
    image: "/laowaicentral.png",
    imageAlt: "LaowaiCentral events platform screenshot",
  },
  {
    title: "Research on the Disposal of Electronic Cigarettes",
    role: "Team Leader",
    period: "05/26 – Present",
    description:
      "A commissioned research initiative with Zhejiang Huayou Cobalt to design a safer, more efficient system for detecting and dismantling end-of-life e-cigarettes. A 5-person team is currently completing a feasibility report and validating the detection and dismantling pipeline through experimental prototyping.",
    image: "/ecig-diagram.jpg",
    imageAlt: "E-cigarette disposal concept diagram",
  },
  {
    title: "Quantization-Aware Compression of Vision-Language Models",
    role: "Researcher · Computer Vision Final Project",
    period: "",
    description:
      "An exploration of how far CLIP — a 150M-parameter vision-language model — can be compressed for edge deployment without meaningful accuracy loss. Using 8-bit and 4-bit post-training quantization with per-layer sensitivity analysis, a mixed-precision strategy was developed that recovers most of the model's accuracy at 4–8× smaller size, benchmarked on CIFAR-100 and Flickr30k.",
    image: "/clip-compression.jpg",
    imageAlt: "CLIP quantization pipeline",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  affiliation: string;
  pending?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "A placeholder quote highlighting Ying Sheng's rigor, initiative, and the way he raises the standard of everyone around him.",
    name: "Prof. Milias",
    affiliation: "Shanghai Jiao Tong University",
    pending: true,
  },
  {
    quote:
      "A placeholder quote on his teaching contribution and leadership across courses and student competitions.",
    name: "Prof. He Yulian (何玉莲)",
    affiliation: "Shanghai Jiao Tong University",
    pending: true,
  },
];

export const award = {
  title: "1st Prize — China's 13th National Marine Vehicle Design Competition",
  description:
    "Led the design of an amphibious tracked vehicle for cave exploration and flood rescue, ranking top among 230 regional champions and delivering 3 working prototypes.",
  period: "09/23 – 08/24",
  images: ["/award-1.jpg", "/award-2.jpg"],
};

export type Education = {
  school: string;
  detail: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "Shanghai Jiao Tong University",
    detail:
      "B.S. Electrical & Computer Engineering · Minor in Data Science · Shanghai, China",
    period: "09/22 – Present",
  },
  {
    school: "Nanyang Technological University",
    detail:
      "Electrical & Computer Engineering · Student Exchange Program · Singapore",
    period: "08/22 – 12/22",
  },
];

export type Contact = {
  label: string;
  value: string;
  href?: string;
};

export const contacts: Contact[] = [
  { label: "GitHub", value: "/yslee1106", href: "https://github.com/yslee1106" },
  {
    label: "LinkedIn",
    value: "/leeyingsheng",
    href: "https://linkedin.com/in/leeyingsheng",
  },
  {
    label: "Email",
    value: "yslee040611@gmail.com",
    href: "mailto:yslee040611@gmail.com",
  },
  { label: "Phone", value: "(+86) 15000967750", href: "tel:+8615000967750" },
  { label: "WeChat", value: "yslee040611" },
];

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const ui = {
  hero: { viewWorks: "View Works" },
  projects: { eyebrow: "Selected Work", title: "Featured Projects" },
  awards: { eyebrow: "Recognition", title: "Awards" },
  education: { eyebrow: "Academic Path", title: "Education" },
  contact: {
    heading: "Let's get",
    headingItalic: "in touch.",
    subheading: "Open to product, engineering, and research conversations.",
  },
};
