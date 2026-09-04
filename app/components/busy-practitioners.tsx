export default function BusyPractitionersSection() {
    return (
        <section className="w-full px-21 py-21">
            <div className="max-w-358 mx-auto flex flex-col gap-11">
                <div className="flex flex-col gap-8">
                    <span className="text-xl font-semibold text-brand-blue">
                        Numerics
                    </span>
                    <h2 className="text-[64px] font-semibold leading-[1.1] text-black">
                        Powerful Tools for Busy Practitioners
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-x-16 gap-y-10">
                    <div className="flex flex-col gap-4 p-6 -m-6 rounded-2xl transition-shadow hover:shadow-lg hover:bg-white">
                        <span className="text-xl font-semibold leading-[1.1] text-black">
                            Unified Dashboard
                        </span>
                        <p className="text-base font-normal leading-normal text-gray-600 ">
                            View your appointments, tasks, and patient alerts in one place.
                        </p>
                    </div>
                     <div className="flex flex-col gap-4 p-6 -m-6 rounded-2xl transition-shadow hover:shadow-lg hover:bg-white">
                        <span className="text-xl font-semibold leading-[1.1] text-black">
                            Quick Booking
                        </span>
                        <p className="text-base font-normal leading-normal text-gray-600 ">
                            Real-time scheduling, drag-and-drop rescheduling, and automated confirmations.
                        </p>
                    </div>
                     <div className="flex flex-col gap-4 p-6 -m-6 rounded-2xl transition-shadow hover:shadow-lg hover:bg-white">
                        <span className="text-xl font-semibold leading-[1.1] text-black">
                            Prescription Management
                        </span>
                        <p className="text-base font-normal leading-normal text-gray-600 ">
                            Issue, track, and repeat prescriptions from within the patient record.
                        </p>
                    </div>
                     <div className="flex flex-col gap-4 p-6 -m-6 rounded-2xl transition-shadow hover:shadow-lg hover:bg-white">
                        <span className="text-xl font-semibold leading-[1.1] text-black">
                            Patient Records
                        </span>
                        <p className="text-base font-normal leading-normal text-gray-600 ">
                        Searchable, secure, and always up to date.
                        </p>
                    </div>
                     <div className="flex flex-col gap-4 p-6 -m-6 rounded-2xl transition-shadow hover:shadow-lg hover:bg-white">
                        <span className="text-xl font-semibold leading-[1.1] text-black">
                            Telehealth Integration
                        </span>
                        <p className="text-base font-normal leading-normal text-gray-600 ">
                            Secure video calls and encrypted messaging.
                        </p>
                    </div>
                     <div className="flex flex-col gap-4 p-6 -m-6 rounded-2xl transition-shadow hover:shadow-lg hover:bg-white">
                        <span className="text-xl font-semibold leading-[1.1] text-black">
                            Reports & Insight
                        </span>
                        <p className="text-base font-normal leading-normal text-gray-600 ">
                            Track clinic performance, trends, and prescribing patterns.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}