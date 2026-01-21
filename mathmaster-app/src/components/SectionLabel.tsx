import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface SectionLabelProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ icon: Icon, children, className }: SectionLabelProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 px-4 py-2 bg-violet-50 border border-violet-100 rounded-full text-sm font-medium text-violet-600",
        className
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  );
}
