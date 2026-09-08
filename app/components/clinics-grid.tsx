import Image from "next/image";

const clinics = [
  { name: "Inova Emergency Care", location: "Reston, Virginia 20190", image: "/first.png" },
  { name: "John Hopkins Hospital", location: "Baltimore 21287 Maryland", image: "/2nd.png" },
  { name: "MD Anderson Cancer Center", location: "Houston 77030 Texas", image: "/3rd.png" },
  { name: "Metropolitan Hospital Center", location: "New York NY 10029", image: "/4th.png" },
  { name: "Mayo Clinic", location: "Rochester, Minnesota", image: "/5th.png" },
  { name: "Chinook Regional Hospital", location: "Alberta, Canada", image: "/6th.png" },
  { name: "City Medical Clinic", location: "Downtown District", image: "/7th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/8th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/9th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/10th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/11th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/12th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/13th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/14th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/15th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/16th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/17th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/18th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/19th.png" },
  { name: "Coastal Health Center", location: "Seaside, California", image: "/20th.png" },


];

export default function ClinicsGrid() {
  return (
    <section className="w-full px-4 sm:px-6 xl:px-12 py-10 xl:py-16">
      <div className="max-w-358 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {clinics.map((clinic) => (
          <div key={clinic.name} className="flex flex-col gap-3">
            <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden bg-gray-100">
              <Image src={clinic.image} alt={clinic.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-semibold text-base text-[#25272C]">{clinic.name}</h3>
              <p className="text-gray-500 text-sm">{clinic.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}