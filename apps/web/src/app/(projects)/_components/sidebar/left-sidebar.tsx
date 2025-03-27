"use client";

import * as React from "react";
import { ArchiveX, File, Inbox, Send, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import NavigationMenus from "./navigation-menu";
import { SupportMenus } from "./support-menus";
import Logo from "@/components/logo/logo";
import { TypographyLarge } from "@/components/typography/typography-large";
import { usePathname } from "next/navigation";
import { capitalize } from "@/lib/utils";
import { AtSignIcon } from "@/components/icons/at-sign";
import { MessageSquareIcon } from "@/components/icons/message-square";
import { VideoIcon } from "@/components/icons/video";
import { GalleryThumbnailsIcon } from "@/components/icons/gallery-thumbnails";
import { FileChartLineIcon } from "@/components/icons/file-chart-line";
import { CalendarCogIcon } from "@/components/icons/calendar-cog";

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Drafts",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "Sent",
      url: "#",
      icon: Send,
      isActive: false,
    },
    {
      title: "Junk",
      url: "#",
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
  ],
  mails: [
    {
      name: "William Smith",
      email: "williamsmith@example.com",
      subject: "Meeting Tomorrow",
      date: "09:34 AM",
      teaser:
        "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    },
    {
      name: "Alice Smith",
      email: "alicesmith@example.com",
      subject: "Re: Project Update",
      date: "Yesterday",
      teaser:
        "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      subject: "Weekend Plans",
      date: "2 days ago",
      teaser:
        "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      subject: "Re: Question about Budget",
      date: "2 days ago",
      teaser:
        "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
    },
    {
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      subject: "Important Announcement",
      date: "1 week ago",
      teaser:
        "Please join us for an all-hands meeting this Friday at 3 PM.\nWe have some exciting news to share about the company's future.",
    },
    {
      name: "Sarah Brown",
      email: "sarahbrown@example.com",
      subject: "Re: Feedback on Proposal",
      date: "1 week ago",
      teaser:
        "Thank you for sending over the proposal. I've reviewed it and have some thoughts.\nCould we schedule a meeting to discuss my feedback in detail?",
    },
    {
      name: "David Lee",
      email: "davidlee@example.com",
      subject: "New Project Idea",
      date: "1 week ago",
      teaser:
        "I've been brainstorming and came up with an interesting project concept.\nDo you have time this week to discuss its potential impact and feasibility?",
    },
    {
      name: "Olivia Wilson",
      email: "oliviawilson@example.com",
      subject: "Vacation Plans",
      date: "1 week ago",
      teaser:
        "Just a heads up that I'll be taking a two-week vacation next month.\nI'll make sure all my projects are up to date before I leave.",
    },
    {
      name: "James Martin",
      email: "jamesmartin@example.com",
      subject: "Re: Conference Registration",
      date: "1 week ago",
      teaser:
        "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
    },
    {
      name: "Sophia White",
      email: "sophiawhite@example.com",
      subject: "Team Dinner",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
  ],
};

export const navigationMenu = [
  {
    title: "Mail",
    logo: (
      <AtSignIcon size={20} className="duration-500 hover:bg-lime-600/30" />
    ),
    className: "bg-lime-600/20 text-lime-600",
    href: "/mail",
  },
  {
    title: "Chat",
    logo: (
      <MessageSquareIcon
        size={20}
        className="duration-500 hover:bg-orange-600/30"
      />
    ),
    className: "bg-orange-600/20 text-orange-600",
    href: "/chat",
  },
  {
    title: "Meet",
    logo: <VideoIcon size={20} className="duration-500 hover:bg-rose-600/30" />,
    className: "bg-rose-600/20 text-rose-600",
    href: "/meet",
  },
  {
    title: "Board",
    logo: (
      <GalleryThumbnailsIcon
        size={20}
        className="duration-500 hover:bg-purple-600/30"
      />
    ),
    className: "bg-purple-600/20 text-purple-600",
    href: "/whiteboard",
  },
  {
    title: "Docs",
    logo: (
      <FileChartLineIcon
        size={20}
        className="duration-500 hover:bg-blue-600/30"
      />
    ),
    className: "bg-blue-600/20 text-blue-600",
    href: "/docs",
  },
  {
    title: "Calendar",
    logo: (
      <CalendarCogIcon
        size={20}
        className="duration-500 hover:bg-teal-600/30"
      />
    ),
    className: "bg-teal-600/20 text-teal-600",
    href: "/calendar",
  },
];

export default function LeftSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
    >
      <AppSidebar />
      <MenuSidebar />
    </Sidebar>
  );
}

function AppSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
    >
      <SidebarHeader>
        <SidebarGroup className="justify-center p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center justify-center">
                <SidebarTrigger className="size-9 cursor-pointer p-2" />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <NavigationMenus navigationMenu={navigationMenu} />
      </SidebarContent>
      <SidebarFooter>
        <SupportMenus />
      </SidebarFooter>
    </Sidebar>
  );
}

function MenuSidebar() {
  const pathname = usePathname();
  const activeItem = navigationMenu.find((item) => item.href === pathname);

  return (
    <Sidebar collapsible="none" className="hidden flex-1 md:flex">
      <SidebarHeader className="p-4">
        <Logo>
          <TypographyLarge className="h-full w-full text-2xl leading-7 text-gray-600 dark:text-white/60">
            {activeItem?.title}
          </TypographyLarge>
        </Logo>
      </SidebarHeader>
      <SidebarContent className="scrollbar scrollbar-w-1 scrollbar-thumb-rounded-full scrollbar-thumb-foreground/5 scrollbar-track-rounded-full scrollbar-track-transparent">
        <SidebarGroup className="px-0">
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function MailSidebarContent() {
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const [mails, setMails] = React.useState(data.mails);
  const { setOpen } = useSidebar();

  return (
    <div className="flex flex-col gap-4 p-4">
      {mails.map((mail) => (
        <a
          href="#"
          key={mail.email}
          className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
        >
          <div className="flex w-full items-center gap-2">
            <span>{mail.name}</span>{" "}
            <span className="ml-auto text-xs">{mail.date}</span>
          </div>
          <span className="font-medium">{mail.subject}</span>
          <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
            {mail.teaser}
          </span>
        </a>
      ))}
    </div>
  );
}
