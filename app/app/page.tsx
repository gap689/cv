import { RESUME_DATA } from "@/data/resume-data";

import Heading from "./_components/heading";
import About from "./_components/about";
import Education from "./_components/education";
import Skills from "./_components/skills";
import Work from "./_components/work";
import Projects from "./_components/projects";

const AppPage = () => {

return (
  <main className="relative mx-auto scroll-my-12 p-4 print:p-12 md:p-16">
    <div className="mx-auto w-full max-w-2xl 2xl:max-w-4xl space-y-8 print:space-y-6">
      <Heading
        name={RESUME_DATA.name}
        about={RESUME_DATA.about}
        location={RESUME_DATA.location}
        locationLink={RESUME_DATA.locationLink}
        contact={RESUME_DATA.contact}
        initials={RESUME_DATA.initials}
        avatarUrl={RESUME_DATA.avatarUrl}
      />
      <About
        summary={RESUME_DATA.summary}
      />
      <Work
        work={RESUME_DATA.work}
        />
      <Education 
        education={RESUME_DATA.education}
      />
      <Skills
        skills={RESUME_DATA.skills} 
      />
      <Projects 
        projects={RESUME_DATA.projects}
      />
    </div>
    </main>
    );
}
 
export default AppPage;