"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Video, Mic } from "lucide-react";

interface ScheduleMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ScheduleMeetingDialog({
  open,
  onOpenChange,
}: ScheduleMeetingDialogProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-[500px]">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle>Schedule meeting</DialogTitle>
          <DialogDescription className="text-xs">
            Fill in the details to schedule your meeting
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[70vh] space-y-4 overflow-y-auto px-6 py-2">
          <div className="grid gap-2">
            <Label htmlFor="meeting-title" className="text-xs font-medium">
              Meeting title
            </Label>
            <Input
              id="meeting-title"
              placeholder="Enter meeting title"
              className="h-9"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-xs font-medium">Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="mx-auto rounded-md border p-3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="start-time" className="text-xs font-medium">
                Start time
              </Label>
              <Select defaultValue="09:00">
                <SelectTrigger id="start-time" className="h-9">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="08:00">8:00 AM</SelectItem>
                  <SelectItem value="08:30">8:30 AM</SelectItem>
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                  <SelectItem value="09:30">9:30 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="duration" className="text-xs font-medium">
                Duration
              </Label>
              <Select defaultValue="60">
                <SelectTrigger id="duration" className="h-9">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="90">1.5 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description" className="text-xs font-medium">
              Description (optional)
            </Label>
            <Textarea
              id="description"
              placeholder="Add meeting description or agenda"
              className="h-20 resize-none"
            />
          </div>

          <div className="flex flex-wrap gap-6 pt-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="schedule-video"
                checked={videoEnabled}
                onCheckedChange={setVideoEnabled}
              />
              <Label
                htmlFor="schedule-video"
                className="flex items-center gap-1.5 text-xs"
              >
                <Video className="size-3.5" />
                <span>Video</span>
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="schedule-audio"
                checked={audioEnabled}
                onCheckedChange={setAudioEnabled}
              />
              <Label
                htmlFor="schedule-audio"
                className="flex items-center gap-1.5 text-xs"
              >
                <Mic className="size-3.5" />
                <span>Audio</span>
              </Label>
            </div>
          </div>
        </div>
        <DialogFooter className="bg-muted/10 border-t p-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="h-9 px-3 text-sm"
          >
            Cancel
          </Button>
          <Button type="submit" className="h-9 px-3 text-sm">
            Schedule
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
