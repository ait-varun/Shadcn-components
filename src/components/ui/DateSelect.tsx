"use client";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { useState } from "react";

export default function DateSelect() {
  const [date, setDate] = useState<Date>();
  return (
    <>
      <Label htmlFor="name">Due Date</Label>
      <Popover>
        <PopoverTrigger
          asChild
          className="flex justify-between flex-row-reverse">
          <Button
            variant={"outline"}
            className={cn(
              "text-left font-normal",
              !date && "text-muted-foreground"
            )}>
            <CalendarIcon className="ml-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Select due date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
