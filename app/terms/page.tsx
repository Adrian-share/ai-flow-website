"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { useTranslation } from "@/hooks/useTranslation";
import { FadeIn } from "@/components/animations/FadeIn";

export default function TermsPage() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("terms1Title"),
      content: t("terms1Content"),
    },
    {
      title: t("terms2Title"),
      content: t("terms2Content"),
    },
    {
      title: t("terms3Title"),
      content: t("terms3Content"),
    },
    {
      title: t("terms4Title"),
      content: t("terms4Content"),
    },
    {
      title: t("terms5Title"),
      content: t("terms5Content"),
    },
    {
      title: t("terms6Title"),
      content: t("terms6Content"),
    },
    {
      title: t("terms7Title"),
      content: t("terms7Content"),
    },
    {
      title: t("terms8Title"),
      content: t("terms8Content"),
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t("termsTitle")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-400 mb-6">
              {t("termsLastUpdated")}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-gray-400 whitespace-pre-line">
              {t("termsIntro")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <FadeIn key={index} delay={0.05}>
              <Card>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-gray-400 whitespace-pre-line">
                  {section.content}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
