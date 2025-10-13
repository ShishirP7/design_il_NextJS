import Link from "next/link";
import Image from "next/image";

export function ExpertsDomains() {
  // Replace this with your preferred image URL
  const IMAGE_URL =
    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600";

  return (
    <section className="section">
      <div className="container-section grid gap-10 md:grid-cols-[0.9fr,1.1fr]">
        <div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src={IMAGE_URL}
              alt="Expert team collaboration"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
              priority
            />

            {/* <div className="absolute -left-5 -top-5 h-24 w-24 rounded bg-white hatch" /> */}

            <div className="absolute bottom-6 left-6 rounded-lg bg-[#0c693c] p-5 text-white shadow-soft">
              <p className="text-xs uppercase tracking-wide opacity-90">
                Over 300+<br /> Highly<br /> Experienced
              </p>
              <p className="mt-1 text-[10px] opacity-80">EXPERT TEAMS</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            Experts in domains
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Introduction to human-centered design workshops",
              "Design Sprints",
              "Creative teams workshops",
              "Systems mapping workshops",
              "Creative Coaching",
              "Strategic Planning",
            ].map((t, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-emerald-800 text-3xl font-extrabold">
                  {String(i + 1).padStart(2, "0")}.
                </div>
                <div className="font-semibold text-slate-800">{t}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-md text-sm text-slate-600">
            Et malesuada fames ac turpis egestas maecenas pharetra. Placerat duis
            ultricies lacus sed.
          </p>
          <div className="mt-3">
            <Link href="#" className="text-sm font-semibold underline underline-offset-4">
              LEARN SERVICES DETAILS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
