import Image from "next/image";

const practitioners = [
  { name: "Practitioner Name", expert: "Expertise", image: "/doc2.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc3.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc4.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc5.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc6.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc4.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc2.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc7.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc2.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc5.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc7.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc2.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc6.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc2.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc5.png" },
  { name: "Practitioner Name", expert: "Expertise", image: "/doc3.png" },
];

export default function PractitionersGrid() {
  return (
    <section className="w-full px-4 sm:px-6 xl:px-12 py-10 xl:py-16">
      <div className="max-w-358 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {practitioners.map((doctor, i) => (
          <div key={`${doctor.name}-${i}`} className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden bg-gray-100">
            <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="font-semibold text-base text-white">{doctor.name}</h3>
              <p className="text-white/80 text-sm">{doctor.expert}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}