import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyH3({ children, className }: ITypography) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}
