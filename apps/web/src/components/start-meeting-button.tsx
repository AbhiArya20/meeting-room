import { Button } from "@/components/ui/button"
import { Video } from "lucide-react"

export function StartMeetingButton() {
  return (
    <Button size="sm" className="h-10 px-4 rounded-full gap-2 bg-primary/90 hover:bg-primary shadow-sm transition-all">
      <Video className="size-4" />
      <span>Start meeting</span>
    </Button>
  )
}

