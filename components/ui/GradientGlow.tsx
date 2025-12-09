import React from "react";

export function GradientGlow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Main center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] gradient-glow blur-3xl opacity-70" />

      {/* Additional accent glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl" />
    </div>
  );
}
