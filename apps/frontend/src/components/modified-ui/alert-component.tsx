import { LucideIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ComponentProps, ReactNode } from "react";

type AlertComponentProps = {
  alertProps: ComponentProps<typeof Alert>;
  titleProps: ComponentProps<typeof AlertTitle>;
  descriptionProps: ComponentProps<typeof AlertDescription>;
  icon: LucideIcon;
  title: ReactNode;
  description: ReactNode;
};

export default function AlertComponent({
  alertProps,
  titleProps,
  descriptionProps,
  icon,
  title,
  description,
}: AlertComponentProps) {
  return (
    <Alert {...alertProps}>
      <>{icon}</>
      <AlertTitle {...titleProps}>{title}</AlertTitle>
      <AlertDescription {...descriptionProps}>{description}</AlertDescription>
    </Alert>
  );
}
