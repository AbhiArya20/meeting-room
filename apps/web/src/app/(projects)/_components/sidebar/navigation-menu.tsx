import { cn } from "@/lib/utils";
import { TypographySmall } from "@/components/typography/typography-small";

import { MessageSquareIcon } from "@/components/icons/message-square";
import { VideoIcon } from "@/components/icons/video";
import Link from "next/link";
import { GalleryThumbnailsIcon } from "@/components/icons/gallery-thumbnails";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CalendarCogIcon } from "@/components/icons/calendar-cog";
import { AtSignIcon } from "@/components/icons/at-sign";
import { FileChartLineIcon } from "@/components/icons/file-chart-line";

type NavigationItem = {
  title: string;
  logo: React.ReactNode;
  className: string;
  href: string;
};

type NavigationMenuProps = {
  menu: NavigationItem;
};

export function NavigationMenu({ menu }: NavigationMenuProps) {
  return (
    <Link
      href={menu.href}
      className="flex cursor-pointer flex-col items-center gap-1"
    >
      <div
        className={cn(
          "text-sidebar-foreground flex aspect-square items-center justify-center rounded-lg transition-colors duration-300",
          menu.className,
        )}
      >
        {menu.logo}
      </div>
      <TypographySmall className="text-muted-foreground text-xs">
        {menu.title}
      </TypographySmall>
    </Link>
  );
}

type NavigationMenusProps = {
  navigationMenu: NavigationItem[];
};

export default function NavigationMenus({
  navigationMenu,
}: NavigationMenusProps) {
  return (
    <SidebarGroup className="p-0">
      <SidebarGroupContent className="px-1.5 md:px-0">
        <SidebarMenu className="mt-4 flex flex-col gap-4 overflow-auto">
          {navigationMenu.map((menu, index) => (
            <SidebarMenuItem key={menu.title}>
              <SidebarMenuButton asChild>
                <NavigationMenu key={index} menu={menu} />
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
