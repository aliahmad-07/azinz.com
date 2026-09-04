import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full px-8">
      <div className="max-w-384 mx-auto rounded-[40px] bg-linear-to-b from-brand-blue to-brand-blue/0 overflow-hidden">
        <div className="max-w-297.25 mx-auto flex flex-col items-center text-center gap-8 pt-24 pb-16 px-4">
          <h1 className="text-white font-semibold text-[80px] leading-[1.2]">
            The Smart Way to Manage Healthcare Services
          </h1>
          <p className="text-white text-base max-w-187.5">
            All-in-one platform for healthcare practitioners to manage bookings, prescriptions, and patient records — securely, simply, and efficiently.
          </p>
          <button className="h-12 px-5 rounded-lg bg-[#E7F7FD] text-brand-navy text-sm font-medium">
            Free Trial
          </button>
        </div>

        <div className="relative w-full max-w-350 mx-auto px-4 pb-16">
          <Image
            src="/dashboard-mockups.png"
            alt="Azina Health dashboard preview"
            width={2576}
            height={1090}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}