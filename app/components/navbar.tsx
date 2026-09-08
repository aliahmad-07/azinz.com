"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Clinics", href: "/clinics" },
  { label: "Practitioners", href: "/practitioners" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 xl:px-12 py-4 xl:py-9 border-b border-gray-100 relative">
      <div>
        <Image src="/azina-logo.png" alt="Azina Health" width={100} height={50} className="h-7 xl:h-8 w-auto" />
      </div>
      <div className="hidden xl:flex items-center gap-6 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "text-brand-blue font-medium" : "text-gray-700"}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="hidden xl:flex items-center gap-4">
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
        className="xl:hidden"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
      </button>

      {open && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-md flex flex-col gap-4 p-6 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "text-brand-blue font-medium text-sm" : "text-gray-700 text-sm"}
            >
              {link.label}
            </Link>
          ))}

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