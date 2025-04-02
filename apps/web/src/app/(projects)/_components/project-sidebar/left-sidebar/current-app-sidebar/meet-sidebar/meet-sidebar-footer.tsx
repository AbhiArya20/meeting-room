import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { MEET_SIDEBAR_MENUS } from "@/project/_constants/sidebar";

export default function MeetSidebarFooter() {
  return (
    <div>
      <NavSecondary className="mt-auto" />
      <NavUser user={MEET_SIDEBAR_MENUS.user} />
    </div>
  );
}
