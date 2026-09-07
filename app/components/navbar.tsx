
"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-21 py-4 lg:py-9 border-b border-gray-100 relative">
      <div>
        <Image src="/azina-logo.png" alt="Azina Health" width={100} height={50} className="h-7 lg:h-8 w-auto" />
      </div>
      <div className="hidden lg:flex items-center gap-8 text-sm">
        <a href="#" className="text-brand-blue font-medium">Home</a>
        <a href="#" className="text-gray-700">Clinics</a>
        <a href="#" className="text-gray-700">Practitioners</a>
        <a href="#" className="text-gray-700">Pricing</a>
        <a href="#" className="text-gray-700">Contact</a>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <button aria-label="search">
          <Search className="h-5 w-5 text-gray-700" />
        </button>
        <button aria-label="cart">
          <ShoppingCart className="h-5 w-5 text-gray-700" />
        </button>
        <button className="h-12 px-5 rounded-lg border border-gray-300 text-sm font-medium">
          Join as Clinic
        </button>
        <button className="h-12 px-5 rounded-lg bg-brand-blue text-white text-sm font-medium">
          Login/Create
        </button>
      </div>
      <button
        className="lg:hidden"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
      </button>
      
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-md flex flex-col gap-4 p-6 z-50">
          <a href="#" className="text-brand-blue font-medium text-sm">Home</a>
          <a href="#" className="text-gray-700 text-sm">Clinics</a>
          <a href="#" className="text-gray-700 text-sm">Practitioners</a>
          <a href="#" className="text-gray-700 text-sm">Pricing</a>
          <a href="#" className="text-gray-700 text-sm">Contact</a>

          <div className="flex items-center gap-4 pt-2">
            <button aria-label="search">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <button aria-label="cart">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <button className="h-12 px-5 rounded-lg border border-gray-300 text-sm font-medium">
            Join as Clinic
          </button>
          <button className="h-12 px-5 rounded-lg bg-brand-blue text-white text-sm font-medium">
            Login/Create
          </button>
        </div>
      )}
    </nav>
  );
}