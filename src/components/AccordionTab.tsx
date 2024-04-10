"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordianList } from "@/types/type";
import Link from "next/link";

export default function AccordionTab({
  accordianList,
}: {
  accordianList: accordianList[];
}) {
  return (
    <>
      <Accordion type="multiple" className="w-full">
        {accordianList.map((item) => (
          <AccordionItem key={item.value} value={item.id}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <Link href="/">{item.content}</Link>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
