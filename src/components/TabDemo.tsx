"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardsDataTable } from "./data-table";
import Products from "./Products";

export default function TabDemo() {
  return (
    <>
      <Tabs defaultValue="payment" className="w-full">
        <TabsList>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="password">Products</TabsTrigger>
        </TabsList>
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
