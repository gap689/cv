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
import { Briefcase, ChevronsDownUp, Cloud, CreditCard, Github, LifeBuoy, LogOut, MessageSquare, Settings, User } from "lucide-react";
import Image from "next/image";

interface ProfileDropdownProps {
  isCollapsed: Boolean;
}

const ProfileDropdown = ({isCollapsed}: ProfileDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn(isCollapsed ? "p-0" :"p-2 w-full")}>
          <div className="flex w-full items-center">
            <div className="shrink-0">
              <Image
                src="/images/dr.jpeg"
                alt="Profile image"
                width={40}
                height={40}
                loading="lazy"
                className="rounded-full w-9 h-9"
              />
            </div>
            <div className={cn(isCollapsed ? "hidden" : "flex flex-col w-full pl-2 min-w-4")}>
              <p className="font-semibold tracking-tight text-start truncate">German Alamilla</p>
              <p className="text-gray-600 dark:text-gray-400 text-start text-sm mr-2 truncate">Software Engineer</p>
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
          <Link href="/app/contact" className="flex items-center">
            <DropdownMenuItem>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Let's work together</span>
              <DropdownMenuShortcut>⇧⌘H</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Link href="/app/donate" className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Donate</span>
            </Link>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    
     );
}
 
export default ProfileDropdown;