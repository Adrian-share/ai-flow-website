"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 border border-white/20 rounded-lg p-1 bg-black/30">
      <Globe className="w-4 h-4 text-gray-400 ml-2" />
      <button
        onClick={() => setLanguage("zh")}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          language === "zh"
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          language === "en"
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
