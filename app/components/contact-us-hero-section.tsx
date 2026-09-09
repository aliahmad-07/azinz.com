
export default function HeroSection() {
  return (
    <div className="w-full px-3 sm:px-4 xl:px-6">
      <section className="w-full rounded-t-[32px] xl:rounded-t-[48px] bg-gradient-to-b from-brand-blue to-white px-4 py-20 xl:py-28 text-center">
        <h1 className="font-semibold text-3xl sm:text-4xl xl:text-[80px] leading-[1.20] text-white ">
          Contact Us
        </h1>
        <form className=" mt-10 flex flex-col gap-5 max-w-[1069px] mx-auto">
          <div className="flex flex-col sm:flex-col gap-4 xl:flex-row items-center">
            <input
              type="text"
              placeholder="Name"
              className=" flex-1 h-12 px-4 py-3 rounded-lg border border-[#EDEEF1] bg-white text-sm outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 h-12 px-4 py-3 rounded-lg border border-[#EDEEF1] bg-white text-sm outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 h-12 px-4 py-3 rounded-lg border border-[#EDEEF1] bg-white text-sm outline-none"
            />
          </div>
          <textarea
            placeholder="Description"
            className="h-[160px] px-4 py-5 rounded-[20px] border border-[#EDEEF1] bg-white text-sm outline-none resize-none"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="h-12 px-6 rounded-lg bg-brand-blue text-white text-sm font-medium mt-3"
            >
              Submit Request
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
