export const profile = {
  name: "Bishranta Regmi",
  title: "Full Stack Developer & AI/ML Engineer",
  location: "Kathmandu, Nepal",
  email: "bishregmi2060@gmail.com",
  phone: "+977-9845050992",
  github: "https://github.com/bishranta",
  githubHandle: "github.com/bishranta",
  linkedin: "https://linkedin.com/in/bishrantaregmi",
  linkedinHandle: "linkedin.com/in/bishrantaregmi",
  instagram: "https://www.instagram.com/bishranta_/",
  instagramHandle: "instagram.com/bishranta_",
  facebook: "https://www.facebook.com/bishranta.regmi/",
  facebookHandle: "facebook.com/bishranta.regmi",
  gmailColor: "#EA4335",
  githubColor: "#181717",
  linkedinColor: "#0A66C2",
  instagramColor: "#E4405F",
  facebookColor: "#1877F2",
};

export const skillGroups = [
  {
    title: "Languages",
    accent: "teal" as const,
    items: [
      { name: "JavaScript", slug: "javascript", color: "#F7DF1E", featured: true },
      { name: "TypeScript", slug: "typescript", color: "#3178C6", featured: true },
      { name: "Python", slug: "python", color: "#3776AB" },
      { name: "PHP", slug: "php", color: "#777BB4" },
      { name: "HTML", slug: "html5", color: "#E34F26" },
      { name: "CSS", slug: "css3", color: "#1572B6" },
    ],
  },
  {
    title: "Frontend",
    accent: "coral" as const,
    items: [
      { name: "React", slug: "react", color: "#61DAFB", featured: true },
      { name: "Next.js", slug: "nextdotjs", color: "#000000", featured: true },
      { name: "Vite", slug: "vite", color: "#646CFF" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    accent: "mustard" as const,
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "#339933", featured: true },
      { name: "Laravel", slug: "laravel", color: "#FF2D20", featured: true },
      { name: "Filament", slug: "filament", color: "#FDAE4B" },
      { name: "Strapi", slug: "strapi", color: "#4945FF" },
      { name: "Supabase", slug: "supabase", color: "#3ECF8E" },
      { name: "Socket.IO", slug: "socketdotio", color: "#010101" },
    ],
  },
  {
    title: "Databases",
    accent: "teal" as const,
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "#4169E1", featured: true },
      { name: "MySQL", slug: "mysql", color: "#4479A1" },
    ],
  },
  {
    title: "DevOps & Tools",
    accent: "coral" as const,
    items: [
      { name: "Docker", slug: "docker", color: "#2496ED", featured: true },
      { name: "Git", slug: "git", color: "#F05032" },
      { name: "GitHub", slug: "github", color: "#181717" },
      { name: "Ubuntu Server", slug: "ubuntu", color: "#E95420" },
      { name: "Vercel", slug: "vercel", color: "#000000" },
      { name: "cPanel", slug: "cpanel", color: "#FF6C2C" },
    ],
  },
  {
    title: "Design Tools",
    accent: "mustard" as const,
    items: [
      { name: "Figma", slug: "figma", color: "#F24E1E", featured: true },
      { name: "Photoshop", slug: "adobephotoshop", color: "#31A8FF", featured: true },
    ],
  },
];

