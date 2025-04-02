import { ChevronDownIcon, GitForkIcon, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

export default function StartMeetingButton() {
  return (
    <div className="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
      <Button className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10">
        <Video className="opacity-60" size={16} aria-hidden="true" />
        New meeting
        {/* <span className="border-primary-foreground/30 text-primary-foreground/60 ms-1 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
          18
        </span> */}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
            size="icon"
            aria-label="Options"
          >
            <ChevronDownIcon size={16} aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>New meeting</DropdownMenuItem>
            <DropdownMenuItem>Personal meeting</DropdownMenuItem>
          </DropdownMenuGroup>
          {/* 
          <DropdownMenuCheckboxItem
            checked={nextjs}
            onCheckedChange={setNextjs}
          >
            Next.js
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={sveltekit}
            onCheckedChange={setSveltekit}
          >
            SvelteKit
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={remix}
            onCheckedChange={setRemix}
            disabled
          >
            Remix
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={astro} onCheckedChange={setAstro}>
            Astro
          </DropdownMenuCheckboxItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
