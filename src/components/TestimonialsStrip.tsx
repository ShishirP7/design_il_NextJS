export function TestimonialsStrip(){
  return (
    <section className="section">
      <div className="container-section grid gap-8 md:grid-cols-[0.9fr,1.1fr]">
        <div>
          <h3 className="text-xl font-extrabold text-slate-800">What our clients say about<br/>Finpoint services</h3>
          <p className="mt-4 max-w-md text-sm text-slate-600">Quis commodo odio aenean sed adipiscing diam. A erat nam at lectus urna duis convallis.</p>
          <div className="mt-4 text-sm font-semibold underline underline-offset-4">READ TESTIMONIALS</div>
        </div>
        <div className="rounded-xl bg-[#0c693c] p-8 text-white">
          <p className="text-sm leading-relaxed">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-300"></div>
            <div>
              <div className="text-sm font-semibold">JANE DOE</div>
              <div className="text-xs opacity-80">President of Medical .Inc</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
