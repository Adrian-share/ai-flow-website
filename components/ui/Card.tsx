import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-purple-950/30 via-black to-indigo-950/30 border border-white/20 rounded-2xl p-8 backdrop-blur-sm",
        hover && "card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
