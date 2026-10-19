import { SkillColor } from "@/lib/data/types";

// Tailwind's compiler needs to see full class strings statically, so we map
// colors to full class names here instead of interpolating `bg-${color}/10`.
const COLOR_CLASSES: Record<SkillColor, string> = {
  blue: "bg-blue/10 text-blue",
  green: "bg-green/10 text-green",
  purple: "bg-purple/10 text-purple",
  orange: "bg-orange/10 text-orange",
  pink: "bg-pink/10 text-pink",
};

interface SkillBadgeProps {
  label: string;
  color: SkillColor;
  size?: "sm" | "md";
}

const SIZE_CLASSES: Record<"sm" | "md", string> = {
  sm: "text-[11px] px-2 py-0.5",
  md: "text-xs px-2 py-1",
};

export function SkillBadge({ label, color, size = "md" }: SkillBadgeProps) {
  return (
    <span
      className={`font-mono rounded ${SIZE_CLASSES[size]} ${COLOR_CLASSES[color]}`}
    >
      {label}
    </span>
  );
}
