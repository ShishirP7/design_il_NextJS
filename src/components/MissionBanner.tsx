import Link from "next/link";

export function MissionBanner(){
  return (
    <section className="relative bg-brand-500 py-28 text-center text-white">
      <div className="container-section">
        <div className="text-7xl font-extrabold tracking-tight text-black/25">IMAGE HERE</div>
        <h3 className="mt-6 text-xl font-semibold">Mission and Core Values</h3>
        <p className="mx-auto mt-2 max-w-xl text-sm opacity-90">Elementum nibh tellus molestie nunc non blandit massa. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.</p>
        <div className="mt-4">
          <Link href="#" className="text-sm font-semibold underline underline-offset-4">LEARN MORE</Link>
        </div>
      </div>
    </section>
  );
}
