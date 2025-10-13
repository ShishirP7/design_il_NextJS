export function LogosCarousel(){
  return (
    <section className="section section-muted">
      <div className="container-section flex items-center justify-between gap-8">
        {["Logoipsum","Logoipsum","Logoipsum","Logoipsum","Logoipsum"].map((l, i) => (
          <div key={i} className="text-slate-500">{l}</div>
        ))}
      </div>
    </section>
  );
}
