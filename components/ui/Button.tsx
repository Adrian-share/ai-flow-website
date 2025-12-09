import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-xl font-medium transition-all duration-300 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white border-0 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/50",
    secondary:
      "bg-white/5 text-white border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/50",
    ghost: "text-white hover:text-purple-300",
  };

  const combinedStyles = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
