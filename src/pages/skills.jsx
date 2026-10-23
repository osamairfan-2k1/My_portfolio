
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLock,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiVite } from "react-icons/si";
import { MdApi } from "react-icons/md";

const education = [
  {
    title: "Bachelor's in Software Engineering",
    school: "FAST NUCES",
    years: "2021 – 2025",
  },
];

const categories = [
  {
    title: "Frontend",
    CategoryIcon: FaLaptopCode,
    skills: [
      { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#33A9DC" },
      { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    CategoryIcon: FaServer,
    skills: [
      { name: "PHP", Icon: FaPhp, color: "#8892BF" },
      { name: "REST APIs", Icon: MdApi, color: "#34D399" },
      { name: "JWT Authentication", Icon: FaLock, color: "#FBBF24" },
    ],
  },
  {
    title: "Database",
    CategoryIcon: FaDatabase,
    skills: [
      { name: "MySQL", Icon: SiMysql, color: "#4DA3C7" },
      { name: "SQL", Icon: FaDatabase, color: "#CBD5E1" },
    ],
  },
  {
    title: "Development Tools",
    CategoryIcon: FaTools,
    skills: [
      { name: "Git", Icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", Icon: FaGithub, color: "#FFFFFF" },
      { name: "Vite", Icon: SiVite, color: "#A78BFA" },
    ],
  },
];

const card =
  "rounded bg-stone-50 p-6 font-mono text-slate-900 transition hover:-translate-y-1 hover:shadow-2xl";

export default function Skills() {
  return (
    <section id="skills" className="bg-blue-800 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-sm font-bold uppercase tracking-widest text-blue-200">
          Background & expertise
        </p>

        <h2 className="mt-3 text-4xl font-extrabold leading-tight">
          Education & Tech Stack
        </h2>

        <p className="mt-4 max-w-xl text-lg text-blue-100">
          My academic background and the technologies I use to develop
          modern web applications.
        </p>

        <div className={`mt-10 ${card}`}>
          <h3 className="text-center text-2xl font-extrabold">
            EDUCATION
          </h3>

          <ul className="mt-4 divide-y-2 divide-dashed divide-slate-400 border-t-2 border-dashed border-slate-400">
            {education.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 py-4 last:pb-0"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                  <FaGraduationCap size={22} aria-hidden="true" />
                </span>

                <div>
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="mt-1 text-slate-600">
                    {item.school} · {item.years}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-extrabold">
            Technologies & Tools
          </h3>

          <p className="mt-2 max-w-xl text-blue-100">
            The languages, frameworks, databases, and tools in my
            development toolkit.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {categories.map(({ title, CategoryIcon, skills }) => (
              <div key={title} className={card}>
                <h4 className="flex items-center justify-center gap-2 text-xl font-extrabold">
                  <CategoryIcon
                    className="text-blue-700"
                    size={22}
                    aria-hidden="true"
                  />
                  {title.toUpperCase()}
                </h4>

                <ul className="mt-4 flex flex-wrap gap-2 border-t-2 border-dashed border-slate-400 pt-4">
                  {skills.map(({ name, Icon, color }) => (
                    <li
                      key={name}
                      className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-bold text-stone-50"
                    >
                      <Icon
                        size={18}
                        color={color}
                        aria-hidden="true"
                      />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
