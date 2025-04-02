import { cn } from "@/lib/utils";

export function AppIcon({
  className,
  logo,
}: {
  className?: string;
  logo: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "text-sidebar-foreground flex aspect-square items-center justify-center rounded-lg transition-colors duration-300",
        className,
      )}
    >
      {logo}
    </div>
  );
}
