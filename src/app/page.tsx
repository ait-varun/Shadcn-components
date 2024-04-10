import AccordionTab from "@/components/AccordionTab";
import Image from "next/image";
import { accordianList } from "@/types/type";
import SlideUpDrawer from "@/components/SlideUp-drawer";

export const accordianListItems: accordianList[] = [
  {
    id: "1",
    value: "item-1",
    title: "Is it accessible?",
    content:
      "Yes. It adheres to the WAI-ARIA design pattern. It is a set of rules that define how a user interface can be used and how it can be navigated. These rules are based on the Web Content Accessibility Guidelines (WCAG) and the Web Content Accessibility Guidelines (WCAG) 2.1.",
  },
  {
    id: "2",
    value: "item-2",
    title: "Are there any accessibility issues?",
    content: "Can I use it?",
  },
  {
    id: "3",
    value: "item-3",
    title: "How can I use it?",
    content: "what is it",
  },
];

export default function Home() {
  return (
    <>
      <AccordionTab accordianList={accordianListItems} />
    </>
  );
}
