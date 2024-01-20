import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type EducationType = {
  school: string;
  degree: string;
  start: string;
  end: string;
  courses: string[];
  }
  
  type EducationProps = {
      education: EducationType[]
  }
export default function Education({education}: EducationProps) {
  return (
    <section>
      <h2 className="text-xl font-bold">
        Education
      </h2>
      {education.map((education) => {
        return (
          <Card key={education.school} className="border-none mt-3">
            <CardHeader className="px-0 py-2">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="leading-none">
                  {education.school}
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  {education.start} - {education.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0 py-2 text-pretty font-mono text-sm text-muted-foreground">{education.degree}</CardContent>
            <CardContent className="px-0 py-2 ">
              {education.courses.map((item)=>{
                return(
                  <Badge key={item} variant="secondary" className="rounded-sm mr-1 mb-1">
                    {item}
                  </Badge>
                )
              })}
            </CardContent>
          </Card>
        );
      })}
    </section>  )
}
