import { Button } from "@/components/ui/button";
import { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  buttonProps: ComponentProps<typeof Button>;
};

export default function ButtonComponent({
  children,
  buttonProps,
}: ButtonProps) {
  return <Button {...buttonProps}>{children}</Button>;
}
