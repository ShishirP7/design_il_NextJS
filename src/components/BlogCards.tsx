export function BlogCards(){
  const posts = [
    { tag: "INVESTMENT", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { tag: "BUSINESS", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { tag: "FINANCE", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }
  ];
  return (
    <section className="section pt-0">
      <div className="container-section grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <article key={i}>
            <div className="h-48 w-full rounded-lg bg-slate-200"></div>
            <div className="mt-3 text-[10px] font-bold tracking-[0.2em] text-emerald-900">{p.tag}</div>
            <h4 className="mt-1 font-semibold text-slate-800">{p.title}</h4>
            <p className="mt-2 text-sm text-slate-600">Massa ultricies mi quis hendrerit dolor magna. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
