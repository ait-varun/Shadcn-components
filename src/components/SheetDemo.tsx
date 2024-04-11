"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SheetDemo() {
  const [date, setDate] = useState<Date>();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Task</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-rows-2 items-center">
            <Label htmlFor="name">Task Name</Label>
            <Input
              id="name"
              defaultValue="Enter Task Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-rows-2 items-center">
            <Label htmlFor="username">Assigned To</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Team Member" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">Alex</SelectItem>
                  <SelectItem value="2">Sam</SelectItem>
                  <SelectItem value="3">Jimmy</SelectItem>
                  <SelectItem value="4">John</SelectItem>
                  <SelectItem value="5">Anny</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-rows-2 items-center">
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
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
