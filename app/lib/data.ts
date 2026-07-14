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
  gmailColor: "#EA4335",
  githubColor: "#181717",
  linkedinColor: "#0A66C2",
  instagramColor: "#E4405F",
};

export const skillGroups = [
  {
    title: "Web development",
    accent: "teal" as const,
    items: [
      { name: "React", slug: "react", color: "#61DAFB", featured: true },
      { name: "Next.js", slug: "nextdotjs", color: "#000000", featured: true },
      { name: "TypeScript", slug: "typescript", color: "#3178C6" },
      { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
      { name: "Node.js", slug: "nodedotjs", color: "#339933" },
    ],
  },
  {
    title: "Data & backend",
    accent: "coral" as const,
    items: [
      { name: "Supabase", slug: "supabase", color: "#3ECF8E", featured: true },
      { name: "PostgreSQL", slug: "postgresql", color: "#4169E1", featured: true },
      { name: "MySQL", slug: "mysql", color: "#4479A1" },
      { name: "Strapi CMS", slug: "strapi", color: "#4945FF" },
    ],
  },
  {
    title: "Machine learning",
    accent: "mustard" as const,
    items: [
      { name: "Python", slug: "python", color: "#3776AB", featured: true },
      { name: "Scikit-learn", slug: "scikitlearn", color: "#F7931E", featured: true },
      { name: "Pandas", slug: "pandas", color: "#150458" },
      { name: "NumPy", slug: "numpy", color: "#013243" },
    ],
  },
  {
    title: "Design & tooling",
    accent: "teal" as const,
    items: [
      { name: "Figma", slug: "figma", color: "#F24E1E", featured: true },
      { name: "Photoshop", slug: "adobephotoshop", color: "#31A8FF", featured: true },
      { name: "Git", slug: "git", color: "#F05032" },
      { name: "Vercel", slug: "vercel", color: "#000000" },
      { name: "Railway", slug: "railway", color: "#0B0D0E" },
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
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
    org: "LOFA, Freelance",
    period: "2019 - Present",
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
    tags: ["Next.js", "PostgreSQL"],
    href: "https://ictaward.org",
    image: "/projects/ictaward.jpg",
    accent: "teal" as const,
    category: "web" as const,
  },
  {
    title: "ICT Foundation",
    description: "Organization website built with React, Next.js, and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://ictfoundation.org.np",
    image: "/projects/ictfoundation.jpg",
    accent: "teal" as const,
    category: "web" as const,
  },
  {
    title: "Digital Conclave",
    description: "Multi-page event site with registration forms and real-time updates.",
    tags: ["Next.js", "Realtime"],
    href: "https://digitalconclave.org",
    image: "/projects/digitalconclave.jpg",
    accent: "mustard" as const,
    category: "web" as const,
  },
  {
    title: "Global Spark",
    description: "CMS-driven site backed by Supabase as the database layer.",
    tags: ["Supabase", "CMS"],
    href: "https://globalspark.com.np",
    image: "/projects/globalspark.jpg",
    accent: "coral" as const,
    category: "web" as const,
  },
  {
    title: "NEPSE Stock Price Prediction",
    description:
      "LSTM models forecasting NEPSE-listed stock prices, fed by an automated scraping and preprocessing pipeline, with a web interface for generating predictions per company.",
    tags: ["Python", "LSTM", "Deep learning"],
    href: null,
    image: null,
    accent: "coral" as const,
    category: "ml" as const,
  },
  {
    title: "Image Authenticity Detection",
    description:
      "ML system that flags manipulated images via feature extraction and renders heatmaps of the altered regions.",
    tags: ["Python", "Computer vision"],
    href: null,
    image: null,
    accent: "mustard" as const,
    category: "ml" as const,
  },
];

export const certifications = [
  "Advanced Python Programming, DataCamp",
  "Intermediate SQL, DataCamp",
];
