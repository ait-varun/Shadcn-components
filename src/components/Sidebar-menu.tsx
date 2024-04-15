"use client";

import { Link } from "next-view-transitions";

export default function SidebarMenu() {
  return (
    <>
      {/* Sidebar */}
      <div className="md:w-40  h-screen z-40  fixed  hidden md:flex bg-gray-800 ">
        <div className="py-4 px-3">
          {/* Main Menu Items */}
          <ul className="space-y-2">
            <li>
              <span className="mr-3">{/* Icon here */}</span>
              <Link
                href="/Dashboard"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md text-sm font-medium">
                Dashboard
              </Link>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-2  rounded-md group">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
              {/* Submenu */}
              <div className="absolute left-full top-0 z-30 w-48 bg-gray-800  opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                <ul className="py-1 space-y-1">
                  <li className="relative group2">
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </a>
                    {/* Nested Submenu */}
                    <div className="absolute left-full top-0 z-30 w-48 bg-gray-800  invisible  group2-hover:visible transition-all">
                      <ul className="py-1 space-y-1">
                        <li>
                          <Link
                            href="/About"
                            className="flex items-center text-white opacity-100 py-2 px-3 rounded-md text-sm font-medium">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="flex items-center text-white opacity-100 py-2 px-3 rounded-md text-sm font-medium">
                            Home
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md">
                            <span className="text-sm font-medium">List 3</span>
                          </a>
                        </li>
                      </ul>
                    </div>
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
    </>
  );
}
