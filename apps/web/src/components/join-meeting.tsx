"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Video, Mic } from "lucide-react"

export function JoinMeeting() {
  const [meetingCode, setMeetingCode] = useState("")
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(true)

  return (
    <Card className="overflow-hidden border-none shadow-sm bg-gradient-to-r from-background to-muted/30">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Enter meeting code or link"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
              className="flex-1 bg-background/80 backdrop-blur-sm border-muted"
            />
            <Button className="sm:w-24 transition-all" disabled={!meetingCode}>
              Join
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Switch id="video-mode" checked={videoEnabled} onCheckedChange={setVideoEnabled} />
              <Label htmlFor="video-mode" className="flex items-center gap-1.5 text-sm">
                <Video className="size-3.5" />
                <span>Video</span>
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="audio-mode" checked={audioEnabled} onCheckedChange={setAudioEnabled} />
              <Label htmlFor="audio-mode" className="flex items-center gap-1.5 text-sm">
                <Mic className="size-3.5" />
                <span>Audio</span>
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

