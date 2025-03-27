import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SupportMenus } from "./support-menus";
import NavigationMenus from "@/app/(projects)/_components/sidebar/navigation-menu";

export function SidebarApp() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className="mt-2 gap-4">
        <NavigationMenus />
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter className="p-0">
        <SupportMenus />
      </SidebarFooter>
    </Sidebar>
  );
}
