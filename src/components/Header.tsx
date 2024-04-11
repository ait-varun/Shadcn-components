"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-cyan-600 text-white">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Search Input */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-10 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Avatar */}
        <div className="relative">
          <img
            src="https://github.com/shadcn.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </>
  );
}
