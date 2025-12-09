import React from "react";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#a855f7", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Lightning bolt representing AI Flow */}
      <path
        d="M50 10 L35 45 L50 45 L40 90 L70 50 L55 50 L65 10 Z"
        fill="url(#logoGradient)"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Circuit-like dots */}
      <circle cx="25" cy="30" r="3" fill="#6366f1" />
      <circle cx="75" cy="30" r="3" fill="#ec4899" />
      <circle cx="20" cy="70" r="3" fill="#a855f7" />
      <circle cx="80" cy="70" r="3" fill="#6366f1" />
    </svg>
  );
}
