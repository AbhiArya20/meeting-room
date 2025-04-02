import { AtSignIcon } from "@/components/icons/at-sign";
import { CalendarCogIcon } from "@/components/icons/calendar-cog";
import { FileChartLineIcon } from "@/components/icons/file-chart-line";
import { GalleryThumbnailsIcon } from "@/components/icons/gallery-thumbnails";
import { MessageSquareIcon } from "@/components/icons/message-square";
import { VideoIcon } from "@/components/icons/video";
import { APPS } from "./apps";
import { CircleHelpIcon } from "@/components/icons/circle-help";
import { GithubIcon } from "@/components/icons/github";
import { AppMenuType, SupportMenuType } from "@/project/_types/sidebar-types";
import {
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

export const LOCAL_STORAGE_KEY = {
  SIDEBAR_STATE: "sidebar_state",
};

export const APP_MENUS: AppMenuType[] = [
  {
    title: "Mail",
    name: "Mail",
    logo: (
      <AtSignIcon size={20} className="duration-500 hover:bg-lime-600/30" />
    ),
    className: "bg-lime-600/20 text-lime-600",
    highlight: "bg-lime-600/40",
    href: "/mail",
    app: APPS.MAIL,
  },
  {
    title: "Chat",
    name: "Chat",
    logo: (
      <MessageSquareIcon
        size={20}
        className="duration-500 hover:bg-orange-600/30"
      />
    ),
    className: "bg-orange-600/20 text-orange-600",
    highlight: "bg-orange-600/40",
    href: "/chat",
    app: APPS.CHAT,
  },
  {
    title: "Meet",
    name: "Meeting",
    logo: <VideoIcon size={20} className="duration-500 hover:bg-rose-600/30" />,
    className: "bg-rose-600/20 text-rose-600",
    highlight: "bg-rose-600/40",
    href: "/meet",
    app: APPS.MEET,
  },
  {
    title: "Board",
    name: "Whiteboard",
    logo: (
      <GalleryThumbnailsIcon
        size={20}
        className="duration-500 hover:bg-purple-600/30"
      />
    ),
    className: "bg-purple-600/20 text-purple-600",
    highlight: "bg-purple-600/40",
    href: "/whiteboard",
    app: APPS.BOARD,
  },
  {
    title: "Docs",
    name: "Docs",
    logo: (
      <FileChartLineIcon
        size={20}
        className="duration-500 hover:bg-blue-600/30"
      />
    ),
    className: "bg-blue-600/20 text-blue-600",
    highlight: "bg-blue-600/40",
    href: "/docs",
    app: APPS.DOCS,
  },
  {
    title: "Cal",
    name: "Calendar",
    logo: (
      <CalendarCogIcon
        size={20}
        className="duration-500 hover:bg-teal-600/30"
      />
    ),
    className: "bg-teal-600/20 text-teal-600",
    highlight: "bg-teal-600/40",
    href: "/calendar",
    app: APPS.CAL,
  },
];

export const SUPPORT_MENUS: SupportMenuType[] = [
  {
    title: "Support",
    href: "/support",
    icon: <CircleHelpIcon size={20} />,
  },
  {
    title: "Github",
    href: "https://github.com/AbhiArya20/meeting-room",
    icon: <GithubIcon size={20} />,
  },
];

export const MEET_SIDEBAR_MENUS = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: ListIcon,
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChartIcon,
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderIcon,
    },
    {
      title: "Team",
      url: "#",
      icon: UsersIcon,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      name: "Reports",
      url: "#",
      icon: ClipboardListIcon,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: FileIcon,
    },
  ],
};
