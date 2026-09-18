export type Project = {
  slug: string;
  title: string;
  summary: string;
  outcome: string;
  role: string;
  years: string;
  tools: string[];
  process: string[];
  focus: string[];
  body: string[];
  externalUrl?: string;
  externalLabel?: string;
  links?: { url: string; label: string; variant?: "solid" | "ghost" }[];
  images?: { src: string; href?: string }[];
  trailingMedia?: { src: string; href?: string; caption?: string }[];
  cover?: string;
};

export const site = {
  name: "Daria Soldatova",
  firstName: "Daria",
  role: "Mid-level UI/UX designer & researcher",
  focusLine: "Safe, sane, consensual — designed",
  tagline:
    "Mid-level UI/UX designer & researcher with 4+ years in SexTech/SexEd, working both with and without AI tools.",
  email: "daria.soldatova.v@gmail.com",
  location: "Based in Germany",
  languages: "ENG & RU",
  photo: "/daria-final.png",
  about: [
    "I’m a UI/UX designer and researcher with 4+ years of experience in SexTech and SexEd and more than 5 years in UI/UX design. I’m a multidisciplinary specialist with an open mind. My background ranges from physics and cybersecurity to academic art and linguistics, and most of all I enjoy learning new things and skills. I also love helping people, always being supportive and respectful.",
    "I’m based in Germany. My practice mixes qualitative and quantitative research with hands-on product design. I’m currently completing an MSc in Human-Computer Interaction at Bauhaus University Weimar, after a BA in UI/UX design at ITMO. My recent HCI research projects include BODYUX, a diary study on embodiment while using everyday technology, and “You can’t just spank someone through the phone”, a qualitative interview study of long-distance online Dom/sub relationships.",
  ],
  approach: [
    "I approach SexTech and SexEd through research, education, and safety, so people can explore without guilt or shame.",
    "I am also a kinky asexual and neurodivergent person with OCD, so I bring a really unique perspective to SexTech/SexEd, focused on safety and inclusivity.",
    "My background, skills, experience, and community involvement make me a professional in the sphere, as I have tried many sex industry roles, from toy tester to party organizer.",
    "I’m always open to new experiences and skills, and I like growing into different roles as a professional when the work is meaningful.",
  ],
  principles: [
    {
      title: "Human-centered design",
      text: "Based on research, evaluation, and iteration, human-centered design makes users and stakeholders the focus, involving them in the process.",
    },
    {
      title: "Safety and accessibility",
      text: "I prioritize consent and safety above all, and care for an inclusive and accessible environment for everyone.",
    },
    {
      title: "Sex-positivity",
      text: "Sex and kink are stigmatized. By talking about it, educating, and prioritizing consent and safety, we can build a better world for everyone.",
    },
  ],
  education: [
    {
      school: "Bauhaus University, Weimar",
      detail: "MSc in Human-Computer Interaction",
      years: "2025–2027 (current)",
    },
    {
      school: "ITMO University, Saint Petersburg",
      detail: "BA in UI/UX design",
      years: "2020–2025",
    },
    {
      school: "ITMO University, Saint Petersburg",
      detail: "Postgraduate diploma in Data Analysis",
      years: "2023–2024",
    },
    {
      school: "Gubernatorial Physics and Maths Lyceum 30",
      detail: "Graduated with honors",
      years: "2018–2020",
    },
  ],
  socials: [
    { label: "Behance", href: "https://www.behance.net/plashik" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/plashik/" },
    { label: "Email", href: "mailto:daria.soldatova.v@gmail.com" },
  ],
  skills: [
    "UI/UX design",
    "UX research (qual. & quant.)",
    "Prototyping",
    "Information architecture",
    "Onboarding & activation",
    "Data analysis",
    "Design systems",
    "Figma",
    "Adobe Suite",
    "AI-assisted workflows",
  ],
  projects: [
    {
      slug: "spankpls-lead-product-design",
      cover: "/projects/bdsm-test-preview-v3.png",
      title: "SpankPls — BDSM Test and Guide",
      summary:
        "Projects I launched on my own that became the most successful in the SpankPls ecosystem, reaching more than 100k users.",
      outcome:
        "Led and shipped products that became top performers — including guided learning and assessment experiences reaching 100,000+ users.",
      role: "Lead UI/UX Designer",
      years: "2024–current",
      tools: ["Figma", "Research synthesis", "Product design", "AI tools"],
      process: ["Research", "Structure", "Prototype", "Validate"],
      focus: ["Education", "Clarity", "Scale"],
      body: [
        "As lead UI/UX designer at SpankPls, I shaped educational products from the first research questions through launch: content structure, flows, and interfaces people could actually follow without getting lost.",
        "A big part of the craft was keeping the language clear and not explicitly sexual, so the guides felt welcoming to a broad kink community without relying on shock or stereotype. Calm hierarchy and plain wording helped people learn and explore at their own pace. Several of those launches became the platform’s strongest products, including experiences that reached more than 100,000 users.",
        "That mix of education, inclusivity, and measurable engagement is still how I like to work in SexTech.",
      ],
      externalUrl: "https://spankpls.com/bdsm-test",
      externalLabel: "Try the BDSM test",
      images: [
        { src: "/projects/bdsm-test-1.png" },
        { src: "/projects/bdsm-test-gallery-3.png" },
        { src: "/projects/bdsm-test-gallery-2.png" },
        { src: "/projects/bdsm-test-gallery-1.png" },
        { src: "/projects/bdsm-test-gallery-4.png" },
      ],
    },
    {
      slug: "spankpls-onboarding-redesign",
      cover: "/projects/onboarding-preview.png",
      title: "SpankPls — app design",
      summary:
        "Rebuilt onboarding to raise completion while making expectations and next steps easier to understand.",
      outcome:
        "Redesigned onboarding and core screens, resulting in 65% higher onboarding completion.",
      role: "UI/UX Designer",
      years: "2022–2024",
      tools: ["Figma", "UX flows", "Prototyping", "Funnel analysis"],
      process: ["Research", "Structure", "Prototype", "Validate"],
      focus: ["Safety", "Trust", "Onboarding"],
      body: [
        "In SexTech, the first minutes teach users whether the product is trustworthy. I redesigned SpankPls onboarding to reduce drop-off while making expectations, boundaries, and next steps explicit.",
        "The flow had to stay long enough to support users' play boundaries, with enough detail that people knew what they were agreeing to. At the same time, every extra screen added filling time, so the hard part was balancing thorough consent education against how long people would actually stick with it.",
        "Alongside most of the app’s screens, the new first-run experience lifted onboarding completion by 65%. That felt like a clear signal that calmer structure and clearer communication help people stay.",
        "I still treat activation as a safety and clarity problem, not only a conversion metric.",
      ],
      images: [
        { src: "/projects/onboarding-gallery.png" },
      ],
      links: [
        { url: "https://spankpls.com/", label: "Try it out" },
        {
          url: "https://www.behance.net/gallery/180222651/SpankPls-2023",
          label: "Behance",
          variant: "ghost",
        },
      ],
    },
    {
      slug: "freelance-websites-graphic-design",
      cover: "/projects/freelance-gallery-1.png",
      title: "Freelance — web & visual systems",
      summary:
        "Client websites and graphic systems with the same clarity-first craft.",
      outcome:
        "Delivered 5+ website and graphic design projects end to end.",
      role: "UI/UX & Graphic Designer",
      years: "2021–current",
      tools: ["Figma", "Canva", "Adobe Suite"],
      process: ["Research", "Structure", "Prototype", "Validate"],
      focus: ["Systems", "Graphics", "Craft"],
      body: [
        "Alongside product work, I design websites and visual systems for clients — with attention to hierarchy, readability, and a coherent voice across pages and assets.",
        "Each engagement is scoped end to end: goals, structure, UI, and polished delivery. I’m happy to expand this section with more projects :)",
      ],
      images: [
        { src: "/projects/freelance-gallery-1.png", href: "https://www.behance.net/gallery/228350591/Massage-school-website-%28thesis%29-2025" },
        { src: "/projects/freelance-gallery-2.jpg", href: "https://www.behance.net/gallery/228353083/A-little-man-TMA-Michael-%28Distortion%29-word-art-2024" },
        { src: "/projects/freelance-gallery-3.png", href: "https://www.behance.net/gallery/228351723/Christmas-ornament-museum-2024" },
        { src: "/projects/freelance-gallery-4.jpg", href: "https://www.behance.net/gallery/228355089/Beauty-Coworking-2024" },
        { src: "/projects/freelance-gallery-5.png", href: "https://www.behance.net/gallery/180219941/Restaurant-aggregator-%28contest-2022%29" },
        { src: "/projects/freelance-gallery-6.png", href: "https://www.behance.net/gallery/180218731/Study-project-2022-%28customizable-earpods-website%29" },
        { src: "/projects/freelance-gallery-7.png", href: "https://www.behance.net/gallery/180220579/ConvenientPlanner-2017" },
      ],
      trailingMedia: [
        {
          src: "/projects/freelance-sextpanther-xbiz.png",
          caption: "Bonus: graphic design for SextPanther for XBIZ Amsterdam 2026",
        },
      ],
      externalUrl: "https://www.behance.net/plashik",
      externalLabel: "explore my behance",
    },
  ] satisfies Project[],
  experience: [
    {
      place: "SpankPls",
      role: "Lead UI/UX Designer",
      years: "2024–current",
    },
    {
      place: "SpankPls",
      role: "UI/UX Designer",
      years: "2022–2024",
    },
    {
      place: "VK",
      role: "iOS Developer Intern",
      years: "2021",
    },
    {
      place: "JetBrains",
      role: "Android Developer Intern",
      years: "2019",
    },
  ],
} as const;

export function getProject(slug: string): Project | undefined {
  return site.projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return site.projects.map((project) => project.slug);
}
