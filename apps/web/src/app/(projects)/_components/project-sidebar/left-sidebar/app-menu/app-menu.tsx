import { AppMenuType } from "@/project/_types/sidebar-types";
import Link from "next/link";
import { AppIcon } from "@/project/_components/project-sidebar/left-sidebar/app-icon/app-icon";
import { TypographySmall } from "@/components/typography/typography-small";

type NavigationMenuProps = {
  menu: AppMenuType;
};

export default function AppMenu({ menu }: NavigationMenuProps) {
  return (
    <Link
      href={menu.href}
      className="flex cursor-pointer flex-col items-center gap-1"
    >
      <AppIcon className={menu.className} logo={menu.logo} />
      <TypographySmall className="text-muted-foreground text-xs">
        {menu.title}
      </TypographySmall>
    </Link>
  );
}
