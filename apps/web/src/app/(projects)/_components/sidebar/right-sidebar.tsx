import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import React from "react";
import NavigationMenus from "./navigation-menu";
import { SupportMenus } from "./support-menus";
import { NavUser } from "./nav-user";

const user = {
  name: "Abhishek",
  email: "aky8507049610@gmail.com",
  avatar: "/avatars/shadcn.jpg",
};

export default function RightSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh !w-[calc(var(--sidebar-width-icon)_+_1px)] lg:flex"
      side="right"
      style={
        {
          "--sidebar-width-icon": "3rem",
        } as React.CSSProperties
      }
    >
      <SidebarHeader>
        <NavUser user={user} />
      </SidebarHeader>
      <SidebarContent>{/* <NavigationMenus /> */}</SidebarContent>
      <SidebarFooter>
        <SupportMenus />
      </SidebarFooter>
    </Sidebar>
  );
}
