export function IndustriesGrid(){
  const items = ["Banking","Capital Market","Real Estate","Leasing","Insurance","Startup","Cryptocurrency"];
  return (
    <section className="section pt-0">
      <div className="container-section">
        <h3 className="text-2xl font-extrabold text-slate-800">Industries</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((name, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="h-10 w-10 rounded-full bg-slate-900/90"></div>
              <div className="mt-10 font-semibold">{name}</div>
              <div className="mt-2 text-sm text-emerald-900 font-semibold">LEARN MORE →</div>
              <div className="mt-6 h-[3px] w-full bg-[#0c693c]"></div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-right text-sm font-semibold text-slate-700">TALK MORE FOR INFO →</div>
      </div>
    </section>
  );
}
