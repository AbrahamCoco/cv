"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "experiencia", label: "experiencia.log", color: "hover:text-blue" },
  { id: "proyectos", label: "proyectos/", color: "hover:text-purple" },
  { id: "habilidades", label: "stack.json", color: "hover:text-orange" },
  { id: "contacto", label: "contacto.sh", color: "hover:text-green" },
] as const;

export function PortfolioNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Scroll-spy: highlight the nav item for whichever section is in view.
  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the drawer on Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <nav className="hidden sm:flex items-center gap-6 text-mute">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={active === s.id ? "true" : undefined}
            className={`${s.color} transition-colors ${
              active === s.id ? "text-ink" : ""
            }`}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        aria-label="Abrir menú de navegación"
        className="sm:hidden flex flex-col justify-center gap-1.5 w-8 h-8 -mr-1"
      >
        <span className="block h-px w-5 bg-mute" />
        <span className="block h-px w-5 bg-mute" />
        <span className="block h-px w-3.5 bg-mute" />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`sm:hidden fixed inset-0 z-40 bg-black/60 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`sm:hidden fixed top-0 right-0 z-50 h-dvh w-64 max-w-[80vw] border-l border-border bg-panel px-6 py-6 transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-mute">menu.sh</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="text-mute hover:text-ink text-xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-5 font-mono text-base">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === s.id ? "true" : undefined}
              className={`${s.color} transition-colors ${
                active === s.id ? "text-ink" : "text-mute"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
