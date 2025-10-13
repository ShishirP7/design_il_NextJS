import Link from "next/link";

export function CtaSplit(){
  return (
    <section className="section">
      <div className="container-section grid gap-10 md:grid-cols-2">
        <div className="h-80 w-full rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 font-semibold">IMAGE HERE</div>
        <div className="rounded-xl bg-[#0c693c] p-10 text-white">
          <h3 className="text-3xl font-extrabold">Ready to find an Experts?</h3>
          <p className="mt-4 text-sm opacity-90">Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.</p>
          <div className="mt-8">
            <Link href="#" className="btn btn-outline-light">TALK WITH EXPERT</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
