import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { MEET_SIDEBAR_MENUS } from "@/project/_constants/sidebar";

export default function MeetSidebarContent() {
  return (
    <div>
      <NavMain items={MEET_SIDEBAR_MENUS.navMain} />
      <NavDocuments items={MEET_SIDEBAR_MENUS.documents} />
    </div>
  );
}
