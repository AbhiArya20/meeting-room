import ProjectSidebar from "@/project/_components/project-sidebar/project-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <ProjectSidebar>{children}</ProjectSidebar>;
}
