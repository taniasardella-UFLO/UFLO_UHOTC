"use client";

import { useState } from "react";
import { Grip } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DynamicButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <div
        className={cn(
          "relative group transition-all duration-300 ease-in-out w-48",
          isOpen ? "h-36" : "h-[54px]"
        )}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Gradient border wrapper matching the provided image: neon green to blue */}
        <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#5AF2A8] via-[#3E4AD6] to-[#2B1B54] p-[1.5px] shadow-lg shadow-teal-500/20">
          {/* Inner dark button */}
          <div className="flex h-full w-full flex-col overflow-hidden rounded-[13px] bg-[#0B0A11] text-white">
            
            <button 
              className="flex h-[51px] shrink-0 w-full items-center justify-between px-5 font-medium transition-colors hover:text-[#5AF2A8]"
              onClick={() => {
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-lg">Inicio &gt;</span>
              <Grip size={22} className="ml-2 opacity-90" />
            </button>
            
            {/* Extended menu options for the 2 requested sections */}
            <div
              className={cn(
                "flex flex-col px-5 pb-3 transition-opacity duration-300",
                isOpen ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"
              )}
            >
              <div className="h-px w-full bg-white/10 mb-2 mt-1" />
              <button 
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left text-sm py-2 text-gray-300 hover:text-white transition-colors"
              >
                Impacto social
              </button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('environmental')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left text-sm py-2 text-gray-300 hover:text-white transition-colors"
              >
                Impacto ambiental
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
