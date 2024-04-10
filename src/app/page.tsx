import AccordionTab from "@/components/AccordionTab";
import Image from "next/image";
import { accordianList } from "@/types/type";
import SlideUpDrawer from "@/components/SlideUp-drawer";

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
    <>
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 h-screen">
        <div className="py-4 px-3">
          {/* Main Menu Items */}
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md">
                <span className="mr-3">{/* Icon here */}</span>
                <span className="text-sm font-medium">Dashboard</span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md group">
                <span className="mr-3">{/* Icon here */}</span>
                <span className="text-sm font-medium">Products</span>
                <span className="ml-auto transition">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
              {/* Submenu */}
              <div className="absolute left-full top-0 z-10 w-48 bg-gray-800 rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                <ul className="py-1 space-y-1">
                  <li className="relative group">
                    <a
                      href="#"
                      className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md relative ">
                      <span className="text-sm font-medium">Product List</span>
                      <span className="ml-auto transition">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                      {/* Nested Submenu */}
                      <div className="absolute left-full top-0 z-10 w-48 bg-gray-800 rounded-md opacity-75 invisible  group-hover:visible group-hover:opacity-100 transition-all">
                        <ul className="py-1 space-y-1">
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md">
                              <span className="text-sm font-medium">
                                List 1
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md">
                              <span className="text-sm font-medium">
                                List 2
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md">
                              <span className="text-sm font-medium">
                                List 3
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md">
                      <span className="text-sm font-medium">Add Product</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Add more menu items as needed  */}
          </ul>
        </div>
      </div>
      <AccordionTab accordianList={accordianListItems} />
    </>
  );
}
