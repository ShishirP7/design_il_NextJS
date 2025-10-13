import Link from "next/link";

export function AssistSplit(){
  return (
    <section className="section">
      <div className="container-section grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-center text-3xl font-extrabold text-slate-800 md:text-left">Whether you need<br/>Assistance</h3>
          <div className="mt-10 h-72 w-full rounded-lg bg-slate-200 text-center text-xl font-semibold text-slate-700 md:h-80 flex items-center justify-center">IMAGE HERE</div>
        </div>
        <div className="rounded-xl bg-[#0c693c] p-10 text-white">
          <h3 className="text-3xl font-extrabold">Finpoint is here<br/>to help you</h3>
          <p className="mt-4 text-sm leading-relaxed opacity-90">Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra.</p>
          <div className="mt-8">
            <Link href="#" className="btn btn-outline-light">TALK WITH EXPERT</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 h-12 w-40 rounded-full bg-white text-center font-extrabold shadow-soft flex items-center justify-center">finpoint</div>
      <div className="mt-[-24px] h-10 w-full bg-brand-500"></div>
    </section>
  );
}
