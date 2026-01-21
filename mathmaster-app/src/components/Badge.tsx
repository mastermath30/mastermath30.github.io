import clsx from "clsx";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "info" | "violet" | "purple";
  size?: "sm" | "md";
}

export function Badge({ 
  variant = "default", 
  size = "sm", 
  className, 
  children, 
  ...props 
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 font-medium rounded-full",
        {
          "bg-slate-100 text-slate-700": variant === "default",
          "bg-green-100 text-green-700": variant === "success",
          "bg-yellow-100 text-yellow-700": variant === "warning",
          "bg-blue-100 text-blue-700": variant === "info",
          "bg-violet-100 text-violet-700": variant === "violet",
          "bg-purple-100 text-purple-700": variant === "purple",
        },
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
