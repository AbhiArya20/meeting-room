"use client";

import * as React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import AppSidebar from "@/project/_components/project-sidebar/left-sidebar/app-sidebar/app-sidebar";
import CurrentAppSidebar from "@/project/_components/project-sidebar/left-sidebar/current-app-sidebar/current-app-sidebar";

export default function LeftSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
    >
      <AppSidebar />
      <CurrentAppSidebar />
    </Sidebar>
  );
}
