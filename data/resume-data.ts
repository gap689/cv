import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

export const RESUME_DATA = {
  name: "Germán Alamilla",
  initials: "GA",
  title: "Software Developer",
  location: "México",
  locationLink: "https://www.google.com/maps/place/Puebla",
  about:
    "Software developer focused on building data-centric products",
  summary:
    "I'm a technology professional specializing in data-centric problem-solving. Completed a master's degree in computer science, including research in quantum computing using IBM's platform. Adaptable and driven by a passion for technology, constantly learning and embracing new challenges using the latest tech advancements. Interested in colaborating in impactful projects, SaaS, startups or AI apps.",
  avatarUrl: "https://avatars.githubusercontent.com/u/31602377?v=4",
  personalWebsiteUrl: "alamilla.vercel.app",
  contact: {
    email: "german.alamilla@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gap689",
        icon: FaGithub,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/germanalamilla/",
        icon: CiLinkedin,
      },
      {
        name: "X",
        url: "https://twitter.com/GermanAlamillaP",
        icon: BsTwitterX,
      },
    ],
  },
  education: [
    {
      school: "Monterrey Institute of Technology and Higher Education",
      degree: "MSc. in Computer Science",
      start: "2017",
      end: "2019",
      courses: ["Quantum computing", "Machine Learning", "Data Analytics", "Neural Networks", "Python", "Entrepreneurship", "Keras", "Pandas"],
    },
    {
      school: "University of the Americas Puebla",
      degree: "Bachelor's Degree in Nanotechnology",
      start: "2008",
      end: "2013",
      courses: ["Organic Chemistry", "Inorganic Chemistry", "Multivariable Calculus", "Electronics", "Physics", "Quantum mechanics"],
    },
  ],
  work: [
    {
      company: "",
      link: "",
      badges: ["Remote"],
      title: "Freelance Full Stack Developer",
      start: "Oct 2023",
      end: "present",
      description: "Designed a corporate website that effectively showcases a company's engineering services. Implemented responsive design techniques to ensure the website performs seamlessly across various devices and screen sizes. Set up Google Analytics to monitor and analyze website traffic and user behavior. Performed tasks of user authorization and authentication using Clerk."
    },
    {
      company: "FF",
      link: "",
      badges: ["Remote"],
      title: "Fullstack Developer",
      start: "May 2023",
      end: "Oct 2023",
      description: "A software development agency to build and grow online businesses. Built and maintained web applications using NextJS and MongoDB. Implemented data validation and form handling with formik. Integrated internationalization (i18n) features to support multiple languages."
    },
    {
      company: "Secretary of Innovation and Digital Government",
      link: "",
      badges: ["On-site"],
      title: "Software Developer",
      start: "Feb 2023",
      end: "Apr 2023",
      description: "A Govtech department. Worked with Linux, implemented Django models, and webpage development using Vue."
    },
    {
      company: "Clinical Laboratory",
      link: "",
      badges: ["On-site"],
      title: "Data Analyst",
      start: "Apr 2020",
      end: "Apr 2021",
      description: "Performed tasks related to Business Development and Data Management. Identified data-driven opportunities for growth. Performed data modelling and data analysis."
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Tailwindcss",
    "css",
    "Sass",
    "Prisma",
    "Python",
    "Data Analytics",
    "BigQuery",
    "PlanetScale",
    "Pandas",
    "SQL",
    "Web Scrapping",
    "MongoDB",
    "i18n", 
    "Formik",
    "Google Analytics"
  ],
  projects: [
    {
      title: "LabUX",
      techStack: [
        "TypeScript",
        "React",
        "Next.js",
        "PlanetScale",
        "Tailwindcss",
        "Clerk Authentication"
      ],
      description: "A software platform for clinical laboratories and patients (in progress)",
      logo: null,
      link: {
        label: "LabUX",
        href: "https://github.com/gap689/LabUX",
      },
    },
    {
      title: "CE Engineering",
      techStack: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwindcss",
      ],
      description: "A landing page for an engineering company in CDMX, México (in progress)",
      logo: null,
      link: {
        label: "",
        href: "https://kxntxl.vercel.app/",
      },
    },
    {
      title: "AI Saas Platform",
      techStack: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwindcss",
        "ChatGPT API",
        "Clerk",
        "Stripe", 
        "PlanetScale"
      ],
      description: "Full stack production-ready AI Saas platform. Image, text, video and music generation.",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/gap689/ai-saas-tutorial",
      },
    },
    {
      title: "Management system for online courses.",
      techStack: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwindcss",
        "Clerk",
        "Stripe", 
        "PlanetScale"
      ],
      description: "Learning Management System platform. Users can purchase courses with stripe.",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/gap689/lms",
      },
    },
    {
      title: "CV Template",
      techStack: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwindcss",
      ],
      description: "My personal website. Web app that renders minimalist CV with dashboard style layout. Built with Next.js and shadcn/ui, deployed on Vercel.",
      logo: null,
      link: {
        label: "alamilla.dev",
        href: "https://github.com/gap689/LabUX",
      },
    },
  ]

};