import Link from "next/link";

export function HighlightServices(){
  return (
    <section className="section">
      <div className="container-section grid items-start gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-extrabold text-slate-800">Highlighting key services<br/>and expertise</h3>
          <p className="mt-4 max-w-md text-sm text-slate-600">Sollicitudin aliquam ultrices sagittis orci a scelerisque. Tortor id aliquet lectus proin nibh nisl. Amet mattis vulputate enim nulla aliquet.</p>
          <div className="mt-6">
            <Link href="#" className="btn btn-outline-dark">GET STARTED</Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-10 h-36 w-16 rounded bg-white hatch"></div>
          <div className="h-80 w-full rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 font-semibold">IMAGE HERE</div>
        </div>
      </div>
    </section>
  );
}
