export const site = {
  name: "Shreyas Melligeri",
  fullName: "Shreyas V Melligeri",
  role: "Analytics · Cloud · Applied AI",
  location: "Bengaluru, India",
  email: "shreyasmelligeri25@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreyas-melligeri",
  github: "https://github.com/shreyas-2217",
  resume: "/Shreyas_V_Melligeri_Resume.pdf",
  availability: "Open to analyst, cloud & AI roles",
  intro:
    "BCA student at CHRIST, Bengaluru. I build analytics tools and AI-assisted products — then explain what they actually mean.",
  currently:
    "Most recently shipped KhataBot, a Telegram bookkeeping bot for small shops that reads sales, expenses, and udhaar in English, Hindi, and Kannada. Now going deeper into applied AI and serverless.",
  lastUpdated: "November 2026",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: "spendlytics",
    number: "01",
    title: "Spendlytics",
    subtitle: "UPI statement analyser",
    discipline: "Analytics + AI",
    year: "2026",
    accent: "mint",
    size: "featured",
    summary:
      "A spending dashboard that turns bank statements into useful categories, recurring subscriptions, unusual-month alerts, and plain-English answers.",
    highlights: [
      "16-category hybrid rules + LLM categorisation",
      "55 automated tests",
      "Live on Streamlit Community Cloud",
    ],
    stack: ["Python", "pandas", "DuckDB", "Gemini API", "Streamlit"],
    links: [
      {
        label: "Live app",
        href: "https://spendlytics-bawx8pcdp8v8jonxbztjfu.streamlit.app/",
        type: "live",
      },
      {
        label: "Code",
        href: "https://github.com/shreyas-2217/spendlytics",
        type: "code",
      },
    ],
  },
  {
    id: "khatabot",
    number: "02",
    title: "KhataBot",
    subtitle: "Telegram ledger bot for small shops",
    discipline: "Applied AI · Serverless",
    year: "2026",
    accent: "amber",
    size: "featured",
    summary:
      "A Telegram bot that turns a shopkeeper's everyday message into a clean ledger entry. It reads sales, expenses, and udhaar in English, Hindi, and Kannada, then asks before saving anything it isn't sure about.",
    highlights: [
      "Strict JSON validated with Zod",
      "Inline Save / Edit / Cancel confirmation",
      "Voice notes, daily summaries, and undo",
    ],
    stack: ["Next.js", "Telegram Bot API", "Gemini API", "Supabase", "Vercel"],
    links: [
      {
        label: "Try the bot",
        href: "https://telegram.me/khatabot_demo_bot",
        type: "live",
      },
      {
        label: "Case study",
        href: "https://khatabot-indol.vercel.app",
        type: "live",
      },
    ],
  },
  {
    id: "macrolens",
    number: "03",
    title: "MacroLens",
    subtitle: "Meal photo → nutrition analytics",
    discipline: "Computer Vision + Data",
    year: "2026",
    accent: "olive",
    size: "featured",
    summary:
      "A calorie counter that admits what a photo can't know. A pretrained model names the dish, the interface shows ranges instead of fake-precise numbers, and every log becomes an eating pattern you can act on.",
    highlights: [
      "Pretrained Food-101 classifier, no training",
      "88.9% top-1 / 97.5% top-3 on an 81-image evaluation slice",
      "Honest ±20% ranges + a correction path",
    ],
    stack: ["PyTorch", "FastAPI", "pandas", "DuckDB", "Python"],
    links: [
      {
        label: "Live app",
        href: "https://macrolens-shreyasmelligeri25-7316.vercel.app",
        type: "live",
      },
      {
        label: "Code",
        href: "https://github.com/shreyas-2217/macrolens",
        type: "code",
      },
    ],
  },
  {
    id: "meridian",
    number: "04",
    title: "Meridian",
    subtitle: "Global meeting finder",
    discipline: "Product analytics",
    year: "2026",
    accent: "cobalt",
    size: "wide",
    summary:
      "A scheduling analytics tool that finds fair meeting times across countries by weighing working-hour overlap, public holidays, and local fairness.",
    highlights: [
      "Transparent meeting score",
      "Heatmaps + overlap trends",
      "AI brief → structured plan, with fallback",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Gemini API"],
    links: [
      {
        label: "Live app",
        href: "https://meridian-sable.vercel.app",
        type: "live",
      },
    ],
  },
  {
    id: "food-delivery",
    number: "05",
    title: "Food Delivery",
    subtitle: "Sales analytics dashboard",
    discipline: "Data analytics",
    year: "2026",
    accent: "orange",
    size: "wide",
    summary:
      "An interactive dashboard that turns delivery orders into city, dish, restaurant, and revenue trends — built for the next decision.",
    highlights: [
      "SQL + Python pipeline",
      "Interactive Streamlit app",
      "Documented business insights",
    ],
    stack: ["Python", "SQL", "Streamlit"],
    links: [
      {
        label: "Live app",
        href: "https://food-delivery-sales-analytics-dashboard-4rvzkfcp7ki6qyusenuhsi.streamlit.app/",
        type: "live",
      },
      {
        label: "Code",
        href: "https://github.com/shreyas-2217/Food-Delivery-Sales-Analytics-Dashboard",
        type: "code",
      },
    ],
  },
  {
    id: "scoutx",
    number: "06",
    title: "ScoutX",
    subtitle: "Sports talent discovery",
    discipline: "Product + AI",
    year: "2026",
    accent: "lilac",
    size: "wide",
    summary:
      "Contributed to a cross-platform talent discovery product connecting players and coaches through highlight videos, trial listings, and conversational search.",
    highlights: [
      "Interface + database design",
      "AI chatbot for discovery",
      "Web, Android & Windows",
    ],
    stack: ["Flutter", "Cloud Firestore"],
    links: [
      {
        label: "Code",
        href: "https://github.com/shreyas-2217/ScoutX",
        type: "code",
      },
    ],
  },
  {
    id: "plotline",
    number: "07",
    title: "Plotline",
    subtitle: "A story engine for spreadsheets",
    discipline: "Data + narrative",
    year: "2026",
    accent: "cobalt",
    size: "wide",
    summary:
      "Drop a CSV or Excel file and get a scroll-driven data story where every claim shows its receipt. The engine computes each number into a stats ledger; the narrative can only cite stats that exist — and the story always ends with what the data can't tell you.",
    highlights: [
      "Claims are verified against a stats ledger before render",
      "Click any sentence → a receipt with the exact computation",
      "Stdlib-only: CSV + XLSX parsing with zero dependencies",
    ],
    stack: ["Python", "Vanilla JS", "SVG", "Vercel"],
    links: [
      {
        label: "Live app",
        href: "https://plotline-shreyasmelligeri25-7316.vercel.app",
        type: "live",
      },
      {
        label: "Code",
        href: "https://github.com/shreyas-2217/plotline",
        type: "code",
      },
    ],
  },
];

