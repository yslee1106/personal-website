// Chinese content — same exported shape as content.ts

export const profile = {
  name: "Lee Ying Sheng",
  firstName: "Lee Ying",
  lastName: "Sheng",
  eyebrow: "电子与计算机工程 · 上海交通大学",
  bio: "在软硬件与人工智能的交叉地带探索与创造，擅长带领跨职能团队将研究推向实际落地，始终坚持在动手开发之前先弄清楚用户的真实需求。",
};

export type Resume = { label: string; href: string };

export const resumes: Resume[] = [
  { label: "技术简历", href: "/lee-ying-sheng-tech-resume.pdf" },
  { label: "非技术简历", href: "/lee-ying-sheng-resume.pdf" },
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
    title: "LaowaiCentral — 上交大国际活动资讯平台",
    role: "联合创始人",
    period: "2026年4月 – 至今",
    description:
      "LaowaiCentral 是面向上交大国际学生的一站式活动资讯平台，汇聚超过 50 个微信公众号的内容，借助大模型完成垃圾内容过滤、智能分类与多语言摘要，统一推送给用户。平台目前已正式上线，通过阿里云 Direct Mail 定期向订阅用户推送活动周刊，并配有留存率、点击率与转化率等关键数据的内置分析功能。",
    href: "https://laowaicentral.com",
    hrefLabel: "laowaicentral.com",
    image: "/laowaicentral.png",
    imageAlt: "LaowaiCentral 活动平台截图",
  },
  {
    title: "废旧电子烟处置研究",
    role: "团队负责人",
    period: "2026年5月 – 至今",
    description:
      "由浙江华友钴业委托的产学研课题，目标是开发一套更安全、更高效的废旧电子烟检测与拆解方案。团队五人，目前正推进可行性研究报告的撰写，并通过实验原型对检测与拆解流程进行实测验证。",
    image: "/ecig-diagram.jpg",
    imageAlt: "电子烟处置概念图",
  },
  {
    title: "面向端侧部署的视觉语言模型量化压缩研究",
    role: "研究员 · 计算机视觉课程项目",
    period: "",
    description:
      "研究在不显著损失精度的前提下，CLIP（1.5 亿参数的视觉语言模型）可被压缩至何种程度，以满足端侧推理需求。结合逐层灵敏度分析与 8 比特、4 比特训练后量化，提出混合精度压缩策略，在 CIFAR-100 与 Flickr30k 基准测试中实现 4–8 倍的模型体积压缩，同时保留绝大部分精度。",
    image: "/clip-compression.jpg",
    imageAlt: "CLIP 量化压缩流程图",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  affiliation: string;
  pending?: boolean;
};

export const testimonials: Testimonial[] = [];

export const award = {
  title: "一等奖 — 第十三届全国海洋航行器设计与制作大赛",
  description:
    "主持设计了一款兼顾洞穴探测与洪涝救援的两栖履带车，从全国 230 支区域冠军队伍中脱颖而出，最终完成 3 台可运行原型的交付。",
  period: "2023年9月 – 2024年8月",
  images: ["/award-1.jpg", "/award-2.jpg"],
};

export type Education = {
  school: string;
  detail: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "上海交通大学",
    detail: "电子与计算机工程学士 · 数据科学辅修 · 上海",
    period: "2022年9月 – 至今",
  },
  {
    school: "南洋理工大学",
    detail: "电子与计算机工程 · 交换生 · 新加坡",
    period: "2022年8月 – 2022年12月",
  },
];

export type Contact = {
  label: string;
  value: string;
  href?: string;
};

export const contacts: Contact[] = [
  { label: "GitHub", value: "/yslee1106", href: "https://github.com/yslee1106" },
  { label: "领英", value: "/leeyingsheng", href: "https://linkedin.com/in/leeyingsheng" },
  { label: "邮箱", value: "yslee040611@gmail.com", href: "mailto:yslee040611@gmail.com" },
  { label: "电话", value: "(+86) 15000967750", href: "tel:+8615000967750" },
  { label: "微信", value: "yslee040611" },
];

export const navLinks = [
  { label: "项目", href: "#projects" },
  { label: "奖项", href: "#awards" },
  { label: "教育", href: "#education" },
  { label: "联系", href: "#contact" },
];

export const ui = {
  hero: { viewWorks: "查看作品" },
  projects: { eyebrow: "精选作品", title: "精选项目" },
  awards: { eyebrow: "所获奖项", title: "奖项" },
  education: { eyebrow: "学习经历", title: "教育背景" },
  contact: {
    heading: "欢迎随时",
    headingItalic: "与我联系。",
    subheading: "无论是产品、工程还是研究，都欢迎随时交流。",
  },
};
