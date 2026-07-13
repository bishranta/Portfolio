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
};

export const skillGroups = [
  {
    title: "Web development",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Data & backend",
    items: ["PostgreSQL", "MySQL", "Supabase", "Strapi CMS"],
  },
  {
    title: "Machine learning",
    items: ["Deep learning", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Design & tooling",
    items: ["Figma", "Photoshop", "Git", "Vercel", "Railway"],
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

export const projects = [
  {
    title: "ICT Foundation",
    description: "Organization website built with React, Next.js, and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://ictfoundation.org.np",
    size: "large" as const,
  },
  {
    title: "Global Spark",
    description: "CMS-driven site backed by Supabase as the database layer.",
    tags: ["Supabase", "CMS"],
    href: "https://globalspark.com.np",
    size: "small" as const,
  },
  {
    title: "Digital Conclave",
    description: "Multi-page event site with registration forms and real-time updates.",
    tags: ["Next.js", "Realtime"],
    href: "https://digitalconclave.org",
    size: "small" as const,
  },
  {
    title: "ICT Award",
    description: "Event platform with registration, a live database, and searchable past archives.",
    tags: ["Next.js", "PostgreSQL"],
    href: "https://ictaward.org",
    size: "small" as const,
  },
  {
    title: "NEPSE Stock Price Prediction",
    description:
      "LSTM models forecasting NEPSE-listed stock prices, fed by an automated scraping and preprocessing pipeline, with a web interface for generating predictions per company.",
    tags: ["Python", "LSTM", "Deep learning"],
    href: null,
    size: "large" as const,
  },
  {
    title: "Image Authenticity Detection",
    description:
      "ML system that flags manipulated images via feature extraction and renders heatmaps of the altered regions.",
    tags: ["Python", "Computer vision"],
    href: null,
    size: "small" as const,
  },
];

export const education = {
  degree: "Bachelor of Computer Engineering",
  school: "Kathmandu Engineering College, Tribhuvan University",
  period: "2022 - 2026 (Expected)",
  coursework: "Data Mining, Big Data, DBMS, Artificial Intelligence, DSA",
};

export const certifications = [
  "Advanced Python Programming, DataCamp",
  "Intermediate SQL, DataCamp",
];
