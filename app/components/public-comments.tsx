import { Star } from "lucide-react";

export default function CommentsSection() {
  return (
    <section className="w-full px-4 sm:px-6 xl:px-12 py-10 xl:py-18">
      <div className="max-w-358 mx-auto flex flex-col xl:flex-row justify-between gap-8 xl:gap-5">

        <div className="w-full xl:w-[464px] shrink-0 flex flex-col gap-4">
          <span className="text-lg lg:text-xl font-semibold text-brand-blue leading-[1.1]">
            What our client says
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-[64px] leading-[1.15] xl:leading-[1.1] text-[#25272C]">
            Trusted by Healthcare Professionals
          </h2>
        </div>

        <div className="w-full xl:w-[948px] grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-6">
          <div className="w-full bg-white rounded-2xl lg:rounded-[24px] p-6 sm:p-10 shadow-[0_4px_56px_0_rgba(1,17,24,0.12)] flex flex-col gap-6 lg:gap-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black text-black" />
              ))}
            </div>
            <p className="text-gray-500 text-base">
              &quot;Azina Health has cut our admin time in half. We can focus more on patient care instead of chasing paperwork.&quot;
            </p>
            <div>
              <p className="font-semibold text-xl">Dr. A. Khan, GP</p>
              <p className="text-gray-500 text-sm">General Physiation</p>
            </div>
          </div>

          <div className="w-full bg-white rounded-2xl lg:rounded-[24px] p-6 sm:p-10 shadow-[0_4px_56px_0_rgba(1,17,24,0.12)] flex flex-col gap-6 lg:gap-10">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black text-black" />
              ))}
            </div>
            <p className="text-gray-600 text-base">
              &quot;Prescription and bookings now take minutes instead of hours. It&apos;s transformed our workflow.&quot;
            </p>
            <div>
              <p className="font-semibold text-xl">Sarah L.</p>
              <p className="text-gray-500 text-sm">Pharmacist</p>
            </div>
          </div>

          <div className="w-full bg-white rounded-2xl lg:rounded-[24px] p-6 sm:p-10 shadow-[0_4px_56px_0_rgba(1,17,24,0.12)] flex flex-col gap-6 lg:gap-10">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black text-black" />
              ))}
            </div>
            <p className="text-gray-600 text-base">
              <p className="text-gray-600 text-base">
                &quot;Azina Health has made it so easy to keep track of my patients, whether they book online or in person. Everything&apos;s synced and organised.&quot;
              </p>
            </p>
            <div>
              <p className="font-semibold text-xl">Dr. Emily Rogers</p>
              <p className="text-gray-500 text-sm">Dermatologist</p>
            </div>
          </div>

          <div className="w-full bg-white rounded-2xl lg:rounded-[24px] p-6 sm:p-10 shadow-[0_4px_56px_0_rgba(1,17,24,0.12)] flex flex-col gap-6 lg:gap-10">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black text-black" />
              ))}
            </div>
            <p className="text-gray-600 text-base">
              &quot;The reporting tools are a game-changer. I can instantly see patient trends and prescription patterns without exporting endless spreadsheets.&quot;
            </p>
            <div>
              <p className="font-semibold text-xl">James Patel</p>
              <p className="text-gray-500 text-sm">Clinic Manager</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}