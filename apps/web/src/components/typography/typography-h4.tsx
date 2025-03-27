import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyH4({ children, className }: ITypography) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {" "}
      {children}
    </h4>
  );
}
