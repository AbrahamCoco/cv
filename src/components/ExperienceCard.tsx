import { ExperienceItem } from "@/lib/data/types";
import { SkillBadge } from "./SkillBadge";

interface ExperienceCardProps {
  item: ExperienceItem;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  // .commit-rail:last-child in globals.css hides the connecting line after
  // the last item automatically, since these render as direct siblings.
  return (
    <div className="commit-rail commit-line">
      <p className="font-mono text-xs text-blue">{item.period}</p>
      <h3 className="text-lg font-semibold text-ink mt-1">{item.role}</h3>
      <p className="text-sm text-mute">{item.company}</p>
      <p className="mt-3 text-[15px] text-ink/90 text-justify">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tech.map((t) => (
          <SkillBadge key={t.label} label={t.label} color={t.color} />
        ))}
      </div>
    </div>
  );
}
