import Image from "next/image";

export function IndustriesGrid() {
  const team = [
    { name: "Stacy Landreth Grau, PhD", role: "Co-Founder", img: "/stacy.webp" },
    { name: "Cedric James, MS", role: "Co-Founder", img: "/images/james.jpg" },
  ];

  return (
    <section className="section pt-0">
      <div className="container-section">
        <h3 className="text-2xl font-extrabold text-slate-800">Our Team</h3>

        {/* Center the two cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {team.map((person, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft text-center">
              <div className="mx-auto h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                  priority={i === 0}
                />
              </div>
              <div className="mt-6 font-semibold">{person.name}</div>
              <div className="mt-1 text-sm text-slate-600">{person.role}</div>
              <div className="mt-4 text-sm font-semibold text-emerald-900">LEARN MORE →</div>
              <div className="mt-6 h-[3px] w-full bg-[#0c693c]" />
            </div>
          ))}
        </div>

        <div className="mt-6 text-right text-sm font-semibold text-slate-700">Click here to contact →</div>
      </div>
    </section>
  );
}
