"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { useTranslation } from "@/hooks/useTranslation";
import * as Icons from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ProductPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "Workflow",
      title: t("productFeature1Title"),
      description: t("productFeature1Desc"),
      items: [
        t("productFeature1Item1"),
        t("productFeature1Item2"),
        t("productFeature1Item3"),
        t("productFeature1Item4"),
      ],
    },
    {
      icon: "Bot",
      title: t("productFeature2Title"),
      description: t("productFeature2Desc"),
    },
    {
      icon: "Plug",
      title: t("productFeature3Title"),
      description: t("productFeature3Desc"),
    },
    {
      icon: "Activity",
      title: t("productFeature4Title"),
      description: t("productFeature4Desc"),
    },
    {
      icon: "Users",
      title: t("productFeature5Title"),
      description: t("productFeature5Desc"),
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t("productTitle")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t("productDescription")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {features.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.icon];

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <Card>
                  <div className="flex flex-col md:flex-row gap-6">
                    {IconComponent && (
                      <div className="flex-shrink-0">
                        <IconComponent className="w-12 h-12 text-white/80" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h2>
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      {feature.items && (
                        <ul className="space-y-2">
                          {feature.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400">
                              <span className="text-white/60 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
