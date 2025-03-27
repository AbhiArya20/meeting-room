import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyH1({ children, className }: ITypography) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
