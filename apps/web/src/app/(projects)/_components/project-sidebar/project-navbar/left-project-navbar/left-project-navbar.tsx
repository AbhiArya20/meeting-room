import { useSidebar } from "@/components/ui/sidebar";
import CurrentAppIcon from "@/project/_components/current-app-icon/current-app-icon";

export default function LeftProjectNavbar() {
  const { state } = useSidebar();
  return <div>{state === "collapsed" && <CurrentAppIcon />}</div>;
}
