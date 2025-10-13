import Link from "next/link";
import Image from "next/image";

export function CtaSplit() {
  return (
    <section className="section">
      <div className="container-section grid gap-10 md:grid-cols-2">
        {/* LEFT: keep same block, just render an image inside */}
        <div className="h-80 w-full rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 font-semibold relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1770"
            alt="Team sketching concepts during an innovation workshop"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>

        {/* RIGHT: keep design, just tweak the paragraph text */}
        <div className="rounded-xl bg-[#0c693c] p-10 text-white">
          <h3 className="text-3xl font-extrabold">Ready to find an Experts?</h3>
          <p className="mt-4 text-sm opacity-90">
            Partner with Design Innovation Lab to move from ideas to action. We’ll guide your
            team through practical, human-centered methods—so you can prototype solutions,
            learn quickly, and deliver impact in your community.
          </p>
          <div className="mt-8">
            <Link href="#" className="btn btn-outline-light">TALK WITH EXPERT</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
