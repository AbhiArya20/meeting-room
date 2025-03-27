import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DockProps {
  className?: string;
  items: {
    icon: LucideIcon;
    label: string;
    onClick?: () => void;
  }[];
}

interface DockIconButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, onClick, className }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "group relative rounded-lg p-3",
          "hover:bg-secondary transition-colors",
          className,
        )}
      >
        <Icon className="text-foreground h-5 w-5" />
        <span
          className={cn(
            "absolute -top-8 left-1/2 -translate-x-1/2",
            "rounded px-2 py-1 text-xs",
            "bg-popover text-popover-foreground",
            "opacity-0 group-hover:opacity-100",
            "pointer-events-none whitespace-nowrap transition-opacity",
          )}
        >
          {label}
        </span>
      </motion.button>
    );
  },
);
DockIconButton.displayName = "DockIconButton";

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-64 w-full items-center justify-center p-2",
          className,
        )}
      >
        <div className="relative flex h-64 w-full max-w-4xl items-center justify-center rounded-2xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            className={cn(
              "flex items-center gap-1 rounded-2xl p-2",
              "border shadow-lg backdrop-blur-lg",
              "bg-background/90 border-border",
              "transition-shadow duration-300 hover:shadow-xl",
            )}
          >
            {items.map((item) => (
              <DockIconButton key={item.label} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    );
  },
);
Dock.displayName = "Dock";

export { Dock };
