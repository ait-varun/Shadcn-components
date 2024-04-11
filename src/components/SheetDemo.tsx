"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

import { Textarea } from "@/components/ui/textarea";
import DateSelect from "./ui/DateSelect";

const handleDateSelect = (selectedDate: Date | undefined) => {
  // Handle the selected date here
  console.log("Selected date:", selectedDate);
};

export function SheetDemo() {
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
            <DateSelect onDateSelect={handleDateSelect} />
          </div>
          <div className="grid grid-rows-2 items-center">
            <Label htmlFor="username">Priority</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select the priority level of the task" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">High</SelectItem>
                  <SelectItem value="2">Medium</SelectItem>
                  <SelectItem value="3">Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              className="mt-4"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={() => console.log("Submit")}>
              Submit
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
