import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographySmall({ children, className }: ITypography) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)}>
      {children}
    </small>
  );
}