export const principles = [
  {
    number: "01",
    title: "Start with the decision.",
    copy: "A dashboard is only useful if it changes what someone does next. I work backwards from the choice, not the chart.",
  },
  {
    number: "02",
    title: "Make the model explain itself.",
    copy: "AI features need structure, guardrails, and a graceful way out. The interface should never hide the uncertainty.",
  },
  {
    number: "03",
    title: "Keep the interface honest.",
    copy: "Show the trade-off. Name the edge case. Clear beats clever, especially when the subject is complicated.",
  },
];

export const experience = [
  {
    company: "Sunbird Straws",
    role: "Front-End Developer Intern",
    type: "Remote",
    dates: "Jun — Aug 2025",
    bullets: [
      "Built the front end for Synkria, a socio-educational platform combining learning communities with professional networking.",
      "Created responsive discovery, search, and filtering flows with HTML, Tailwind CSS, JavaScript, and GSAP.",
      "Worked directly with a fellow intern and supervisor to take the concept from idea to a working site.",
    ],
    stack: ["HTML", "Tailwind CSS", "JavaScript", "GSAP"],
  },
];

export const education = [
  {
    school: "CHRIST (Deemed to be University)",
    detail: "Bachelor of Computer Applications (BCA)",
    meta: "Bengaluru · 2024 — 2027 (expected)",
  },
  {
    school: "Christ Academy Junior College",
    detail: "PUC (CEBA) · 94%",
    meta: "Bengaluru · 2022 — 2024",
  },
];

export const certifications = [
  { name: "AWS Academy Graduate — Cloud Foundations", issuer: "AWS Academy", year: "2026" },
  { name: "Practical GenAI: Basics, Tools, Use Cases, Ethics", issuer: "Infosys Springboard", year: "2026" },
  { name: "Introduction to Cyber Security", issuer: "Infosys Springboard", year: "2025" },
  { name: "Entrepreneurship (Elite)", issuer: "NPTEL, IIT Madras", year: "2025" },
];

export const skillGroups = [
  {
    label: "Build",
    items: ["Python", "SQL", "JavaScript", "React.js", "Next.js", "Streamlit", "HTML / CSS", "Tailwind CSS"],
  },
  {
    label: "Analyse",
    items: ["pandas", "DuckDB", "MySQL", "PostgreSQL", "Supabase", "MongoDB", "Cloud Firestore"],
  },
  {
    label: "Cloud & tools",
    items: ["AWS (EC2, S3, RDS)", "Vercel", "Git", "GitHub"],
  },
  {
    label: "AI & LLM",
    items: ["Gemini API", "Groq", "Prompt design", "Structured outputs", "LLM guardrails"],
  },
  {
    label: "Also",
    items: ["Java", "Kotlin", "React Native", "Flutter", "GSAP"],
  },
];
