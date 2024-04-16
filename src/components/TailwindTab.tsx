"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Products from "./Products";
import ProductTest from "./ProductTest";
import TabDemo from "./TabDemo";

const tabs: { label: string; component: JSX.Element }[] = [
  { label: "Tab 1", component: <Products /> },
  { label: "Tab 2", component: <ProductTest /> },
  { label: "Tab 3", component: <TabDemo /> },
  { label: "Tab 4", component: <Products /> },
  { label: "Tab 5", component: <ProductTest /> },
  { label: "Tab 6", component: <TabDemo /> },
  { label: "Tab 7", component: <Products /> },
  { label: "Tab 8", component: <ProductTest /> },
  { label: "Tab 9", component: <TabDemo /> },
  { label: "Tab 10", component: <Products /> },
  { label: "Tab 11", component: <ProductTest /> },
  { label: "Tab 12", component: <TabDemo /> },
  { label: "Tab 13", component: <Products /> },
  { label: "Tab 14", component: <ProductTest /> },
  { label: "Tab 15", component: <TabDemo /> },
];

export default function TailwindTab() {
  const [visibleTabs, setVisibleTabs] = useState<number>(5);
  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const scrollRight = () => {
    setScrollPosition((prevPosition) => prevPosition + 300);
  };

  const scrollLeft = () => {
    setScrollPosition((prevPosition) => prevPosition - 300);
  };

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <>
      <div className="flex">
        <button
          onClick={scrollLeft}
          className="bg-gray-300 p-2 disabled:opacity-50"
          disabled={scrollPosition === 0}>
          <ChevronLeft size="24" />
        </button>
        <div
          ref={scrollContainer}
          className="flex overflow-x-hidden scroll-smooth">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(tab.label)}
              className={`p-4 focus:outline-none min-w-[200px] flex-shrink-0 ${
                activeTab === tab.label
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="bg-gray-300 p-2 disabled:opacity-50"
          disabled={scrollPosition + visibleTabs * 200 >= tabs.length * 200}>
          <ChevronRight size="24" />
        </button>
      </div>
      <div className="mt-4">
        {/* Render the active tab component */}
        {tabs.find((tab) => tab.label === activeTab)?.component}
      </div>
    </>
  );
}
