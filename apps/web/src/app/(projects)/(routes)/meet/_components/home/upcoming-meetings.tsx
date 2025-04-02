import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Video, Mic } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Update the mock data to include organizers
const upcomingMeetings = [
  {
    id: 1,
    title: "Weekly Team Sync",
    date: "Today",
    time: "2:00 PM - 3:00 PM",
    host: "Alex Johnson",
    hostAvatar: "/placeholder.svg?height=32&width=32",
    participants: 8,
    organizers: [
      { name: "Taylor Swift", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "John Doe", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Sarah Parker", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    isVideoOnly: false,
    isAudioOnly: false,
  },
  {
    id: 2,
    title: "Project Review",
    date: "Tomorrow",
    time: "10:00 AM - 11:30 AM",
    host: "Sarah Williams",
    hostAvatar: "/placeholder.svg?height=32&width=32",
    participants: 5,
    organizers: [
      { name: "Mike Johnson", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Emma Davis", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    isVideoOnly: true,
    isAudioOnly: false,
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "Mar 18, 2025",
    time: "1:00 PM - 2:00 PM",
    host: "Michael Chen",
    hostAvatar: "/placeholder.svg?height=32&width=32",
    participants: 12,
    organizers: [
      { name: "Lisa Wong", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "David Kim", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Robert Lee", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Jessica Park", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    isVideoOnly: false,
    isAudioOnly: false,
  },
  {
    id: 4,
    title: "Quick Standup",
    date: "Mar 19, 2025",
    time: "9:30 AM - 9:45 AM",
    host: "You",
    hostAvatar: "/placeholder.svg?height=32&width=32",
    participants: 4,
    organizers: [
      { name: "Alex Thompson", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Maria Garcia", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    isVideoOnly: false,
    isAudioOnly: true,
  },
];

// Update the component to include host avatar and organizers
export function UpcomingMeetings() {
  return (
    <div className="space-y-3">
      {upcomingMeetings.map((meeting) => (
        <Card
          key={meeting.id}
          className="overflow-hidden border-none shadow-sm transition-all hover:shadow"
        >
          <CardContent className="p-0">
            <div className="flex flex-row">
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-medium">{meeting.title}</h3>
                    <div className="text-muted-foreground mt-1.5 flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        <span className="text-xs">{meeting.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span className="text-xs">{meeting.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-1">
                      {meeting.isVideoOnly && (
                        <Badge
                          variant="outline"
                          className="border-primary/20 bg-primary/5 text-primary flex h-5 items-center gap-1 px-1.5 text-xs"
                        >
                          <Video className="size-2.5" />
                          <span>Video</span>
                        </Badge>
                      )}
                      {meeting.isAudioOnly && (
                        <Badge
                          variant="outline"
                          className="border-primary/20 bg-primary/5 text-primary flex h-5 items-center gap-1 px-1.5 text-xs"
                        >
                          <Mic className="size-2.5" />
                          <span>Audio</span>
                        </Badge>
                      )}
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1">
                      <Users className="size-3" />
                      <span className="text-xs">{meeting.participants}</span>
                    </div>
                  </div>
                </div>

                {/* Host and organizers section */}
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-6">
                      <AvatarImage
                        src={meeting.hostAvatar}
                        alt={meeting.host}
                      />
                      <AvatarFallback>{meeting.host.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium">{meeting.host}</span>
                    <span className="text-muted-foreground text-xs">Host</span>
                  </div>

                  {meeting.organizers.length > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {meeting.organizers
                          .slice(0, 3)
                          .map((organizer, index) => (
                            <Avatar
                              key={index}
                              className="border-background size-5 border-2"
                            >
                              <AvatarImage
                                src={organizer.avatar}
                                alt={organizer.name}
                              />
                              <AvatarFallback>
                                {organizer.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                        {meeting.organizers.length > 3 && (
                          <div className="bg-muted border-background flex size-5 items-center justify-center rounded-full border-2 text-[10px] font-medium">
                            +{meeting.organizers.length - 3}
                          </div>
                        )}
                      </div>
                      <span className="text-muted-foreground text-xs">
                        Organizers
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-3 flex gap-2">
                  <Button size="sm" className="h-8 px-3 text-xs">
                    Join now
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 px-3 text-xs"
                  >
                    Details
                  </Button>
                </div>
              </div>

              <div className="bg-muted/20 flex w-16 items-center justify-center">
                <div className="text-muted-foreground text-lg font-medium">
                  {meeting.date === "Today"
                    ? "Today"
                    : meeting.date === "Tomorrow"
                      ? "Tmrw"
                      : meeting.date.split(",")[0]}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
