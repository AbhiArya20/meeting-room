import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyBlockquote({ children, className }: ITypography) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}
