import LeftSidebar from "@/app/(projects)/_components/sidebar/left-sidebar";
import RightSidebar from "@/app/(projects)/_components/sidebar/right-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { NavActions } from "./_components/sidebar/nav-actions";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          // "--sidebar-width": "380px",
          "--sidebar-width-icon": "4rem",
        } as React.CSSProperties
      }
    >
      <LeftSidebar />
      <SidebarInset className="bg-sidebar">
        <div>
          <header className="bg-sidebar sticky top-0 z-50 mt-2 flex shrink-0 items-center gap-2 transition-[width,height] ease-linear">
            <div className="ml-4 flex w-full items-center justify-between gap-2 px-4">
              <NavActions />
              <NavActions />
            </div>
          </header>
          {children}
        </div>
      </SidebarInset>
      <RightSidebar />
    </SidebarProvider>
  );
}
