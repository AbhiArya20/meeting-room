"use client";
import LeftSidebar from "@/project/_components/project-sidebar/left-sidebar/left-sidebar";
import RightSidebar from "@/project/_components/project-sidebar/right-sidebar/right-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import ProjectNavbar from "@/project/_components/project-sidebar/project-navbar/project-navbar";

type ProjectSidebarProps = {
  children: React.ReactNode;
};

const sidebarProviderStyle = {
  "--sidebar-width-icon": "4rem",
} as React.CSSProperties;

export default function ProjectSidebar({ children }: ProjectSidebarProps) {
  return (
    <SidebarProvider style={sidebarProviderStyle}>
      <LeftSidebar />
      <SidebarInset className="bg-sidebar">
        <ProjectNavbar />
        {children}
      </SidebarInset>
      <RightSidebar />
    </SidebarProvider>
  );
}
