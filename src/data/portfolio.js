// Single source of truth for the portfolio content.
// Edit values here to update the site — components consume this data.

export const profile = {
  name: "Dipali Kar",
  firstName: "Dipali",
  lastName: "Kar",
  title: "Full-Stack & GenAI Developer | React • Node.js • Python | RAG/MCP • Google GenAI SDK",
  tagline:
    "I build intelligent, full-stack web applications — blending React, Node.js, AWS and Generative AI to ship real-world SaaS products.",
  about:
    "IT graduate with professional experience at PwC and a strong passion for building intelligent, full-stack web applications. A self-driven learner who transitioned into AI engineering — designing real-world SaaS products with integrated AI agents, RAG pipelines and MCP-based tool orchestration. AWS Cloud certified and eager to contribute and grow at a forward-thinking organization.",
  location: "Cuttack, Odisha, India",
  email: "dipalikajal2002@gmail.com",
  phone: "+91 7008213073",
  github: "https://github.com/dipalikar",
  githubHandle: "github.com/dipalikar",
  linkedin: "https://www.linkedin.com/in/dipali-kar/",
  linkedinHandle: "linkedin.com/in/dipali-kar/",
  resumeFile: "DipaliKarResume.pdf",
  resumeUrl:
    "https://github.com/Dipalikar/DipaliKar/raw/main/DipaliKarResume.pdf",
  photo: "dipali-photo.jpeg",
  available: true,
};

export const stats = [
  { label: "Years of Experience", value: "1.5+" },
  { label: "Full-Stack AI Products", value: "2" },
  { label: "Cloud Certifications", value: "AWS" },
  { label: "Languages Spoken", value: "4" },
];

export const skillGroups = [
  {
    title: "AI / GenAI",
    accent: true,
    items: [
      "Google GenAI SDK",
      "RAG",
      "MCP",
      "OpenRouter",
      "ChromaDB",
      "Prompt Engineering",
    ],
  },
  {
    title: "Languages",
    items: ["Python", "JavaScript", "Java", "C", "C++"],
  },
  {
    title: "Frontend",
    items: ["React.js", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "PostgreSQL/NeonDB", "API Integrations"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "Git/GitHub", "Postman", "API Testing", "Deployment Awareness"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "NeonDB", "Oracle"],
  },
  {
    title: "Frameworks & SDKs",
    items: ["Google GenAI SDK", "OpenRouter"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "MS Office"],
  },
];

export const experience = [
  {
    company: "PwC AC (PricewaterhouseCoopers)",
    role: "Specialist – Advisory (US Healthcare)",
    period: "Jun 2024 – Sep 2025",
    location: "India",
    bullets: [
      "Managed Accounts Receivable, revenue cycle operations and denial management for US healthcare clients, maintaining high financial accuracy and resolving high-priority insurance claims.",
      "Reconciled and audited payments from clients and insurance companies, maintaining records aligned with US compliance and HIPAA standards.",
      "Collaborated with onshore teams in a fast-paced MNC environment, demonstrating strong stakeholder communication and consistent on-time delivery.",
    ],
  },
  {
    company: "Independent Research & Project Development",
    role: "Self-directed Learning & Project Development",
    period: "Sep 2025 – Present",
    location: "Remote",
    bullets: [
      "Earned the AWS Certified Cloud Practitioner credential (Udemy) and built two full-stack AI-powered web applications integrating AI Agents, RAG pipelines and MCP-based tool orchestration.",
      "Deepened expertise across the React + Node ecosystem, Generative AI tooling and cloud-native deployment patterns through hands-on product development.",
    ],
  },
];

export const projects = [
  {
    name: "Helper.io",
    headline: "AI-Powered Document Management & Learning Platform",
    description:
      "A premium document management and learning platform where users upload notes and interact with ALKA — an in-built AI agent that summarizes content, generates quizzes and autonomously manages files using RAG and MCP-based tool calls.",
    bullets: [
      "Built Helper.io using React, Node.js, Express, NeonDB, and OpenRouter SDK to create a premium document management and learning platform with an autonomous AI agent.",
      "Integrated Google GenAI SDK and MCP-based tool calls to automate content summarization, quiz generation, and file management.",
      "Utilized RAG to provide retrieval-augmented context for accurate AI responses.",
    ],
    liveUrl: "https://helperio.vercel.app/",
    repoUrl: "https://github.com/dipalikar/Helper.io",
    stack: [
      "React",
      "TailwindCSS",
      "Express.js",
      "NeonDB",
      "OpenRouter SDK",
      "RAG",
      "MCP",
    ],
    role: "Solo Developer",
  },
  {
    name: "QuickAI",
    headline: "Subscription-Based AI SaaS Platform",
    description:
      "A subscription SaaS offering multiple AI-powered tools — article generation, image creation, background removal and resume analysis — built on the full PERN stack with JWT auth and tiered access control.",
    bullets: [
      "Built QuickAI using the PERN stack to deliver a subscription-based AI SaaS platform offering multiple AI-powered tools.",
      "Integrated Google GenAI SDK and OpenRouter to enable flexible multi-model AI routing for article generation and resume analysis.",
      "Implemented JWT authentication and a PostgreSQL-backed credit system to gate premium features and manage user tiers.",
    ],
    liveUrl: "https://quick-ai-livid-omega.vercel.app/",
    repoUrl: "https://github.com/dipalikar/QuickAI",
    stack: [
      "PostgreSQL",
      "Express.js",
      "React",
      "Node.js",
      "TailwindCSS",
      "Google GenAI SDK",
    ],
    role: "Solo Developer",
  },
];

export const education = [
  {
    institution: "Ravenshaw University",
    degree: "B.Sc. Information Technology and Management (ITM)",
    period: "2021 – 2024",
  },
  {
    institution: "LR DAV Public School",
    degree: "12th Board (Higher Secondary)",
    period: "2018 – 2020",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services · via Udemy",
    year: "2025",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-c6877995-bd09-4ec7-aaee-e7b4e46693ba/",
  },
];

export const softSkills = [
  "Project Management",
  "Cross-functional Teamwork",
  "Time Management",
  "Critical Thinking",
  "Effective Communication",
  "Leadership",
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Odia", level: "Fluent" },
  { name: "Gujarati", level: "Fluent" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
