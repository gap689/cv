import { LucideIcon } from 'lucide-react';
import React from 'react'
import { IconType } from 'react-icons';
import { ProjectCard } from './project-card';

type LinkType = {
  label: string;
  href: string;
}

type ProjectsType = {
  title: string;
  techStack: string[];
  description: string;
  logo?: IconType | LucideIcon | null;
  link: LinkType;
}

type ProjectProps = {
  projects: ProjectsType[]
}

export default function Projects({projects}: ProjectProps) {
  return (
    <section className="print-force-new-page scroll-mb-16">
      <h2 className="text-xl font-bold">
        Projects
      </h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link.href : undefined}
            />
          );
        })}
      </div>
    </section>  )
}
