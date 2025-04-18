"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ChevronDownIcon } from "lucide-react";

interface ScheduleMeetingButtonProps {
  onClick: () => void;
}

export function ScheduleMeetingButton({ onClick }: ScheduleMeetingButtonProps) {
  return (
    <div className="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
      <Button
        variant="outline"
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        onClick={onClick}
      >
        <Calendar className="opacity-60" size={16} aria-hidden="true" />
        Schedule
        {/* <span className="border-primary-foreground/30 text-primary-foreground/60 ms-1 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
          18
        </span> */}
      </Button>
      <Button
        variant="outline"
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        size="icon"
        aria-label="Options"
      >
        <ChevronDownIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}
