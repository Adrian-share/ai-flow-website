import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Contact */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>{SITE_CONFIG.email}</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
