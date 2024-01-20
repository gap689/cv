import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
  
type SkillsProps = {
  skills: string[];
}
export default function Skills({skills}: SkillsProps) {
  return (
    <section>
      <h2 className="text-xl font-bold">
        Skills
      </h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => {
          return <Badge className="rounded-sm" key={skill}>{skill}</Badge>;
        })}
      </div>
    </section>
  )
}
