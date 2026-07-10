// Single source of truth for all site content.
// Edit values here to update the website — no component changes needed.

export const profile = {
  name: "Lee Ying Sheng",
  firstName: "Lee Ying",
  lastName: "Sheng",
  eyebrow: "ECE · Shanghai Jiao Tong University",
  bio: "I build AI products across software and hardware, leading cross-functional teams from research to shipped product",
};

export type Resume = { label: string; href: string };

export const resumes: Resume[] = [
  { label: "Tech Resume", href: "/lee-ying-sheng-ai-resume-en.pdf" },
  { label: "Non-technical Resume", href: "/lee-ying-sheng-pm-resume-en.pdf" },
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
    title: "LaowaiCentral — AI-Driven Events Platform",
    role: "Co-founder",
    period: "04/26 – Present",
    description:
      "Co-founded and led engineering for an AI-powered events platform for international students at SJTU, growing it to 100+ users with 30% retention by automating content curation with 95% accuracy.",
    href: "https://laowaicentral.com",
    hrefLabel: "laowaicentral.com",
    image: "/laowaicentral-landing.png",
    imageAlt: "LaowaiCentral events platform screenshot",
  },
  {
    title: "Research on the Disposal of Electronic Cigarettes",
    role: "Technical Lead",
    period: "05/26 – Present",
    description:
      "Leading a 5-person research team alongside engineers at Zhejiang Huayou Cobalt to design a safer way to detect and dismantle used e-cigarette batteries, delivering a feasibility report from scratch.",
    image: "/ecig-diagram.jpg",
    imageAlt: "E-cigarette disposal concept diagram",
  },
  {
    title: "Compression of Vision-Language Models",
    role: "Deep Learning Researcher",
    period: "",
    description:
      "Compressed CLIP, a 150M-parameter vision-language model, using mixed-precision quantization and retraining, shrinking it 46% while boosting accuracy from 21.8% to 74.8% on CIFAR-100 and Flickr30k benchmarks.",
    image: "/clip-compression.jpg",
    imageAlt: "CLIP quantization pipeline",
  },
];

export type Testimonial = {
  quote: string;
  quoteCn?: string;
  name: string;
  affiliation: string;
  relationship: string;
  pending?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I was deeply impressed by his insight into engineering problems and his ability to solve them. In the \"Submersible Amphibious Tracked Vehicle\" project, he was fully responsible for the overall technical planning. He overcame key technical challenges in the controllable telescopic track mechanism by employing 3D visualization modeling and established a wireless communication system architecture capable of stable operation across different mediums (air and water). When facing technical bottlenecks, he demonstrated strong research spirit and self-drive. He has the ability to examine engineering problems from a holistic perspective and propose reasonable, feasible solutions, making him a rare and valuable composite engineering talent.",
    quoteCn:
      "Ying Sheng 的问题解决能力令我印象最为深刻。面对技术瓶颈，他从不急于寻找捷径，而是习惯先退一步，彻底厘清问题的根源，随后再带着更完善的方案回归。在项目中，他全面负责了 SolidWorks 建模、3D 打印以及可伸缩履带机构的开发，并亲手设计了一套能在水下稳定运行的无线通信系统。",
    name: "Professor 陈炉云",
    affiliation: "Shanghai Jiao Tong University",
    relationship: "Faculty Member, Department of Naval Architecture and Ocean Engineering",
  },
  {
    quote:
      "Ying Sheng has been my TA for several courses, spanning a wide range from Engineering to Business. He never failed to amaze me with his dedication, initiative, and creativity. Always giving 100% in his work, Ying Sheng sets a great example for everyone around him.",
    name: "Dr. Milias Liu",
    affiliation: "Shanghai Jiao Tong University",
    relationship: "Assistant Teaching Professor, SJTU Global College",
  },
];

export const award = {
  badge: "1st Prize",
  competition: "China's 13th National Marine Vehicle Design Competition",
  description:
    "Led the design of an amphibious tracked vehicle for cave exploration and flood rescue, ranking top among 230 regional champions and delivering 3 working prototypes.",
  period: "09/23 – 08/24",
  images: ["/award-1.jpg", "/award-2.jpg"],
};

export type Education = {
  school: string;
  detail: string;
  period: string;
  logo: string;
  logoScale?: 82;
};

export const education: Education[] = [
  {
    school: "Shanghai Jiao Tong University",
    detail:
      "B.S. Electrical & Computer Engineering · Minor in Data Science · Shanghai, China",
    period: "09/22 – 08/26",
    logo: "/sjtu-logo.png",
  },
  {
    school: "Nanyang Technological University",
    detail:
      "Electrical & Computer Engineering · Student Exchange Program · Singapore",
    period: "08/22 – 12/22",
    logo: "/ntu-logo.png",
    logoScale: 82,
  },
];

export type Contact = {
  id: string;
  label: string;
  value: string;
  href?: string;
};

export const contacts: Contact[] = [
  {
    id: "email",
    label: "Email",
    value: "yslee040611@gmail.com",
    href: "mailto:yslee040611@gmail.com",
  },
  { id: "phone", label: "Phone", value: "(+86) 15000967750", href: "tel:+8615000967750" },
  { id: "github", label: "GitHub", value: "/yslee1106", href: "https://github.com/yslee1106" },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "/leeyingsheng",
    href: "https://linkedin.com/in/leeyingsheng",
  },
  { id: "wechat", label: "WeChat", value: "yslee040611" },
];

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Education", href: "#education" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const ui = {
  hero: { viewWorks: "View Works", resume: "Resume" },
  projects: { eyebrow: "Selected Work", title: "Featured Projects" },
  awards: { eyebrow: "Recognition", title: "Awards" },
  education: { eyebrow: "Academic Path", title: "Education" },
  testimonials: { eyebrow: "In Their Words", title: "Testimonials", pending: "Quote pending" },
  contact: {
    eyebrow: "In Touch",
    heading: "Let's get",
    headingItalic: "in touch.",
    subheading: "Open to product, engineering, and research conversations.",
  },
};
