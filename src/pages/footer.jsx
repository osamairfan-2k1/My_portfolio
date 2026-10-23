
import { FaWhatsapp,FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const socials = [
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/osamairfan-2k1" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/osama-irfan" },
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/923052407070" }
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2">
        <div>
          <p className="text-2xl font-extrabold text-white">Osama Irfan</p>
          <p className="mt-3 max-w-xs">
            Full-stack developer building web apps with React and PHP.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-full bg-yellow-300 px-5 py-2 font-bold text-slate-900 hover:bg-yellow-200"
          >
            Let's work together
          </a>
        </div>

        <div className="md:justify-self-end">
          <h2 className="font-bold uppercase tracking-wide text-white">
            Connect
          </h2>
          <ul className="mt-4 space-y-3">
            {socials.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-white"
                >
                  <Icon size={20} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm">
          <p>
            © {new Date().getFullYear()} Osama. Built with React and Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 font-bold hover:text-white"
          >
            Back to top <FaArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
