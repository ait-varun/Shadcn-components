"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardsDataTable } from "./data-table";
import Products from "./Products";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function TabDemo() {
  return (
    <>
      <Tabs defaultValue="payment" className="">
        <ScrollArea className="w-full">
          <TabsList>
            <TabsTrigger value="payment" className="w-36">
              Payment
            </TabsTrigger>
            <TabsTrigger value="password" className="w-36">
              {" "}
              Products
            </TabsTrigger>
            <TabsTrigger value="Support" className="w-36">
              Support
            </TabsTrigger>
            <TabsTrigger value="About" className="w-36">
              About
            </TabsTrigger>
            <TabsTrigger value="Contact" className="w-36">
              Contact
            </TabsTrigger>
            <TabsTrigger value="Suppliers" className="w-36">
              Suppliers
            </TabsTrigger>
            <TabsTrigger value="Items" className="w-36">
              Items
            </TabsTrigger>
            <TabsTrigger value="Categories" className="w-36">
              Categories
            </TabsTrigger>
            <TabsTrigger value="Transactions" className="w-36">
              Transactions
            </TabsTrigger>
            <TabsTrigger value="Sales" className="w-36">
              Sales
            </TabsTrigger>
            <TabsTrigger value="Purchases" className="w-36">
              Purchases
            </TabsTrigger>
            <TabsTrigger value="Units" className="w-36">
              Units
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <TabsContent value="payment">
          <CardsDataTable />
        </TabsContent>
        <TabsContent value="password">
          <Products />
        </TabsContent>
      </Tabs>
    </>
  );
}
