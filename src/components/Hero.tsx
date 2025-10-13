import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1770"
        alt="Community design workshop"
        fill
        priority
        className="object-cover"
      />
      {/* Dark teal overlay for readability */}
      <div className="absolute inset-0 bg-brand-600/70" />

      {/* Content */}
      <div className="relative">
        <div className="container-section">
          <div className="py-28 md:py-40 max-w-xl text-white">
            <p className="text-[11px] tracking-[0.2em] opacity-80">
              WE ARE EXPERTS
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Building innovators for <br /> real-world change
            </h1>
            <p className="mt-5 text-sm leading-relaxed opacity-95 text-balance">
              We believe in equipping socially focused organizations
              (nonprofits, social enterprises, foundations, and schools) with
              the mindsets, frameworks, and tools to create innovators who
              impact their communities and the world.
            </p>
            <div className="mt-8">
              <Link href="#" className="btn btn-primary">
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
