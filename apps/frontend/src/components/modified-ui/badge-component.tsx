import { Badge } from "@/components/ui/badge";
import { ComponentProps, ReactNode } from "react";

type BadgeComponentProps = {
  children: ReactNode;
  badgeProps: ComponentProps<typeof Badge>;
};

export default function BadgeComponent({
  children,
  badgeProps,
}: BadgeComponentProps) {
  return <Badge {...badgeProps}>{children}</Badge>;
}
