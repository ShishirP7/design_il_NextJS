import Link from "next/link";

export function IntroBand() {
  return (
    <section className="section section-muted">
      <div className="container-section grid items-center gap-8 md:grid-cols-[1.5fr,0.5fr]">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            As the leading experts in this field, we&apos;re in over 90 countries
          </h2>
          <p className="mt-4 max-w-lg text-slate-600 text-justify">
            Design Innovation Lab partners with nonprofits, schools, foundations, and social
            enterprises to build innovation capacity. We bring practical mindsets, frameworks,
            and tools that help teams prototype ideas, learn quickly, and create meaningful
            community impact.
          </p>
        </div>
        <div className="flex justify-end">
          <Link href="#" className="btn  text-[#0c693c] hover:text-white hover:border-[#0c693c] hover:bg-[#0c693c]">ABOUT US</Link>
        </div>
      </div>
    </section>
  );
}
