import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

export const RESUME_DATA = {
  name: "German Alamilla-Peralta",
  initials: "GAP",
  location: "Mexico",
  locationLink: "https://www.google.com/maps/place/Puebla",
  about:
    "Full Stack Developer focused on building data-centric products",
  summary:
    "As a Full Stack Developer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "german.alamilla@gmail.com",
    tel: "+5222215951539",
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
      badges: ["In person"],
      title: "Software developer",
      start: "Feb 2022",
      end: "Apr 2022",
      description: "Worked with Linux servers, implemented Django models, and webpage development"
    },
    {
      company: "FF",
      link: "",
      badges: ["Remote"],
      title: "Software developer",
      start: "May 2022",
      end: "Oct 2022",
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
    "SQL"
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