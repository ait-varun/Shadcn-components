"use client";
import { useState, useEffect } from "react";
import Overlay from "@/components/Overlay";
import Products from "@/components/Products";
import { SheetDemo } from "@/components/SheetDemo";
import ProfileForm from "@/components/Profile-form";

export default function Contact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user is logged in from local storage
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // Only show the overlay if the user is not logged in
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);

      // Clean up function to clear the timeout when the component is unmounted
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, []);

  const handleLogin = () => {
    // Set the user's login status in local storage
    localStorage.setItem("isLoggedIn", "true");
    setShow(false);
  };

  return (
    <>
      <main className="md:ml-40">
        <Products />
        <SheetDemo />
        {/* Render the Overlay only if the user is not logged in */}
        {localStorage.getItem("isLoggedIn") !== "true" && (
          <Overlay show={show} onClose={() => setShow(false)}>
            <ProfileForm onClose={() => setShow(false)} onLogin={handleLogin} />
          </Overlay>
        )}
      </main>
    </>
  );
}