import type { Metadata } from "next";
import { profile } from "@/lib/data/profile";
import { education, experience, languages, projects, skills } from "@/lib/data/resume";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { PortfolioNav } from "@/components/PortfolioNav";
import { SkillColor } from "@/lib/data/types";

// Tailwind needs full static class names, not interpolated ones.
const GROUP_TITLE_COLOR: Record<SkillColor, string> = {
  blue: "text-blue",
  green: "text-green",
  purple: "text-purple",
  orange: "text-orange",
  pink: "text-pink",
};

export const metadata: Metadata = {
  title: "Portafolio interactivo",
  description: `Portafolio interactivo de ${profile.name}: experiencia profesional, proyectos y habilidades técnicas.`,
  alternates: {
    canonical: "/portafolio",
  },
};

export default function PortafolioPage() {
  return (
    <>
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
        <div className="mx-auto px-5 h-14 flex items-center justify-between font-mono text-sm">
          <a href="#inicio" className="text-ink flex items-center gap-2">
            <span className="text-green">~</span>
            <span className="text-mute">/</span>
            <span>acocoletzi</span>
          </a>
          <PortfolioNav />
        </div>
      </header>

      <main id="main-content">
        {/* HERO */}
        <section id="inicio" className="pt-28 sm:pt-36 pb-16 px-5">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-lg border border-border bg-panel shadow-2xl shadow-black/40 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border bg-[#161b22]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-mute">zsh — whoami</span>
              </div>
              <div className="p-5 sm:p-8 font-mono text-sm leading-relaxed">
                <p className="text-mute">
                  abraham@tlaxcala <span className="text-blue">~</span> %{" "}
                  <span className="text-ink">whoami</span>
                </p>
                <h1 className="mt-3 sm:text-4xl font-bold text-ink tracking-tight">
                  {profile.name}
                </h1>
                <p className="mt-1 text-base sm:text-lg text-green">{profile.title}</p>
                <p className="mt-4 text-mute">
                  abraham@tlaxcala <span className="text-blue">~</span> %{" "}
                  <span className="text-ink">cat bio.txt</span>
                </p>
                <p className="mt-2 text-ink/90 font-sans text-[15px] text-justify">
                  {profile.bio}
                </p>
                <p className="mt-4 text-mute">
                  abraham@tlaxcala <span className="text-blue">~</span> %{" "}
                  <span className="caret" />
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 font-mono text-xs text-mute justify-center">
              <span className="px-3 py-1.5 rounded border border-border bg-panel">
                📍 {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="px-3 py-1.5 rounded border border-border bg-panel hover:border-blue hover:text-blue transition-colors"
              >
                ✉ {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="px-3 py-1.5 rounded border border-border bg-panel hover:border-green hover:text-green transition-colors"
              >
                ☎ {profile.phone}
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded border border-border bg-panel hover:border-purple hover:text-purple transition-colors"
              >
                {profile.github}
              </a>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="py-14 px-5 border-t border-border">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-mono text-sm text-mute mb-1">// experiencia.log</h2>
            <p className="font-bold text-ink mb-10">Historial profesional</p>

            <div className="ml-1 pl-6 space-y-10">
              {experience.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="py-14 px-5 border-t border-border">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-mono text-sm text-mute mb-1">// proyectos/</h2>
            <p className="font-bold text-ink mb-10">Proyectos personales</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="py-14 px-5 border-t border-border">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-mono text-sm text-mute mb-1">// stack.json</h2>
            <p className="font-bold text-ink mb-10">Habilidades técnicas</p>

            <div className="grid sm:grid-cols-2 gap-8">
              {skills.map((group) => (
                <div key={group.key}>
                  <p className={`font-mono text-xs ${GROUP_TITLE_COLOR[group.color]} mb-3`}>
                    &quot;{group.title}&quot;
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-mono text-xs text-mute mb-2">// educación</p>
                <p className="text-ink/90">{education[0].title}</p>
                <p className="text-mute">
                  {education[0].institution} · {education[0].period}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-mute mb-2">// idiomas</p>
                {languages.map((lang) => (
                  <p key={lang.name} className="text-ink/90">
                    {lang.name} — {lang.level}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-16 px-5 border-t border-border">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="font-mono text-sm text-mute mb-2">// contacto.sh</p>
            <h2 className="sm:text-3xl font-bold text-ink">
              ¿Construimos algo juntos?
            </h2>
            <p className="mt-3 text-ink/80 max-w-lg mx-auto">
              Abierto a nuevas oportunidades como desarrollador full stack.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 font-mono text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="px-4 py-2.5 rounded bg-green/10 text-green border border-green/30 hover:bg-green/20 transition-colors"
              >
                Enviar correo
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded border border-border text-ink/90 hover:border-purple hover:text-purple transition-colors"
              >
                GitHub
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="px-4 py-2.5 rounded border border-border text-ink/90 hover:border-blue hover:text-blue transition-colors"
              >
                {profile.phone}
              </a>
            </div>
            <p className="mt-12 font-mono text-xs text-mute">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
