import { BellIcon } from "@/components/icons/bell";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NotificationButton() {
  const [count, setCount] = useState(3);

  const handleClick = () => {
    setCount(0);
  };

  return (
    <Button
      variant="ghost"
      size={"icon"}
      className="relative cursor-pointer"
      onClick={handleClick}
      aria-label="Notifications"
    >
      <BellIcon className="size-[18px]" />
      {count > 0 && (
        <span
          className="absolute top-2 right-2 size-2 rounded-full bg-red-500"
          aria-hidden="true"
        ></span>
      )}
    </Button>
  );
}
