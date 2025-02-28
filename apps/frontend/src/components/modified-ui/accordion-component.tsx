import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  type AccordionContentProps,
  type AccordionItemProps,
  type AccordionMultipleProps,
  type AccordionSingleProps,
  type AccordionTriggerProps,
} from "@radix-ui/react-accordion";
import { ReactNode } from "react";

type AccordionRootProps = AccordionSingleProps | AccordionMultipleProps;

type AccordionItems = {
  trigger: ReactNode;
  content: ReactNode;
  itemProps: AccordionItemProps;
  triggerProps?: AccordionTriggerProps;
  contentProps: AccordionContentProps;
};

type AccordionComponentProps = {
  rootProps: AccordionRootProps;
  itemProps: AccordionItemProps;
  triggerProps?: AccordionTriggerProps;
  contentProps: AccordionContentProps;
  items: AccordionItems[];
};

export default function AccordionComponent({
  rootProps,
  itemProps,
  triggerProps,
  contentProps,
  items,
}: AccordionComponentProps) {
  const defaultAccordionProps: AccordionRootProps = {
    type: "single",
    collapsible: true,
    className: "w-full",
  };

  // TODO
  return (
    <Accordion {...defaultAccordionProps} {...rootProps}>
      {items.map((item) => (
        <AccordionItem
          key={item.itemProps?.value}
          {...itemProps}
          {...item.itemProps}
        >
          <AccordionTrigger {...triggerProps} {...item.triggerProps}>
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent {...contentProps} {...item.contentProps}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
