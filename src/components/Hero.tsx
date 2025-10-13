import Link from "next/link";

export function Hero(){
  return (
    <section className="relative bg-brand-500">
      <div className="container-section">
        <div className="py-28 md:py-40">
          <div className="max-w-xl text-white">
            <p className="text-[11px] tracking-[0.2em] opacity-80">WE ARE EXPERTS</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
           Building innovators for  <br/>real-world change
            </h1>
            <p className="mt-5 text-sm leading-relaxed opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-8">
              <Link href="#" className="btn btn-primary">GET STARTED</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute right-8 top-24 text-7xl font-extrabold tracking-tight text-black/20 md:right-24 md:text-8xl">IMAGE HERE</div>
    </section>
  );
}
