
// import Image from "next/image";

// const features = [
//   {
//     title: "Save Time",
//     description: "Automate bookings, reduce admin, and focus on patients.",
//   },
//   {
//     title: "Improve Care",
//     description: "Access complete patient records instantly.",
//   },
//   {
//     title: "Stay Compliant",
//     description: "Secure, GDPR-ready platform built for healthcare.",
//   },
// ];

// export default function FeatureSection() {
//   return (
//     <section className="w-full px-4 sm:px-6 lg:px-21 py-10 lg:py-18">
//       <div className="max-w-358 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

//         <div className="flex-1 min-w-0 lg:min-w-[320px] flex flex-col gap-6">
//           <h2 className="font-semibold text-3xl sm:text-4xl lg:text-[64px] leading-[1.15] lg:leading-[1.1] text-brand-navy">
//             Everything You Need, in One Secure Platform
//           </h2>
//           <p className="text-base text-gray-600">
//             From managing your day to delivering better care, Azina Health keeps your bookings, patient records, and compliance tools in one streamlined dashboard.
//           </p>

//           <div className="flex flex-col gap-4 mt-2">
//             {features.map((feature) => (
//               <div key={feature.title}>
//                 <h3 className="font-semibold text-base">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//           <button className="w-fit h-12 px-5 rounded-lg bg-brand-blue text-white text-sm font-medium mt-2">
//             Get Started Now
//           </button>
//         </div>

//         <div className="w-full max-w-[726px] aspect-[726/600] lg:h-[600px] relative shrink-0 rounded-2xl lg:rounded-[32px] bg-brand-light-blue overflow-hidden">
//           <Image
//             src="/image-24.png"
//             alt="Azina Health dashboard"
//             fill
//             className="object-contain p-6 sm:p-8 lg:p-10"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }


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
    <section className="w-full px-4 sm:px-6 xl:px-12 py-10 xl:py-18">
      <div className="max-w-358 mx-auto flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-16">

        <div className="flex-1 min-w-0 xl:min-w-[320px] flex flex-col gap-6">
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] leading-[1.15] xl:leading-[1.1] text-brand-navy">
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

        <div className="w-full max-w-[726px] aspect-[726/600] xl:h-[600px] relative shrink-0 rounded-2xl xl:rounded-[32px] bg-brand-light-blue overflow-hidden">
          <Image
            src="/image-24.png"
            alt="Azina Health dashboard"
            fill
            className="object-contain p-6 sm:p-8 lg:p-10"
          />
        </div>

      </div>
    </section>
  );
}