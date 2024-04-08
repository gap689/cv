import {
    BarChart3,
    BookMarked, 
    Briefcase, 
    Compass, 
    Layout, 
    List } 
    from "lucide-react"

import { FaVials } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";

export const ROUTES = [
    {
      icon: RiHomeLine,
      title: "Home",
      href:"/app",
      label: "",
    },
      {
          icon: Layout,
          title: "Dashboard",
          href: "/app/dashboard",
      label:"4",
      },
    {
      icon: List,
      title: "Data",
      href: "/app/table",
      label: "",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      href: "/app/analytics",
      label: "",
    },
    {
      icon: FaVials,
      title: "Experiments",
      href: "/app/experiments",
      label: "",
    },
    // {
    //   icon: FiActivity,
    //   title: "Activity",
    //   href: "/app/activity",
    //   label: "",
    // },
    {
      icon: BookMarked,
      title: "Reading List",
      href: "/app/reading",
      label: "8",
    }
  ];
  
export const CONTACTROUTES = [
    {
      icon: Briefcase,
      title: "Contact",
      href:"/app/contact",
      label: "",
    },
  ]