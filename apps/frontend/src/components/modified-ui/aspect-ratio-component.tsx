import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AspectRationProps = {
  ratio: number;
  className: string;
  children: ReactNode;
};

export default function AspectRatioComponent({
  ratio,
  className,
  children,
}: AspectRationProps) {
  return (
    <AspectRatio ratio={ratio ?? 16 / 9} className={cn("bg-muted", className)}>
      {children}
    </AspectRatio>
  );
}
