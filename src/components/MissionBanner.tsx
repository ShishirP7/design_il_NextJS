import Link from "next/link";
import Image from "next/image";

export function MissionBanner() {
  return (
    <section className="relative py-28 text-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1747"
        alt="Workshop collaboration"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-brand-600/70" />

      <div className="relative container-section">
        <h3 className="text-xl font-semibold">Mission and Core Values</h3>
        <p className="mx-auto mt-2 max-w-xl text-sm opacity-95">
          Our goal is to provide you and your team with the mindset, framework, and tools to develop new insights about your users (whoever they are), create breakthrough ideas based on user feedback, and then help you convince key stakeholders of the value of those ideas.
        </p>
        <div className="mt-4">
          <Link href="#" className="text-sm font-semibold underline underline-offset-4">
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
