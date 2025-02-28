import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { HTMLAttributes, ReactNode } from "react";
import {
  type AlertDialogActionProps,
  type AlertDialogCancelProps,
  type AlertDialogContentProps,
  type AlertDialogDescriptionProps,
  type AlertDialogProps,
  type AlertDialogTitleProps,
  type AlertDialogTriggerProps,
} from "@radix-ui/react-alert-dialog";

type AlertDialogComponentProps = {
  dialogProps: AlertDialogProps;
  triggerProps: AlertDialogTriggerProps;
  contentProps: AlertDialogContentProps;
  headerProps: HTMLAttributes<HTMLDivElement>;
  titleProps: AlertDialogTitleProps;
  descriptionProps: AlertDialogDescriptionProps;
  cancelProps: AlertDialogCancelProps;
  actionProps: AlertDialogActionProps;

  trigger: ReactNode;
  title: ReactNode;
  description: ReactNode;
  cancel: ReactNode;
  action: ReactNode;
};

export default function AlertDialogComponent({
  dialogProps,
  triggerProps,
  contentProps,
  headerProps,
  titleProps,
  descriptionProps,
  cancelProps,
  actionProps,

  trigger,
  title,
  description,
  cancel,
  action,
}: AlertDialogComponentProps) {
  return (
    <AlertDialog {...dialogProps}>
      <AlertDialogTrigger asChild {...triggerProps}>
        {trigger && <Button variant="outline">Show Dialog</Button>}
      </AlertDialogTrigger>
      <AlertDialogContent {...contentProps}>
        <AlertDialogHeader {...headerProps}>
          <AlertDialogTitle {...titleProps}>{title}</AlertDialogTitle>
          <AlertDialogDescription {...descriptionProps}>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel {...cancelProps}>{cancel}</AlertDialogCancel>
          <AlertDialogAction {...actionProps}>{action}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
