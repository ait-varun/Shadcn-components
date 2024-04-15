import { CardsDataTable } from "@/components/data-table";
import TabDemo from "@/components/TabDemo";
import { accordianList } from "@/types/type";

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
    <div className="md:ml-40">
      {/* <Button className="bg-green-700 text-white hover:bg-green-800 rounded-full size-max">
        Add New Member
        <Plus className="h-4 w-4 ml-3" />
      </Button> */}
      {/* <AccordionTab accordianList={accordianListItems} /> */}
      <TabDemo />
    </div>
  );
}
