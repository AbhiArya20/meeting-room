import useApp from "@/project/_hooks/use-app";
import { cn } from "@/lib/utils";
import { AppIcon } from "@/project/_components/project-sidebar/left-sidebar/app-icon/app-icon";
import { TypographyLarge } from "@/components/typography/typography-large";

export default function CurrentAppIcon({ className }: { className?: string }) {
  const { app } = useApp();
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <AppIcon
        className={cn("transition-none", app?.className)}
        logo={app?.logo}
      />
      <TypographyLarge className="-mt-[2px] flex h-full w-full items-center text-2xl leading-5 text-gray-600 dark:text-white/60">
        {app?.name}
      </TypographyLarge>
    </div>
  );
}
