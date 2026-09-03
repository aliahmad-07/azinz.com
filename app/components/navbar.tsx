import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-21 py-9 border-b border-gray-100">
      {/* Logo */}
      <div className="text-xl font-semibold text-brand-navy">
        <Image src="/azina-logo.png" alt="Azina Health" width={100} height={50}  className="h-8 w-auto"/>
      </div>

      {/* Center links */}
      <div className="flex items-center gap-8 text-sm">
        <a href="#" className="text-brand-blue font-medium">Home</a>
        <a href="#" className="text-gray-700">Clinics</a>
        <a href="#" className="text-gray-700">Practitioners</a>
        <a href="#" className="text-gray-700">Pricing</a>
        <a href="#" className="text-gray-700">Contact</a>
      </div>

    
      <div className="flex items-center gap-4">
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
    </nav>
  );
}