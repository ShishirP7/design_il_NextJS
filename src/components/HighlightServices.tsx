import Link from "next/link";
import Image from "next/image";

export function HighlightServices() {
  return (
    <section className="section">
      <div className="container-section grid items-start gap-10 md:grid-cols-2">
        {/* LEFT: Copy */}
        <div>
          <h3 className="text-2xl font-extrabold text-slate-800">
            Highlighting key services<br />and expertise
          </h3>

          <p className="mt-4 max-w-md text-sm text-slate-600 text-justify">
            We believe in the essence of a “lab” – places to play and take risks and
            experiment. We provide workshops on-site as well as team coaching for innovation
            projects. We also develop community workshops that introduce design thinking
            principles to organizational leaders and then provide coaching beyond the workshops.
          </p>

          <div className="mt-6">
            <Link href="#" className="btn btn-outline-dark">GET STARTED</Link>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative">
          <div className="absolute -left-6 top-10 h-36 w-16 rounded bg-[#0c693c] hatch" />
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1770"
              alt="Team collaborating with sticky notes and sketches"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
