import clsx from "clsx";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "glass" | "gradient";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", hover = true, padding = "md", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-2xl transition-all duration-300",
          {
            "bg-slate-900 border border-slate-700 shadow-sm": variant === "default",
            "bg-transparent border border-slate-700": variant === "outline",
            "bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-lg": variant === "glass",
            "bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700": variant === "gradient",
          },
          hover && "hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1",
          {
            "p-0": padding === "none",
            "p-4": padding === "sm",
            "p-6": padding === "md",
            "p-8": padding === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx("mb-4", className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={clsx("text-xl font-bold text-white", className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={clsx("text-slate-400 text-sm mt-1", className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx("", className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx("mt-4 pt-4 border-t border-slate-800", className)} {...props}>
    {children}
  </div>
);
