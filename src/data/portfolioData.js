export const personalInfo = {
  name: "Sumit Lakum",
  nickname: "Sumit",
  role: "Full-Stack & AI Integration Engineer",
  experienceYears: "2+ Years",
  company: "Citrusbug Technolabs",
  location: "Ahmedabad, India",
  email: "sumitlakum123@gmail.com",
  linkedin: "https://www.linkedin.com/in/sumitlakum09/",
  github: "https://github.com/sumitlakum",
  resumeDownloadUrl: "https://drive.google.com/uc?export=download&id=1-0ZGCq9ovFn8Iwd6t4-Amb6739s6mJPK",
  avatarUrl: "/profile.jpg",
  greeting: "Ohh you found me?. Howdy!",
  intro: "Hey! Thank you for visiting my personal site! I am a Software Engineer with 2+ years of experience specializing in building scalable backend systems, full-stack web applications, and production AI capabilities across HealthTech, Real Estate, and EdTech.",
  summary: "Software Engineer with 2+ years of experience building scalable backend systems and full-stack web applications across the real estate, healthtech, and edtech domains. Skilled in Python (FastAPI, Django), Node.js, React.js, and Next.js, with hands-on experience integrating AI capabilities into production applications used by thousands of end users.",
  closingNote: "I am passionate about building high-scale backend APIs, AI document processing pipelines, multi-agent workflows, and responsive web applications. Feel free to reach out directly via email or LinkedIn—I look forward to connecting!"
};

export const techStack = {
  backend: [
    { name: "Python", icon: "python" },
    { name: "Django / DRF", icon: "django" },
    { name: "FastAPI", icon: "fastapi" }
  ],
  frontend: [
    { name: "JavaScript", icon: "js" },
    { name: "TypeScript", icon: "ts" },
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "next" }
  ],
  databases: [
    { name: "PostgreSQL", icon: "postgres" },
    { name: "MongoDB", icon: "mongo" },
    { name: "Supabase", icon: "supabase" },
    { name: "SQLAlchemy / Alembic", icon: "sqlalchemy" }
  ],
  aiIntegration: [
    { name: "OpenAI Agents SDK", icon: "openai" },
    { name: "OCR Document Pipeline", icon: "ocr" },
    { name: "Playwright Automation", icon: "playwright" },
    { name: "Claude & MCP", icon: "claude" }
  ]
};

export const experiences = [
  {
    company: "Citrusbug Technolabs",
    companyTag: "Software Development Company",
    role: "Software Engineer",
    period: "May 2024 - Present",
    location: "Ahmedabad, India",
    description: "Designed and developed scalable full-stack web applications and AI-powered solutions using FastAPI, Django, Python, React.js, and Next.js.",
    points: [
      "Designed and developed scalable full-stack web applications and AI-powered solutions using FastAPI, Django, Python, React.js, and Next.js, delivering high-performance, maintainable software.",
      "Built scalable REST APIs using FastAPI implementing business logic, authentication, authorization, role-based access control (RBAC), database operations, and third-party integrations.",
      "Collaborated within Agile teams, participating in sprint planning, code reviews, production deployments, and resolving production issues to ensure application reliability."
    ]
  }
];

export const projects = [
  {
    number: "#01",
    id: "diagno-ops",
    title: "Diagnostic Lab Management Platform",
    domain: "Healthcare Solution",
    category: "Full-Stack & HealthTech",
    badge: "10,000+ Appts/Mo • 95% Manual Reduction",
    summary: "Automated healthcare operational platform managing appointment intake, PIN code auto-assignment, PWA field tracking, and 15+ reporting dashboards.",
    details: [
      "Automated appointment creation by integrating Gmail API and parsing multiple TPA email formats, extracting structured patient data for 10,000+ appointments/month, resulting in a 95% reduction in manual work.",
      "Implemented location-based staff assignment with manual, bulk, and intelligent auto-assignment based on service areas and PIN code mapping, reducing assignment time by 30–40%.",
      "Built a Progressive Web App (PWA) for field staff to receive appointments, update visit statuses, capture visit details, navigate to patient locations, and communicate directly with patients.",
      "Created 15+ reporting dashboards to monitor appointments, staff efficiency, payroll, and laboratory operations.",
      "Integrated Geolocation APIs to provide real-time field staff tracking and live operational visibility for administrators."
    ],
    tags: ["FastAPI", "React.js", "Gmail API", "PWA", "Geolocation API", "PostgreSQL"]
  },
  {
    number: "#02",
    id: "ai-lab-workflow",
    title: "AI-Powered Lab Workflow Automation",
    domain: "HealthTech Automation",
    category: "AI & Automation",
    badge: "99% Data Entry Cut • 500+ Reports",
    summary: "Intelligent document processing pipeline using OCR and OpenAI to extract and structure laboratory data from PDFs and scanned reports.",
    details: [
      "Developed an intelligent document processing pipeline using OCR and OpenAI to extract, validate, and structure laboratory data from PDFs and scanned reports, automating 500+ patient reports.",
      "Built a Playwright-based automation framework to automate 10+ laboratory test workflows eliminating repetitive manual data entry.",
      "Implemented robust data validation and transformation logic to ensure extracted information conformed to required web form formats prior to submission.",
      "Reduced 99% of manual data entry by automating end-to-end laboratory workflows, significantly decreasing processing time and minimizing human errors."
    ],
    tags: ["Python", "OpenAI API", "OCR Engine", "Playwright", "FastAPI", "JSON Schema"]
  },
  {
    number: "#03",
    id: "ai-product-assistant",
    title: "AI Product Recommendation Assistant",
    domain: "E-commerce Platform",
    category: "AI & Multi-Agent Systems",
    badge: "5-Agent OpenAI SDK Workflow",
    summary: "Multi-agent AI ecosystem orchestrating 5 specialized agents for query intent, product recommendations, web search, and follow-up conversations.",
    details: [
      "Designed and implemented a multi-agent AI workflow using the OpenAI Agents SDK, orchestrating 5 specialized AI agents for query classification, product recommendations, product information retrieval, web-based recommendations, and follow-up conversations.",
      "Engineered prompt workflows and agent routing logic to classify user intent, manage follow-up conversations, and facilitate interactions between multiple AI agents.",
      "Developed custom AI tools to query the product database, enabling real-time product retrieval, personalized recommendations, and accurate responses through structured tool calling.",
      "Optimized AI response quality through prompt engineering, structured tool calling, and context management."
    ],
    tags: ["OpenAI Agents SDK", "Python", "FastAPI", "MongoDB", "Structured Tool Calling"]
  }
];

export const educationList = [
  {
    institution: "Government Engineering College, Rajkot",
    degree: "B.E. in Computer Engineering",
    period: "2020 – 2024",
    grade: "CGPA: 8.40 / 10",
    description: "Specialized in Computer Engineering, software development, database systems, and AI automation workflows."
  },
  {
    institution: "Shikhar Public School, Dhrangdhra",
    degree: "GSHEB (XII), HSC",
    period: "2018 – 2020",
    grade: "Grade: 75%",
    description: "I completed my class 12 high school education at Shikhar Public School, Dhrangdhra."
  },
  {
    institution: "Shikhar Public School, Dhrangdhra",
    degree: "GSEB (X), SSC",
    period: "2017 – 2018",
    grade: "Grade: 82%",
    description: "I completed my class 10 education at Shikhar Public School, Dhrangdhra."
  }
];

export const education = educationList[0];
