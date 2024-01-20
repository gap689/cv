import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Globe, LucideIcon, Mail, Phone } from "lucide-react";
import { IconType } from "react-icons";
import { ComponentType } from 'react';
import { Button } from "@/components/ui/button";

type SocialItem = {
    name: string;
    url: string;
    icon: IconType | LucideIcon;
  }

type ContactType = {
email: string;
tel: string;
social: SocialItem[];
}

type HeadingProps = {
    name: string,
    initials: string,
    location:string,
    locationLink: string,
    about: string,
    contact: ContactType,
}

export default function Heading(
    { name, 
    initials, 
    about, 
    location,
    locationLink, 
    contact
    }: HeadingProps
) {
  return (
    <section className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold">
          {name}
        </h1>
        <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
          {about}
        </p>
        
        <div className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
          <a
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href={locationLink}
            target="_blank"
          >
            <Globe className="size-3" />
            {location}
          </a>
        </div>
            
        <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
          {contact.email ? (
            <Button
              className="size-8"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={`mailto:${contact.email}`}>
                <Mail className="size-4" />
              </a>
              </Button>
          ) : null}
          {contact.tel ? (
            <Button
              className="size-8"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={`tel:${contact.tel}`}>
                <Phone className="size-4" />
              </a>
              </Button>
            ) : null}
          {contact.social.map((social) => (
            <Button
              key={social.name}
              className="size-8"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={social.url}>
                <social.icon className="size-4" />
              </a>
            </Button>
            ))}
        </div>
        <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
          {contact.email ? (
            <a href={`mailto:${contact.email}`}>
              <span className="underline">{contact.email}</span>
            </a>
          ) : null}
          {contact.tel ? (
            <a href={`tel:${contact.tel}`}>
              <span className="underline">{contact.tel}</span>
            </a>
          ) : null}
        </div>
      </div>

      <Avatar className="size-28 rounded-lg">
        <AvatarImage alt={name} src={"/images/dr.jpeg"} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
  </section>  )
}
