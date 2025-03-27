import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyInlineCode({ children, className }: ITypography) {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
}
