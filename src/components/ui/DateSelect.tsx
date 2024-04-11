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

interface DateSelectProps {
  onDateSelect: (date: Date | undefined) => void;
}

export default function DateSelect({ onDateSelect }: DateSelectProps) {
  const [date, setDate] = useState<Date>();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onDateSelect(selectedDate);
  };

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
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
