import { usePathname } from "next/navigation";
import { APP_MENUS } from "../_constants/sidebar";

export default function useApp() {
  const pathname = usePathname();

  const app = APP_MENUS.find((item) => pathname.startsWith(item.href));

  return { app };
}
