"use client";
import { Input } from "@/components/ui/input";
import { Search, BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef, useState, ChangeEvent } from "react";

interface Country {
  name: string;
  continent: string;
}

export default function Header2() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const dropdownRef = useRef<HTMLFormElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFilteredCountries([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <div className="sticky top-0 z-10 px-4 w-full flex py-2 bg-blue-400 text-white ">
        {/* Logo */}
        <div className="text-xl font-bold w-64">Logo</div>

        <div className="flex grow justify-between">
          <div className="relative">
            <form ref={dropdownRef}>
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search ..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] rounded-full bg-white text-black focus:outline-none  focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                value={searchInput}
                onChange={handleChange}
              />
              {filteredCountries.length > 0 && (
                <ul className="absolute z-10 w-full bg-white text-black shadow-lg rounded-md mt-2">
                  {filteredCountries.map((country, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleCountryClick(country.name)}>
                      {country.name}
                    </li>
                  ))}
                </ul>
              )}
            </form>
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
      </div>
    </>
  );
}
