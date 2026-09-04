// components/PracticeCTASection.tsx
import Image from "next/image";

export default function PracticeCTASection() {
  return (
    <section className="w-full px-21 py-21">
      <div className="relative h-[720px] w-full max-w-[1432px] overflow-hidden rounded-3xl">
        {/* Background image */}
        <Image
          src="/mam.png"
          alt="Doctor smiling while using a tablet"
          fill
          className="object-cover"
          priority
        />

        {/* Optional subtle gradient for text legibility on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ECECEC] via-[#ECECEC]/40 to-transparent" />

        {/* Text + Button content */}
        <div className="absolute left-[112px] top-[144px] flex w-[588px] max-w-[calc(100%-140px)] flex-col gap-10">
          <h1 className="text-[64px] font-bold leading-tight text-gray-900">
            Run Your Practice Smarter — Starting Today
          </h1>

          <button className="h-12 w-fit px-5 rounded-lg bg-brand-blue text-white text-sm font-semibold">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}