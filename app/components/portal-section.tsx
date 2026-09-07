
import Image from "next/image";

export default function PortalsSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-21 py-10 lg:py-18">
      <div className="max-w-358 mx-auto flex flex-col items-center text-center gap-6 lg:gap-8">
        <span className="text-lg lg:text-xl font-semibold text-brand-blue">
          Our portals
        </span>
        <h2 className="w-full max-w-[1189px] font-semibold text-3xl sm:text-4xl lg:text-[64px] leading-[1.15] lg:leading-[1.1] text-center text-brand-navy">
          Stay one step ahead with our web portals & get advance features.
        </h2>
      </div>

      <div className="max-w-358 mx-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-5 mt-10 lg:mt-16">
        
        <div className="w-full lg:w-176.5 h-auto lg:h-135.25 rounded-3xl lg:rounded-4xl bg-[#E7F7FD] p-6 sm:p-8 flex flex-col gap-4">
          <h3 className="font-semibold text-2xl sm:text-3xl leading-[1.1] text-brand-navy">
            Patient Portal
          </h3>
          <p className="max-w-156.5 text-sm sm:text-base text-gray-600">
            Secure access to your appointments, prescriptions, and health records — all in one place.
          </p>
          <div className="relative h-64 sm:h-80 lg:flex-1 lg:h-auto mt-2">
            <Image
              src="/image-20.png"
              alt="Patient Portal"
              fill
              className="object-contain object-top"
            />
          </div>
        </div>

        <div className="w-full lg:w-176.5 h-auto lg:h-135.25 rounded-3xl lg:rounded-4xl bg-[#E7F7FD] p-6 sm:p-8 flex flex-col gap-4">
          <h3 className="font-semibold text-2xl sm:text-3xl leading-[1.1] text-brand-navy">
            Practitioner / Clinic Portal
          </h3>
          <p className="max-w-156.5 text-sm sm:text-base text-gray-600">
            Manage bookings, prescriptions, and patient care with one simple, secure platform
          </p>
          <div className="relative h-64 sm:h-80 lg:flex-1 lg:h-auto mt-2">
            <Image
              src="/image-20.png"
              alt="Practitioner / Clinic Portal"
              fill
              className="object-contain object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}