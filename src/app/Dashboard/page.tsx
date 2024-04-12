"use client";
import { useState, useEffect } from "react";
import Overlay from "@/components/Overlay";
import Products from "@/components/Products";
import { SheetDemo } from "@/components/SheetDemo";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add a state for isLoggedIn

  useEffect(() => {
    // Check if the user is logged in (you'll need to implement this logic)
    // const isUserLoggedIn = checkIfUserIsLoggedIn();
    const isUserLoggedIn = true;
    setIsLoggedIn(isUserLoggedIn);

    // Only show the overlay if the user is not logged in
    if (!isUserLoggedIn) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);

      // Clean up function to clear the timeout when the component is unmounted
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <main className="md:ml-40">
        <Products />
        <SheetDemo />
        {/* Render the Overlay only if the user is not logged in */}
        {!isLoggedIn && <Overlay show={show} onClose={() => setShow(false)} />}
      </main>
    </>
  );
}