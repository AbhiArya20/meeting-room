"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MeetingHeader } from "@/components/meeting-header"
import { JoinMeeting } from "@/components/join-meeting"
import { UpcomingMeetings } from "@/components/upcoming-meetings"
import { RecentMeetings } from "@/components/recent-meetings"
import { StartMeetingButton } from "@/components/start-meeting-button"
import { ScheduleMeetingButton } from "@/components/schedule-meeting-button"
import { ScheduleMeetingDialog } from "@/components/schedule-meeting-dialog"

export function MeetingDashboard() {
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false)

  return (
    <div className="container mx-auto py-4 md:py-8 space-y-6 max-w-5xl px-4 sm:px-6">
      <MeetingHeader />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-wrap gap-3">
            <StartMeetingButton />
            <ScheduleMeetingButton onClick={() => setIsScheduleDialogOpen(true)} />
          </div>

          <JoinMeeting />

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-6">
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

        <div className="hidden lg:block">
          <div className="sticky top-6 rounded-xl border bg-card/50 backdrop-blur-sm text-card-foreground shadow-sm h-[500px] flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
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
              <p className="text-sm text-muted-foreground">Calendar integration</p>
            </div>
          </div>
        </div>
      </div>

      <ScheduleMeetingDialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen} />
    </div>
  )
}

