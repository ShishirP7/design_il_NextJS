import Link from "next/link";
import Image from "next/image";

export function AssistSplit() {
  return (
    <section className="section">
      <div className="container-section grid gap-20 md:grid-cols-2">
        <div>
          <h3 className="text-center text-3xl font-extrabold text-slate-800 md:text-right">
            Whether you need<br />Assistance
          </h3>

          {/* Image block */}
          <div className="relative mt-10 h-72 w-full overflow-hidden rounded-lg md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1770"
              alt="People collaborating in a café"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>

        <div className="rounded-xl bg-[#0c693c] p-10 text-white flex justify-center  flex-col">
          <h3 className="text-3xl font-extrabold">
            Finpoint is here<br />to help you
          </h3>
          <p className="mt-4 text-sm leading-relaxed opacity-90">
            Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh
            tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra.
          </p>
          <div className="mt-8">
            <Link href="#" className="btn btn-outline-light">TALK WITH EXPERT</Link>
          </div>
        </div>
      </div>


    </section>
  );
}
