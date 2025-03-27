"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface ScheduleMeetingButtonProps {
  onClick: () => void
}

export function ScheduleMeetingButton({ onClick }: ScheduleMeetingButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="h-10 px-4 rounded-full gap-2 border-muted-foreground/20 hover:border-muted-foreground/30 shadow-sm transition-all"
      onClick={onClick}
    >
      <Calendar className="size-4" />
      <span>Schedule</span>
    </Button>
  )
}

