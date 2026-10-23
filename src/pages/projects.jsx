import { FaCheckCircle, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function PosPreview() {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded bg-white/15 p-2">
          <div className="h-6 w-6 rounded-full bg-white/30" />
          <div className="mt-2 h-2 w-10 rounded bg-white/30" />
        </div>
      ))}
      <div className="col-span-3 mt-1 rounded bg-yellow-300 px-3 py-2 text-center text-sm font-bold text-slate-900">
        Complete sale
      </div>
    </div>
  );
}

function SimPreview() {
  return (
    <div className="flex flex-col justify-center gap-5 p-6">
      <svg
        viewBox="0 0 200 50"
        className="w-full"
        fill="none"
        stroke="#fde047"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="0,25 50,25 60,25 68,6 78,44 88,25 140,25 148,15 156,35 164,25 200,25" />
      </svg>
      <div className="flex flex-wrap gap-2 text-xs font-bold">
        <span className="rounded bg-white/15 px-3 py-1">Live feedback</span>
        <span className="rounded bg-white/15 px-3 py-1">VR mode</span>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Mini Mart POS",
    type: "Retail Management System",
    Preview: PosPreview,
    image: "/minimart.png",
    description:
      "A point-of-sale and inventory management application designed to simplify everyday mini-mart operations, from processing customer purchases to monitoring stock.",
    features: [
      "Searchable product catalog for faster checkout",
      "Automatic inventory updates after sales",
      "Low-stock alerts and sales dashboard",
      "Secure login and protected application pages",
    ],
    tech: ["React", "PHP", "MySQL", "JWT"],
    code: "https://github.com/osamairfan-2k1/Mini_mart_POS",
  },
  {
    title: "Surgical Simulator",
    type: "Virtual Reality Training",
    Preview: SimPreview,
    image: "/picture8.png",
    description:
      "A virtual reality surgical training project focused on gallbladder surgery. It aims to give trainees an interactive environment to practise procedures and receive feedback.",
    features: [
      "Interactive virtual reality training",
      "Feedback to support the learning process",
      "A simulated environment for surgical practice",
    ],
    tech: ["Unity", "C#", "Firebase"],
    code: "https://github.com/osamairfan-2k1/VR_SURGERY-SIMULATOR",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-blue-700 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-sm font-bold uppercase tracking-widest text-blue-200">
          Selected work
        </p>

        <h2 className="mt-3 text-4xl font-extrabold leading-tight">
          Projects I've Built
        </h2>

        <p className="mt-4 max-w-xl text-lg text-blue-100">
          A look at the applications and interactive experiences I've
          worked on, the problems they address, and the features they offer.
        </p>

        <div className="mt-14 space-y-20">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group grid items-center gap-8 md:grid-cols-2"
            >
              <div className={i % 2 ? "md:order-2" : ""}>
                <p
                  className="mb-3 text-6xl font-extrabold text-white/25"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>

                <div className="overflow-hidden rounded-lg border-2 border-slate-900 bg-blue-900 shadow-2xl transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-[1.02]">
                  <div
                    className="flex gap-1.5 bg-slate-900 px-3 py-2"
                    aria-hidden="true"
                  >
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  {project.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
                      alt={`${project.title} project preview`}
                      className="w-full"
                      loading="lazy"
                    />
                  ) : (
                    <div className="min-h-56">
                      <project.Preview />
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded bg-stone-50 p-6 font-mono text-slate-900 shadow-xl">
                <h3 className="text-2xl font-extrabold">
                  {project.title.toUpperCase()}
                </h3>

                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-blue-700">
                  {project.type}
                </p>

                <p className="mt-4 border-t-2 border-dashed border-slate-400 pt-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <FaCheckCircle
                        className="mt-1 shrink-0 text-blue-700"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t-2 border-dashed border-slate-400 pt-4">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                    Built with
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-slate-900 px-3 py-1 text-sm font-bold text-stone-50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2 font-bold text-white hover:bg-blue-800"
                    >
                      {project.demoLabel ?? "Live demo"}
                      <FaExternalLinkAlt size={13} aria-hidden="true" />
                    </a>
                  )}

                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 px-5 py-2 font-bold transition hover:bg-slate-900 hover:text-stone-50"
                    >
                      <FaGithub aria-hidden="true" />
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
