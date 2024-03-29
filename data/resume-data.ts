import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

export const RESUME_DATA = {
  name: "German Alamilla",
  initials: "GA",
  location: "Puebla, Mexico",
  locationLink: "https://www.google.com/maps/place/Puebla",
  about:
    "Full Stack Developer focused on building data-centric products",
  summary:
    "Less words, more action",
  avatarUrl: "https://avatars.githubusercontent.com/u/31602377?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "german.alamilla@gmail.com",
    tel: "+522215951539",
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
      company: "Secretary of Innovation and Digital Government",
      link: "",
      badges: [],
      title: "Software developer",
      start: "Feb 2023",
      end: "Apr 2023",
      description: "Worked with Linux servers, implemented Django models, and webpage development"
    },
    {
      company: "FF",
      link: "",
      badges: ["Remote"],
      title: "Software developer",
      start: "May 2023",
      end: "Oct 2023",
      description: "A software development agency to build and grow your online business"
  }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Tailwindcss",
    "Prisma",
    "Python",
    "Data Analytics",
    "BigQuery",
    "PlanetScale",
    "Pandas",
    "SQL",
    "Web Scrapping"
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
      ],
      description: "A software platform for laboratories and patients",
      logo: null,
      link: {
        label: "LabUX",
        href: "/",
      },
    },
    {
      title: "Alamilla.dev",
      techStack: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwindcss",
      ],
      description: "My personal website and blog. Built with Next.js",
      logo: null,
      link: {
        label: "alamilla.dev",
        href: "/",
      },
    },
  ]

};