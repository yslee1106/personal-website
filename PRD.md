# Personal Website — Product Requirements Document

**Owner:** Lee Ying Sheng
**Last updated:** 2026-06-29
**Status:** Draft v1

---

## 1. Overview
A single-page (scroll-based), clean and minimal personal website that serves as the
canonical professional landing page for Lee Ying Sheng. It links from his resumes and
LinkedIn, lets visitors download his resumes, browse featured projects, read testimonials,
and reach him through multiple channels.

## 2. Goals & Success Metrics
- **Goal 1:** Give recruiters/partners a single link summarizing who he is in < 30s.
- **Goal 2:** Enable resume download (Tech + PM versions) in one click.
- **Goal 3:** Showcase 3 featured projects with visuals.
- **Goal 4:** Provide frictionless contact across GitHub, WeChat, LinkedIn, phone, email.

## 3. Non-Goals (v1)
- No CMS/blog, no auth, no backend database.
- No multilingual toggle (English only for v1; content already English).
- No dark-mode requirement (nice-to-have stretch).

## 4. Audience
Recruiters, potential co-founders/collaborators, professors, and competition/industry
contacts. Mixed technical and non-technical readers → clean & minimal, jargon-light.

## 5. Tech Stack
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Deploy:** Vercel
- **Analytics:** Vercel Analytics (or Plausible)
- **Content:** static, sourced from the two resume PDFs
- **Responsive:** mobile-first, works on phone/tablet/desktop

## 6. Information Architecture (single page, anchored nav)
Sticky top nav with anchor links: **About · Projects · Testimonials · Awards · Education · Contact**

## 7. Sections & Requirements

### 7.1 Hero / About
- Name: **Lee Ying Sheng**, short tagline (e.g. "ECE @ SJTU · Builder of platforms,
  hardware, and AI tools").
- 2–3 sentence bio drawn from PM resume profile (cross-functional, user-focused, builder).
- **Resume downloads:** two buttons — "Tech Resume" and "Non-technical Resume"
  (serve the two existing PDFs from `/public`).
- Primary CTAs: "View Projects" and "Get in touch".

### 7.2 Featured Projects (3 cards)
Each card: image, title, role, timeframe, short description, optional external link.

**1. LaowaiCentral — SJTU International Events Platform**
- Link → https://laowaicentral.com
- Images: `laowaicentral.png` and `laowaicentral_landing.png` (both on disk; use one as
  the card hero and optionally the second in a hover/lightbox state or detail view).
- Description: Aggregation engine pulling event data from 50+ WeChat Official Accounts;
  LLM-powered spam filtering, categorization, and multilingual summaries; newsletter
  via Aliyun Direct Mail; built-in analytics (retention, CTR, conversions).
- Role: Co-founder. 04/26 – Present.

**2. Disposal of Electronic Cigarettes — Zhejiang Huayou Cobalt**
- Image: concept diagram *(asset needed)*
- Description: Leading a 5-person research team building a safer, more efficient
  e-cigarette disposal system; aligned requirements with Huayou stakeholders,
  prioritized a feasibility report + implementation plan; validating detection and
  dismantling systems via experimental prototyping.
- Role: Team Leader. 05/26 – Present.

**3. Quantization-Aware Compression of Vision-Language Models — Computer Vision Final Project**
- Image: *(asset still needed — e.g. a diagram of the CLIP architecture or a compression
  pipeline figure)*
- Description: Investigated how aggressively CLIP (150M-parameter vision-language model)
  can be compressed for deployment on mobile/edge hardware without losing accuracy.
  Applied post-training quantization at 8-bit and 4-bit precision, performed per-layer
  sensitivity analysis to map which model components are robust vs. fragile, and designed
  a mixed-precision strategy that recovers most accuracy while retaining the size
  reduction (~4–8x). Benchmarked on CIFAR-100 zero-shot classification and Flickr30k
  image-text retrieval.
- Role: Researcher (Computer Vision Final Project, SJTU).

### 7.3 Testimonials
Quote cards with name, title/affiliation, and quote.
- **Prof. Milias** — quote *(text needed)*
- **Prof. He Yulian (何玉莲)** — quote *(text needed)*
- If quotes are not yet collected, render the section scaffold with placeholder text and a
  note; do not block launch on quote collection.

### 7.4 Awards
- **1st Prize — China's 13th National Marine Vehicle Design Competition** (09/23 – 08/24).
  Amphibious tracked vehicle for cave exploration / flood rescue; ranked top among 230
  regional champions; delivered 3 working prototypes. Optional image of the vehicle.

### 7.5 Education
Timeline / two entries:
- **Shanghai Jiao Tong University** — B.S Electrical & Computer Engineering, Minor in Data
  Science. 09/22 – Present. Shanghai, China. (CGPA 3.26 — optional to display.)
- **Nanyang Technological University (Singapore)** — Electrical & Computer Engineering,
  Student Exchange Program. 08/22 – 12/22. Singapore.

### 7.6 Contact
Icon links / cards for each channel:
- **GitHub:** github.com/yslee1106
- **WeChat:** ID or QR code *(asset/ID needed)*
- **LinkedIn:** linkedin.com/in/leeyingsheng
- **Phone:** (+86) 15000967750
- **Email:** yslee040611@gmail.com

## 8. Design Direction
- Clean & minimal: generous whitespace, restrained palette (1 accent color), strong
  typographic hierarchy, simple system/sans font.
- Subtle motion only (fade/slide on scroll); accessibility-conscious (contrast, alt text,
  keyboard nav).

## 9. Open Items / Assets Needed
- [x] LaowaiCentral website screenshots (`laowaicentral.png`, `laowaicentral_landing.png`)
- [x] CV Project defined (Quantization-Aware Compression of VLMs)
- [ ] CV Project card image (CLIP architecture diagram or pipeline figure)
- [ ] E-cigarette disposal concept diagram
- [ ] Testimonial quotes from Prof. Milias and Prof. He Yulian
- [ ] WeChat ID or QR code
- [ ] Confirm whether to display CGPA (3.26)
- [ ] Resume PDFs to place in `/public` (already on disk)

## 10. Future / Stretch (v2)
Dark mode, blog/writing section, multilingual (中文) toggle, project detail pages.
