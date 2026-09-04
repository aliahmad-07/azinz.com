import Image from "next/image";

const features = [
  {
    title: "Save Time",
    description: "Automate bookings, reduce admin, and focus on patients.",
  },
  {
    title: "Improve Care",
    description: "Access complete patient records instantly.",
  },
  {
    title: "Stay Compliant",
    description: "Secure, GDPR-ready platform built for healthcare.",
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full px-21 py-21">
      <div className="max-w-358 mx-auto flex items-center justify-between gap-16 flex-wrap lg:flex-nowrap">
       
        <div className=" flex-1 min-w-[320px] flex flex-col gap-6">
          <h2 className="font-semibold text-[64px] leading-[1.1] text-brand-navy">
            Everything You Need, in One Secure Platform
          </h2>
          <p className="text-base text-gray-600">
            From managing your day to delivering better care, Azina Health keeps your bookings, patient records, and compliance tools in one streamlined dashboard.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {features.map((feature) => (
              <div key={feature.title}>
                <h3 className="font-semibold text-base">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          <button className="w-fit h-12 px-5 rounded-lg bg-brand-blue text-white text-sm font-medium mt-2">
            Get Started Now
          </button>
          </div>
          <div className="w-[726px] h-[600px] relative shrink-0 rounded-[32px] bg-brand-light-blue overflow-hidden">
            <Image
            src="/image-24.png"
            alt="Azina Health dashboard"
            width={700}
            height={600}
            className="absolute top-10 left-10 w-[700px] h-[600px] object-contain"
            />
            </div>
            </div>
            </section>
  );
}