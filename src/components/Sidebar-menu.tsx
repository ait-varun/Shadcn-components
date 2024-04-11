"use client";

export default function SidebarMenu() {
  return (
    <>
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 h-dvh">
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </a>
                    {/* Nested Submenu */}
                    <div className="absolute left-full top-0 z-10 w-48 bg-gray-800 rounded-md invisible  group2-hover:visible transition-all">
                      <ul className="py-1 space-y-1">
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-white opacity-100 py-2 px-3 rounded-md">
                            <span className="text-sm font-medium">List 1</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-3 rounded-md">
                            <span className="text-sm font-medium">List 2</span>
                          </a>
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
