import React from "react";

import { MeetingDashboard } from "@/app/(projects)/(routes)/meet/_components/home/meeting-dashboard";
import { NavActions } from "../../_components/project-navbar/right-project-navbar/right-project-navbar";

export default function Meeting() {
  return (
    <main className="bg-background scrollbar-none h-0 min-h-[calc(100svh-theme(spacing.16))] overflow-scroll md:my-2 md:rounded-xl md:shadow">
      <header className="bg-background sticky top-0 z-50 flex shrink-0 items-center gap-2 border-b p-4">
        <div className="flex w-full items-center justify-between gap-2 px-4">
          {/* <div>
            <AppIconWithName className="data-[state=close]:hidden data-[state=open]:flex" />
          </div>
          <NavActions /> */}
        </div>
      </header>
      <div className="from-background to-muted/20 h-full bg-gradient-to-b">
        <MeetingDashboard />
      </div>
    </main>
  );
}
