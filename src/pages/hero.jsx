
const items = [
  "Clean, user-focused interfaces",
  "Practical problem solving",
  "Reliable web applications",
];

export default function Hero() {
  return (
    <section id="home" className="bg-blue-700 text-white">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-widest text-blue-200">
            Software Engineer
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            I'm Osama Irfan. I build digital experiences.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-blue-100">
            I turn ideas into practical web applications with thoughtful
            design, intuitive functionality, and a focus on solving
            real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-yellow-300 px-6 py-3 font-bold text-slate-900 transition hover:bg-yellow-200"
            >
              View projects
            </a>

            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download="Osama-Irfan-CV.pdf"
              className="rounded-full border-2 border-white px-6 py-3 font-bold transition hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for work
          </p>
        </div>

        <aside
          aria-label="Professional summary"
          className="mx-auto w-full max-w-xs rotate-2 rounded bg-stone-50 p-6 font-mono text-slate-900 shadow-2xl transition hover:rotate-0"
        >
          <p className="text-center text-sm font-bold tracking-widest">
            A LITTLE ABOUT MY WORK
          </p>

          <h2 className="mt-3 text-center text-2xl font-extrabold">
            OSAMA IRFAN
          </h2>

          <p className="text-center text-sm">Software Engineer</p>

          <ul className="my-5 space-y-3 border-y-2 border-dashed border-slate-400 py-5 text-sm">
            {items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="font-bold text-blue-700">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-center font-bold">LET'S BUILD SOMETHING.</p>
        </aside>
      </div>
    </section>
  );
}
