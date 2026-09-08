"use client";
import { useState } from "react";

export default function PricingHeroSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="w-full px-3 sm:px-4 xl:px-6">
      <section className="w-full rounded-t-[32px] xl:rounded-t-[48px] bg-gradient-to-b from-brand-blue via-brand-blue/30 to-white px-4 pt-16 xl:pt-20 pb-32 xl:pb-40 text-center flex flex-col items-center gap-8">
        
        {/* Pricing Plans chip — 154x64px, radius 160px */}
        <span className="inline-flex items-center justify-center w-[154px] h-[64px] bg-white/20 font-normal text-sm leading-none tracking-normal text-[#5B616E] rounded-[160px]">
          Pricing Plans
        </span>

        {/* Heading — 80px, weight 600, line-height 120%, white */}
        <h1 className="font-semibold text-3xl sm:text-4xl xl:text-[80px] leading-[1.2] tracking-normal text-center text-[#FFFFFF] max-w-none mx-auto">
          Simple, transparent pricing.
        </h1>

        
        <p className="font-normal text-base leading-normal tracking-normal text-center text-[#5B616E] max-w-none mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque.
        </p>

        {/* Monthly/Yearly toggle — 179x50px, border #D8DBDF, bg #F7F8F8 */}
        <div className="inline-flex items-center w-[179px] h-[50px] bg-[#F7F8F8] border border-[#D8DBDF] rounded-full p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`flex-1 h-full rounded-full text-sm font-medium transition-colors ${
              billing === "monthly" ? "bg-[#0B1220] text-white" : "text-gray-600"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`flex-1 h-full rounded-full text-sm font-medium transition-colors ${
              billing === "yearly" ? "bg-[#0B1220] text-white" : "text-gray-600"
            }`}
          >
            Yearly
          </button>
        </div>

        <p className="text-[#5B616E] text-sm">14 day free trial.</p>
      </section>
    </div>
  );
}