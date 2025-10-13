import Link from "next/link";

export function ExpertsDomains(){
  return (
    <section className="section">
      <div className="container-section grid gap-10 md:grid-cols-[0.9fr,1.1fr]">
        <div>
          <div className="relative h-80 w-full rounded-lg bg-slate-200">
            <div className="absolute left-[-20px] top-[-20px] h-24 w-24 rounded bg-white hatch"></div>
            <div className="absolute bottom-6 left-6 rounded-lg bg-[#0c693c] p-5 text-white">
              <p className="text-xs uppercase tracking-wide opacity-90">Over 300+<br/>Highly<br/>Experienced</p>
              <p className="mt-1 text-[10px] opacity-80">EXPERT TEAMS</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-semibold">IMAGE HERE</div>
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Experts in domains</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Quality Assurance Consulting",
              "Regulatory Affairs Consulting",
              "Finance Affairs Consulting",
              "Talent Acquisition and Recruiting",
              "Auditing and Gap Assessments"
            ].map((t, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-emerald-800 text-3xl font-extrabold">{String(i+1).padStart(2,'0')}.</div>
                <div className="font-semibold text-slate-800">{t}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-md text-sm text-slate-600">Et malesuada fames ac turpis egestas maecenas pharetra. Placerat duis ultricies lacus sed.</p>
          <div className="mt-3">
            <Link href="#" className="text-sm font-semibold underline underline-offset-4">LEARN SERVICES DETAILS</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
