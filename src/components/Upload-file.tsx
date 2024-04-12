"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UploadFile() {
  return (
    <div className="grid w-full lg:max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Logo</Label>
      <Input
        id="picture"
        type="file"
        className="file:bg-[#177BE5] file:text-white file:border-solid file:border-blue-700 file:rounded-md border-blue-600"
      />
    </div>
  );
}
