import Link from "next/link";

export function IntroBand(){
  return (
    <section className="section section-muted">
      <div className="container-section grid items-center gap-8 md:grid-cols-[1.5fr,0.5fr]">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">As the leading experts in this field, we&apos;re in over 90 countries</h2>
          <p className="mt-4 max-w-lg text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div className="flex justify-end">
          <Link href="#" className="btn btn-outline-dark">ABOUT US</Link>
        </div>
      </div>
    </section>
  );
}
