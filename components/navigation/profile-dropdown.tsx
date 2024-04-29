"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronsDownUp, Cloud, CreditCard, FileCode2, Github, LifeBuoy, LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import { RESUME_DATA } from "@/data/resume-data";

interface ProfileDropdownProps {
  isCollapsed: Boolean;
}

type Key = "ctrl" | "shift" | "alt" | string;

const ProfileDropdown = ({isCollapsed}: ProfileDropdownProps) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn("w-full", isCollapsed ? "p-0" : "p-2")}>
          <div className="flex w-full items-center justify-center">
            <div className="shrink-0">
              <Image
                src={RESUME_DATA.avatarUrl}
                alt="Profile image"
                width={40}
                height={40}
                loading="lazy"
                className="rounded-full w-9 h-9"
              />
            </div>
            <div className={cn(isCollapsed ? "hidden" : "flex flex-col w-full pl-2 min-w-4")}>
              <p className="font-medium tracking-tight text-start truncate">German Alamilla</p>
              <p className="text-gray-600 dark:text-gray-400 text-start text-xs mr-2 truncate">{RESUME_DATA.title}</p>
            </div>
            <ChevronsDownUp className={cn(isCollapsed? "hidden": "h-4 w-4 shrink-0")}/>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/app">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/app/contact">
            <DropdownMenuItem>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Contact me</span>
              <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/app/template">
            <DropdownMenuItem>
              <FileCode2 className="mr-2 h-4 w-4" />
              <span>Get this template</span>
              <DropdownMenuShortcut>⇧⌘T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <Link href="https://github.com/gap689" target="_blank" >
            <span>GitHub</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
 
export default ProfileDropdown;