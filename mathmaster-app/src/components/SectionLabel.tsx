import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface SectionLabelProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function SectionLabel({ icon: Icon, children, className, variant = "light" }: SectionLabelProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
        variant === "light" && "bg-violet-50 border border-violet-100 text-violet-600",
        variant === "dark" && "bg-white/10 border border-white/20 text-white/90",
        className
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  );
}
