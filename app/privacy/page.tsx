"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { useTranslation } from "@/hooks/useTranslation";
import { FadeIn } from "@/components/animations/FadeIn";

export default function PrivacyPage() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("privacy1Title"),
      content: t("privacy1Content"),
    },
    {
      title: t("privacy2Title"),
      content: t("privacy2Content"),
    },
    {
      title: t("privacy3Title"),
      content: t("privacy3Content"),
    },
    {
      title: t("privacy4Title"),
      content: t("privacy4Content"),
    },
    {
      title: t("privacy5Title"),
      content: t("privacy5Content"),
    },
    {
      title: t("privacy6Title"),
      content: t("privacy6Content"),
    },
    {
      title: t("privacy7Title"),
      content: t("privacy7Content"),
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
              {t("privacyTitle")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-400 mb-6">
              {t("privacyLastUpdated")}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-gray-400">
              {t("privacyIntro")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Privacy Sections */}
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
