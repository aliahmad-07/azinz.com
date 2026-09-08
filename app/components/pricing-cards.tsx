const plans = [
  {
    name: "Solo Starter",
    price: "£29.00",
    description: "New solo practitioners",
    features: [
      "1 practitioner account",
      "Up to 100 bookings/month",
      "Online booking system",
      "Basic patient records",
      "Prescription management",
      "Secure messaging",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Solo Pro",
    price: "£59.00",
    description: "Growing solo practicesIncludes all features from Solo – Starter, plus:",
    features: [
      "Unlimited bookings",
      "Patient intake forms",
      "Telehealth video consultations",
      "Advanced patient record search",
      "Automated reminders (SMS + Email)",
      "Basic reporting & analytics",
      "Priority email + chat support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Clinic Team",
    price: "£149.00",
    description: "Clinics up to 5 practitionersIncludes all features from Solo – Pro, plus:",
    features: [
      "Up to 5 practitioner accounts",
      "Shared clinic calendar & resource management",
      "Centralized patient records for all practitioners",
      "Custom service categories",
      "Clinic-level reporting & analytics",
      "Role-based access permissions",
    ],
    cta: "Book Demo",
  },
  {
    name: "Clinic Enterprise",
    price: "£249.00",
    description: "Large clinics & healthcare groupsIncludes all features from Clinic – Team, plus:",
    features: [
      "Unlimited practitioner accounts",
      "Multi-location management",
      "API integration with existing systems",
      "Advanced reporting & analytics dashboards",
      "Dedicated account manager",
      "SLA-backed support & onboarding training",
    ],
    cta: "Book Demo",
  },
];

export default function PricingCards() {
  return (
    <section className="w-full px-4 sm:px-6 xl:px-12 pt-0 pb-10 xl:pb-16 -mt-28 xl:-mt-36">
      <div className="max-w-358 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="w-full xl:w-[343px] xl:min-h-[610px] flex flex-col justify-between rounded-[24px] bg-[#FFFFFF] p-10 shadow-[0_0_24px_4px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-semibold text-xl text-center text-[#25272C]">{plan.name}</h3>
                <div className="text-center mt-4">
                  <span className="font-bold text-3xl text-[#25272C]">{plan.price}</span>
                  <span className="text-gray-500 text-sm">/mo</span>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div className="flex flex-col gap-4">
                <p className="font-normal text-base leading-normal tracking-normal text-[#5B616E]">
                  {plan.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-normal text-base leading-normal tracking-normal text-[#5B616E] flex gap-2"
                    >
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="w-full h-12 rounded-lg bg-brand-blue text-white text-sm font-medium mt-8">
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}