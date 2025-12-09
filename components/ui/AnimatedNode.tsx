"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface AnimatedNodeProps {
  icon: string;
  label: string;
  delay?: number;
}

export function AnimatedNode({ icon, label, delay = 0 }: AnimatedNodeProps) {
  const IconComponent = (Icons as any)[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-md opacity-50 animate-glow-pulse" />
        <div className="relative bg-black border border-white/20 rounded-xl p-4">
          {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
        </div>
      </div>
      <span className="text-sm text-gray-400">{label}</span>
    </motion.div>
  );
}
