import Link from "next/link";
import { profile } from "@/lib/data/profile";
import {
  education,
  experience,
  languages,
  projects,
  references,
  skills,
} from "@/lib/data/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio de Abraham Coco",
  keywords: ["Portafolio", "Abraham Coco"],
  openGraph: {
    title: "Portafolio",
    description: "Portafolio de Abraham Coco",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 print:bg-white">
      <main id="main-content" className="max-w-[1400px] mx-auto px-6 py-12 print:py-4 text-justify">
        {/* Encabezado */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-xl text-neutral-700 mt-1">{profile.title}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            {profile.bio}
          </p>

          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-700">
            <div className="flex gap-1.5">
              <dt className="font-medium">Ubicación:</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="font-medium">Correo:</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="underline hover:text-blue-700">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="font-medium">Celular:</dt>
              <dd>
                <a href={`tel:${profile.phoneHref}`} className="underline hover:text-blue-700">
                  {profile.phone}
                </a>
              </dd>
            </div>
          </dl>
        </header>

        {/* Experiencia */}
        <section aria-labelledby="experiencia-heading" className="mt-10">
          <h2 id="experiencia-heading" className="font-bold mb-3">
            Experiencia
          </h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <article key={item.id}>
                <h3 className="text-lg font-semibold">
                  {item.company} — {item.role}{" "}
                  <span className="font-normal text-neutral-600">[{item.period}]</span>
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-neutral-800">
                  {item.description}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  <strong>Tecnologías utilizadas:</strong>{" "}
                  {item.tech.map((t) => t.label).join(", ")}.
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Educación */}
        <section aria-labelledby="educacion-heading" className="mt-10">
          <h2 id="educacion-heading" className="font-bold mb-3">
            Educación
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-[15px]">
            {education.map((item) => (
              <li key={item.id}>
                {item.title} — {item.institution} [{item.period}].
              </li>
            ))}
          </ul>
        </section>

        {/* Habilidades */}
        <section aria-labelledby="habilidades-heading" className="mt-10">
          <h2 id="habilidades-heading" className="font-bold mb-3">
            Habilidades
          </h2>
          <ul className="space-y-1 text-[15px]">
            {skills.map((group) => (
              <li key={group.key}>
                <strong className="capitalize">{group.title.replace(/_/g, " ")}:</strong>{" "}
                {group.items.join(", ")}.
              </li>
            ))}
          </ul>
        </section>

        {/* Idiomas */}
        <section aria-labelledby="idiomas-heading" className="mt-10">
          <h2 id="idiomas-heading" className="font-bold mb-3">
            Idiomas
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-[15px]">
            {languages.map((lang) => (
              <li key={lang.name}>
                {lang.name} — {lang.level}.
              </li>
            ))}
          </ul>
        </section>

        {/* Proyectos personales */}
        <section aria-labelledby="proyectos-heading" className="mt-10">
          <h2 id="proyectos-heading" className="font-bold mb-3">
            Proyectos personales
          </h2>
          <div className="space-y-6">
            {projects.map((item) => (
              <article key={item.id}>
                <h3 className="text-lg font-semibold">
                  {item.title}{" "}
                  <span className="font-normal text-neutral-600">[{item.period}]</span>
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-neutral-800">
                  {item.description}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  <strong>Tecnologías utilizadas:</strong>{" "}
                  {item.tech.map((t) => t.label).join(", ")}.
                </p>
                <p className="mt-1 text-sm">
                  {item.links.map((link, i) => (
                    <span key={link.url}>
                      {i > 0 && " · "}
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline"
                      >
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Referencias */}
        <section aria-labelledby="referencias-heading" className="mt-10">
          <h2 id="referencias-heading" className="font-bold mb-3">
            Referencias
          </h2>
          <ul className="space-y-2 text-[15px]">
            {references.map((ref) => (
              <li key={ref.email}>
                {ref.role} {ref.name} — {ref.company}.
                <br />
                {ref.phone} · {ref.email}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 print:hidden">
          <Link href="/portafolio" className="text-blue-700 underline">
            Ver portafolio interactivo →
          </Link>
        </div>
      </main>
    </div>
  );
}
