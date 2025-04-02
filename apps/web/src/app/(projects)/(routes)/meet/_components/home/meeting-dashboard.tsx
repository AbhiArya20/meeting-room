"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MeetingHeader } from "@/app/(projects)/(routes)/meet/_components/home/meeting-header";
import { JoinMeeting } from "@/app/(projects)/(routes)/meet/_components/home/join-meeting";
import { UpcomingMeetings } from "@/app/(projects)/(routes)/meet/_components/home/upcoming-meetings";
import { RecentMeetings } from "@/app/(projects)/(routes)/meet/_components/home/recent-meetings";
import StartMeetingButton from "@/app/(projects)/(routes)/meet/_components/home/new-meeting-button";
import { ScheduleMeetingButton } from "@/app/(projects)/(routes)/meet/_components/home/schedule-meeting-button";
import { ScheduleMeetingDialog } from "@/app/(projects)/(routes)/meet/_components/home/schedule-meeting-dialog";

export function MeetingDashboard() {
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);

  return (
    <div className="mx-auto h-full space-y-6 px-4 py-4 sm:px-6 md:py-8">
      <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-6">
        <div className="h-full space-y-6 overflow-y-auto lg:col-span-4">
          <div className="flex flex-wrap justify-end gap-3">
            <StartMeetingButton />
            <ScheduleMeetingButton
              onClick={() => setIsScheduleDialogOpen(true)}
            />
          </div>
          <JoinMeeting />

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <UpcomingMeetings />
            </TabsContent>
            <TabsContent value="recent">
              <RecentMeetings />
            </TabsContent>
          </Tabs>
        </div>

        <div className="hidden w-full lg:col-span-2 lg:block">
          <div className="bg-card/50 text-card-foreground flex items-center justify-center rounded-xl border shadow-sm backdrop-blur-sm">
            <div className="p-4 text-center">
              <div className="bg-primary/10 text-primary mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <p className="text-muted-foreground text-sm">
                Calendar integration
              </p>
            </div>
          </div>
        </div>
      </div>

      <ScheduleMeetingDialog
        open={isScheduleDialogOpen}
        onOpenChange={setIsScheduleDialogOpen}
      />
    </div>
  );
}
