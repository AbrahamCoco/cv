import { ProjectItem } from "@/lib/data/types";
import { SkillBadge } from "./SkillBadge";

interface ProjectCardProps {
  item: ProjectItem;
}

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-border bg-panel p-5 flex flex-col">
      <p className="font-mono text-xs text-mute">{item.period}</p>
      <h3 className="font-semibold text-ink mt-1">{item.title}</h3>
      <p className="text-sm text-ink/80 mt-2 flex-1 text-justify">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <SkillBadge key={t.label} label={t.label} color={t.color} size="sm" />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
        {item.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-mute hover:text-blue transition-colors"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}
