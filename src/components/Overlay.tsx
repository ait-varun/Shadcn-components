"use client";
import { useState } from "react";

export default function Overlay({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {show && (
        <div className="fixed z-50 inset-0 overflow-hidden">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="bg-white rounded-lg shadow-lg p-6 w-[80vw] h-[80vh] fixed top-[10vh] left-[10vw]"
              onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl mb-4">Overlay Modal</h2>
              <p className="mb-6">This is an overlay modal.</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={onClose}>
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
