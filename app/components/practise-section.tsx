
import Image from "next/image";

export default function PracticeCTASection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-21 py-10 lg:py-18 pb-16 lg:pb-39">
      <div className="relative h-[420px] sm:h-[560px] lg:h-[720px] w-full max-w-[1432px] mx-auto overflow-hidden rounded-2xl lg:rounded-3xl">

        <Image
          src="/mam.png"
          alt="Doctor smiling while using a tablet"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#ECECEC] via-[#ECECEC]/50 sm:via-[#ECECEC]/40 to-transparent" />

        <div className="absolute left-6 right-6 bottom-8 sm:left-12 sm:right-auto sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 lg:left-[112px] lg:top-[144px] lg:translate-y-0 flex w-auto sm:w-[420px] lg:w-[588px] max-w-[calc(100%-48px)] sm:max-w-[calc(100%-96px)] lg:max-w-[calc(100%-140px)] flex-col gap-5 sm:gap-8 lg:gap-10">
          <h1 className="text-2xl sm:text-4xl lg:text-[64px] font-bold leading-tight text-gray-900">
            Run Your Practice Smarter — Starting Today
          </h1>

          <button className="h-11 sm:h-12 w-fit px-5 rounded-lg bg-brand-blue text-white text-sm font-semibold">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}