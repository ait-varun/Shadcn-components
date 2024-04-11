"use client";
import { Input } from "@/components/ui/input";
import { Search, BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface Country {
  name: string;
  continent: string;
}

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const countries: Country[] = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleCountryClick = (countryName: string) => {
    setSearchInput(countryName);
    setFilteredCountries([]); // Clear the filtered countries list
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-blue-400 text-white">
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
            value={searchInput}
            onChange={handleChange}
            className="px-10 py-2 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {filteredCountries.length > 0 && (
            <ul className="absolute z-10 w-full bg-white text-black shadow-lg rounded-md mt-2">
              {filteredCountries.map((country, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {country.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Avatar */}
        <div className="flex items-center">
          <BellIcon className="h-5 w-5 mr-8" />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
