"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { t } = useTranslation();

  const productLinks = [
    { label: t("navProduct"), href: "/product" },
    { label: t("navPricing"), href: "/pricing" },
  ];

  const companyLinks = [
    { label: t("navAbout"), href: "/about" },
    { label: t("navContact"), href: "/contact" },
    { label: t("navFAQ"), href: "/faq" },
  ];

  const legalLinks = [
    { label: t("navTerms"), href: "/terms" },
    { label: t("navPrivacy"), href: "/privacy" },
  ];

  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t("siteName")}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t("siteDescription")}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${t("footerEmail")}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{t("footerEmail")}</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="whitespace-pre-line">{t("footerAddress")}</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-gray-600">{t("footerRights")}</p>
        </div>
      </div>
    </footer>
  );
}
