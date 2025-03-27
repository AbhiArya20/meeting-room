import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { CircleHelpIcon } from "@/components/icons/circle-help";
import { GithubIcon } from "@/components/icons/github";

type SupportMenu = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const supportMenus: SupportMenu[] = [
  {
    title: "Support",
    href: "/support",
    icon: <CircleHelpIcon size={20} />,
  },
  {
    title: "Github",
    href: "https://github.com/AbhiArya20/meeting-room",
    icon: <GithubIcon size={20} />,
  },
];

export function SupportMenus() {
  return (
    <SidebarGroup className="justify-center">
      <SidebarGroupContent>
        <SidebarMenu className="gap-2">
          {supportMenus.map((supportMenu) => (
            <SidebarMenuItem key={supportMenu.title}>
              <SidebarMenuButton asChild tooltip={supportMenu.title}>
                <Link className="flex justify-center" href={supportMenu.href}>
                  {supportMenu.icon}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
