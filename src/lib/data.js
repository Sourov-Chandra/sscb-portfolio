export const projects = [
  {
    id: 1,
    name: "RecipeHub",
    subtitle: "Recipe Sharing Platform",
    year: "2024",
    cat: "fullstack",
    featured: true,
    desc: "A full-stack recipe sharing platform with recipe creation, browsing, filtering, and user management features.",
    bullets: [
      "Built a full-stack recipe sharing platform with recipe creation, browsing, filtering, and user management features.",
      "Implemented secure role-based access control with BetterAuth, supporting both email/password and Google OAuth login.",
      "Integrated Stripe premium membership, enforcing recipe-creation limits for free users and unlocking unlimited access for premium subscribers.",
      "Deployed on Vercel with environment-based configuration across authentication, database, and payment services.",
    ],
    tags: ["Next.js", "Express.js", "MongoDB", "BetterAuth", "Stripe"],
    demo: "https://recipes-hub-teal.vercel.app/",
    githubClient: "https://github.com/Sourov-Chandra/recipe-hub",
    githubServer: "https://github.com/Sourov-Chandra/recipe-hub-server",
    image: null,
  },
  {
    id: 2,
    name: "MediQueue",
    subtitle: "Tutor Booking Platform",
    year: "2024",
    cat: "fullstack",
    featured: true,
    desc: "A complete tutor management workflow with protected CRUD operations, real-time availability validation, and JWT authentication.",
    bullets: [
      "Built a complete tutor management workflow with protected CRUD operations and end-to-end booking management.",
      "Designed a time-slot booking system that validates availability in real time to prevent double bookings and scheduling conflicts.",
      "Secured all protected routes with JWT-based authentication via BetterAuth and custom middleware.",
      "Implemented a dynamic dark/light theme toggle with consistent styling across all pages.",
    ],
    tags: ["Next.js", "Express.js", "MongoDB", "BetterAuth", "JWT"],
    demo: "https://mediqueue-orcin.vercel.app/",
    githubClient: "https://github.com/Sourov-Chandra/Mediqueue-client-side",
    githubServer: "https://github.com/Sourov-Chandra/mediqueue-server",
    image: null,
  },
  {
    id: 3,
    name: "QurbaniHat",
    subtitle: "Livestock Booking Platform",
    year: "2024",
    cat: "fullstack",
    featured: true,
    desc: "A full-stack online livestock booking marketplace featuring Google OAuth via BetterAuth, MongoDB Atlas, and responsive UI.",
    bullets: [
      "Built a full-stack marketplace for listing and booking livestock with a complete authentication flow.",
      "Integrated Google OAuth via BetterAuth with proper callback configuration and error handling.",
      "Deployed to Vercel with environment variable management and a CI/CD pipeline for continuous delivery.",
      "Implemented form validation and a fully responsive UI across mobile and desktop breakpoints.",
    ],
    tags: ["Next.js", "BetterAuth", "MongoDB Atlas", "Tailwind CSS"],
    demo: "https://a-8-livestock-booking-platform.vercel.app/",
    githubClient: "https://github.com/Sourov-Chandra/Livestock-Booking-Platform",
    githubServer: null,
    image: null,
  },
  {
    id: 4,
    name: "Picnito",
    subtitle: "Online Image Converter & Optimizer",
    year: "2024",
    cat: "fullstack",
    featured: true,
    desc: "A privacy-first online image converter tool supporting batch conversion across multiple formats with zero tracking and in-memory processing.",
    bullets: [
      "Built a high-performance image converter supporting JPG, PNG, WebP, AVIF, JFIF, and GIF formats.",
      "Engineered secure in-memory buffer processing for zero permanent storage and total user anonymity.",
      "Implemented batch conversions supporting multiple files with automatic ZIP compression packaging.",
      "Architected decoupled full-stack deployment with Next.js frontend on Vercel and Express.js processing service on Render.",
    ],
    tags: ["Next.js", "Express.js", "Node.js", "Render", "Vercel", "Tailwind CSS"],
    demo: "https://picnito.vercel.app/",
    githubClient: "https://github.com/Sourov-Chandra/image-converter",
    githubServer: "https://github.com/Sourov-Chandra/image-converter-server",
    image: null,
  },
];

export const education = [
  {
    id: 1,
    icon: "🎓",
    degree: "Diploma in Engineering (Computer Science & Technology)",
    school: "Thakurgaon Polytechnic Institute, Bangladesh",
    year: "2023 – Present (Expected 2026)",
    desc: "Coursework: Object-Oriented Programming (Java, Python), Data Structures & Algorithms, Operating Systems, Data Communication.",
  },
  {
    id: 2,
    icon: "🏫",
    degree: "Secondary School Certificate (SSC)",
    school: "Thakurgaon Technical School and College, Bangladesh",
    year: "Passed: 2022",
    desc: "Trade: Computer & Information Technology.",
  },
];

export const certifications = [
  {
    id: 1,
    icon: "📜",
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    year: "2024",
    desc: "Comprehensive full-stack web development program covering MERN stack, Next.js, BetterAuth, REST APIs, and production deployments.",
    certificateUrl: "https://drive.google.com/file/d/1HU8nq9UmA7B_m3JLHuGGqPhbgt6HWEd0/view?usp=sharing",
  },
];

export const languages = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Conversational" },
];

export const softSkills = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Attention to Detail",
  "Continuous Learning",
];
