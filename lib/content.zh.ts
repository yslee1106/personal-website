// Chinese content — same exported shape as content.ts

export const profile = {
  name: "Lee Ying Sheng",
  firstName: "Lee Ying",
  lastName: "Sheng",
  eyebrow: "电子与计算机工程 · 上海交通大学",
  bio: "我打造跨越软硬件的人工智能产品，带领跨职能团队将研究成果转化为落地产品。",
};

export type Resume = { label: string; href: string };

export const resumes: Resume[] = [
  { label: "技术简历", href: "/lee-ying-sheng-ai-resume-zh.pdf" },
  { label: "非技术简历", href: "/lee-ying-sheng-pm-resume-zh.pdf" },
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
    title: "LaowaiCentral — AI 驱动的活动资讯平台",
    role: "联合创始人",
    period: "2026年4月 – 至今",
    description:
      "联合创立该平台并主导技术研发，面向上交大国际学生打造 AI 驱动的活动资讯平台，通过以 95% 准确率实现内容筛选自动化，将用户规模增长至 100+ 人，留存率达到 30%。",
    href: "https://laowaicentral.com",
    hrefLabel: "laowaicentral.com",
    image: "/laowaicentral-landing.png",
    imageAlt: "LaowaiCentral 活动平台截图",
  },
  {
    title: "废旧电子烟处置研究",
    role: "技术负责人",
    period: "2026年5月 – 至今",
    description:
      "与浙江华友钴业的工程师合作，带领一支 5 人研究团队设计更安全的废旧电子烟电池检测与拆解方案，从零到一完成可行性研究报告。",
    image: "/ecig-diagram.jpg",
    imageAlt: "电子烟处置概念图",
  },
  {
    title: "面向端侧部署的视觉语言模型量化压缩研究",
    role: "深度学习研究员",
    period: "",
    description:
      "使用混合精度量化与再训练技术压缩 CLIP（一个 1.5 亿参数的视觉语言模型），将模型体积缩小 46%，同时在 CIFAR-100 与 Flickr30k 基准测试中将准确率从 21.8% 提升至 74.8%。",
    image: "/clip-compression.jpg",
    imageAlt: "CLIP 量化压缩流程图",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  affiliation: string;
  relationship: string;
  pending?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "他对工程问题的洞察与解决能力令我印象深刻。在「可潜两栖履带艇」项目中，他全面负责总体技术规划，运用三维可视化建模方法，攻克了可控伸缩履带机构的关键技术难题，并搭建了一套能够在跨介质条件下稳定运行的无线通信系统架构。面对技术瓶颈，他展现出极强的钻研精神与自驱力，能够从总体层面审视工程问题，并提出合理可行的解决方案，是一位不可多得的复合型工程人才。",
    name: "Professor 陈炉云",
    affiliation: "上海交通大学",
    relationship: "船舶与海洋工程系教师",
  },
  {
    quote:
      "颖晟曾担任我多门课程的助教，所涉领域从工科横跨至商科。他的敬业精神、主动性与创造力始终令我叹服，从未让我失望。他在工作中永远全力以赴，是身边所有人学习的榜样。",
    name: "Professor Milias Liu",
    affiliation: "上海交通大学",
    relationship: "助理教学教授，上海交通大学浦江国际学院",
  },
];

export const award = {
  badge: "一等奖",
  competition: "第十三届全国海洋航行器设计与制作大赛",
  description:
    "主持设计了一款兼顾洞穴探测与洪涝救援的两栖履带车，从全国 230 支区域冠军队伍中脱颖而出，最终完成 3 台可运行原型的交付。",
  period: "2023年9月 – 2024年8月",
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
    school: "上海交通大学",
    detail: "电子与计算机工程学士 · 数据科学辅修 · 上海",
    period: "2022年9月 – 2026年8月",
    logo: "/sjtu-logo.png",
  },
  {
    school: "南洋理工大学",
    detail: "电子与计算机工程 · 交换生 · 新加坡",
    period: "2022年8月 – 2022年12月",
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
  { id: "email", label: "邮箱", value: "yslee040611@gmail.com", href: "mailto:yslee040611@gmail.com" },
  { id: "phone", label: "电话", value: "(+86) 15000967750", href: "tel:+8615000967750" },
  { id: "github", label: "GitHub", value: "/yslee1106", href: "https://github.com/yslee1106" },
  { id: "linkedin", label: "领英", value: "/leeyingsheng", href: "https://linkedin.com/in/leeyingsheng" },
  { id: "wechat", label: "微信", value: "yslee040611" },
];

export const navLinks = [
  { label: "项目", href: "#projects" },
  { label: "奖项", href: "#awards" },
  { label: "教育", href: "#education" },
  { label: "推荐", href: "#testimonials" },
  { label: "联系", href: "#contact" },
];

export const ui = {
  hero: { viewWorks: "查看作品", resume: "简历" },
  projects: { eyebrow: "精选作品", title: "精选项目" },
  awards: { eyebrow: "所获奖项", title: "奖项" },
  education: { eyebrow: "学习经历", title: "教育背景" },
  testimonials: { eyebrow: "他们的评价", title: "推荐语", pending: "引言待确认" },
  contact: {
    eyebrow: "保持联系",
    heading: "欢迎随时",
    headingItalic: "与我联系。",
    subheading: "无论是产品、工程还是研究，都欢迎随时交流。",
  },
};
