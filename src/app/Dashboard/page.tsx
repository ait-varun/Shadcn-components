"use client";
import Overlay from "@/components/Overlay";
import Products from "@/components/Products";
import { SheetDemo } from "@/components/SheetDemo";
import { useEffect, useState } from "react";

export default function Contact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);

    // Clean up function to clear the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="md:ml-40">
        <Products />
        <SheetDemo />
        <Overlay show={show} onClose={() => setShow(false)} />
      </main>
    </>
  );
}
