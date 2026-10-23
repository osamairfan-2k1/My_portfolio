import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact", cta: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-blue-900/95 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          Hi !
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href, cta }) => (
            <a
              key={label}
              href={href}
              className={
                cta
                  ? "rounded-full bg-yellow-300 px-5 py-2 font-bold text-slate-900 hover:bg-yellow-200"
                  : "text-blue-100 hover:text-white"
              }
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-white/10 md:hidden">
          <ul className="mx-auto max-w-5xl space-y-1 px-6 py-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-lg font-bold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}