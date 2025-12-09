"use client";

import React from "react";
import { motion } from "framer-motion";

interface FlowingLineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay?: number;
}

export function FlowingLine({
  startX,
  startY,
  endX,
  endY,
  delay = 0,
}: FlowingLineProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {/* Connection line */}
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeDasharray="0"
      />

      {/* Flowing particle */}
      <motion.circle
        cx={startX}
        cy={startY}
        r="4"
        fill="white"
        initial={{ cx: startX, cy: startY }}
        animate={{
          cx: [startX, endX],
          cy: [startY, endY],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          ease: "linear",
        }}
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
          <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
