"use client";
import { ReactNode } from "react";

interface OverlayProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Overlay({ show, onClose, children }: OverlayProps) {
  return (
    <>
      {show && (
        <div className="fixed z-50 inset-0 overflow-hidden bg-black/50 ">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="bg-white rounded-lg shadow-lg p-6 w-[80vw] h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}>
              {children}
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-10 flex "
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