export const experience = [
  {
    role: "Developer | Technology Officer",
    org: "ICT Foundation",
    period: "May 2026 - Present",
    points: [
      "Build responsive web applications with React, Next.js, and Tailwind CSS.",
      "Maintain a CMS platform and backend services on Node.js and Strapi.",
      "Design and manage PostgreSQL databases behind the application and its content.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "Jul 2025 - Present",
    points: [
      "Design and build responsive client sites with React, Next.js, TypeScript, and Tailwind CSS.",
      "Integrate Supabase for auth, database, and real-time data.",
      "Ship multi-page event sites with registration forms and live features.",
    ],
  },
  {
    role: "Freelance Data Analyst",
    org: "Self-employed",
    period: "Jun 2024 - Jun 2025",
    points: [
      "Collected and cleaned datasets from spreadsheets and public sources.",
      "Ran exploratory analysis in Python and Excel and turned it into visual reports.",
    ],
  },
  {
    role: "Creative Designer",
    org: "Technova, Freelance",
    period: "2024-present",
    points: [
      "Design marketing graphics, branding assets, and UI/UX mockups for technical programs.",
      "Translate Figma wireframes into responsive interfaces with React and Tailwind CSS.",
    ],
  },
];

export const educationTimeline = [
  {
    level: "Bachelor's degree",
    title: "Bachelor of Computer Engineering",
    org: "Kathmandu Engineering College, Tribhuvan University",
    location: "Kathmandu, Nepal",
    period: "2022 - 2026",
    detail: "Coursework: Data Mining, Big Data, DBMS, Artificial Intelligence, DSA",
  },
  {
    level: "High school",
    title: "Higher Secondary Education",
    org: "Valmiki Shiksha Sadan",
    location: "Bharatpur, Nepal",
    period: null,
    detail: null,
  },
  {
    level: "School",
    title: "Primary & Secondary Education",
    org: "Little Flower School",
    location: "Bharatpur, Nepal",
    period: null,
    detail: null,
  },
];

export const projects = [
  {
    title: "ICT Award",
    description: "Event platform with registration, a live database, and searchable past archives.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://ictaward.org",
    accent: "teal" as const,
    category: "org" as const,
  },
  {
    title: "ICT Foundation",
    description: "Organization website built with React, Next.js, and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://ictfoundation.org.np",
    accent: "teal" as const,
    category: "org" as const,
  },
  {
    title: "Digital Conclave",
    description: "Public event site for the Digital Conclave series, built with React, Next.js, and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://digitalconclave.org",
    accent: "mustard" as const,
    category: "org" as const,
  },
  {
    title: "Global Spark",
    description: "Organization website for Global Spark, built with React, Next.js, and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://globalspark.com.np",
    accent: "coral" as const,
    category: "org" as const,
  },
  {
    title: "ICTech",
    description: "Organization website for ICTech, built with React, Next.js, and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://ictech.com.np",
    accent: "teal" as const,
    category: "org" as const,
  },
  {
    title: "Living with ICT",
    description: "Awareness campaign site for Living with ICT, built with React, Next.js, and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://livingwithict.com",
    accent: "coral" as const,
    category: "org" as const,
  },
  {
    title: "Conference Management System",
    description:
      "Real-time conference dashboard with live session updates and YouTube livestreams, a feedback option for authenticated guests using their guest ID, and live audience to panel Q&A feature.",
    tags: ["React", "Strapi", "Socket.IO"],
    href: "https://live.digitalconclave.org",
    accent: "mustard" as const,
    category: "mgmt" as const,
  },
  {
    title: "Event Management System",
    description:
      "Full event and guest management system - online registration with an integrated payment portal, automatic ticket generation, bulk email/SMS invitations, physical card delivery tracking, and on-site entry tracking.",
    tags: ["Laravel", "Filament", "PostgreSQL"],
    href: "https://events.globalspark.com.np",
    accent: "coral" as const,
    category: "mgmt" as const,
  },
  {
    title: "NEPSE Stock Price Prediction",
    description:
      "LSTM forecasting for NEPSE stock prices, with an automated scraping pipeline and a demo for per-company predictions.",
    tags: ["Python", "LSTM", "Deep learning"],
    href: null,
    accent: "coral" as const,
    category: "ml" as const,
  },
  {
    title: "Image Authenticity Detection",
    description:
      "ML system that flags manipulated images using classical feature-extraction methods, then renders heatmaps highlighting the altered regions.",
    tags: ["Python", "Computer vision"],
    href: null,
    accent: "mustard" as const,
    category: "ml" as const,
  },
];

export const certifications = [
  "Advanced Python Programming, DataCamp",
  "Intermediate SQL, DataCamp",
];
