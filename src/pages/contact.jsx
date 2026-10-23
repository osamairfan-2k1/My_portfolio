import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const FORM_ID = "mqpegrrd";
const EMAIL = "osama.irfan2001@gmail.com"; 

const contacts = [
  { Icon: FaEnvelope, label: EMAIL, href: `mailto:${EMAIL}` },
  {
    Icon: FaGithub,
    label: "github.com/osamairfan-2k1",
    href: "https://github.com/osamairfan-2k1",
  },
  {
    Icon: FaLinkedin,
    label: "linkedin.com/in/osama-irfan",
    href: "https://linkedin.com/in/osama-irfan",
  },
  { Icon: FaMapMarkerAlt, label: "Pakistan" },
];

const labelClass = "text-sm font-bold uppercase tracking-wide";
const fieldClass =
  "mt-2 w-full rounded border-2 border-slate-300 bg-white px-4 py-3 placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-200 focus-visible:outline-none";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-blue-800 text-white">
      <div className="mx-auto grid max-w-5xl items-start gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">Hey ! Send me a message</h2>
          <p className="mt-6 max-w-md text-lg text-blue-100">
            Have a role, a project or a question? Send me a message and I'll
            get back to you.
          </p>

          <ul className="mt-8 space-y-4">
            {contacts.map(({ Icon, label, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon size={18} aria-hidden="true" />
                </span>
                {href ? (
                  <a href={href} className="font-bold hover:underline">
                    {label}
                  </a>
                ) : (
                  <span className="font-bold">{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded bg-stone-50 p-6 font-mono text-slate-900 shadow-2xl sm:p-8">
          {status === "sent" ? (
            <div className="py-8 text-center">
              <FaCheckCircle size={48} className="mx-auto text-green-600" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-extrabold">MESSAGE SENT</h3>
              <p className="mt-2">Thanks for reaching out. I'll reply as soon as I can.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full border-2 border-slate-900 px-5 py-2 font-bold hover:bg-slate-900 hover:text-stone-50"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-center text-2xl font-extrabold">SEND A MESSAGE</h3>

              {/* Hidden spam trap: real people never fill this in */}
              <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" />

              <div className="mt-6 space-y-5 border-t-2 border-dashed border-slate-400 pt-6">
                <label className="block">
                  <span className={labelClass}>Name</span>
                  <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
                </label>

                <label className="block">
                  <span className={labelClass}>Email</span>
                  <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
                </label>

                <label className="block">
                  <span className={labelClass}>Message</span>
                  <textarea name="message" rows="5" required placeholder="How can I help?" className={`${fieldClass} resize-y`} />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-bold hover:bg-yellow-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FaPaperPlane aria-hidden="true" />
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "error" && (
                <p role="alert" className="mt-4 rounded border-2 border-red-600 bg-red-50 p-3 font-bold text-red-700">
                  Something went wrong. Please try again or email{" "}
                  <a href={`mailto:${EMAIL}`} className="underline">
                    {EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}