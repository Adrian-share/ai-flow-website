"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import * as Icons from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "Code2",
      title: t("feature1Title"),
      description: t("feature1Desc"),
    },
    {
      icon: "Layers",
      title: t("feature2Title"),
      description: t("feature2Desc"),
    },
    {
      icon: "Brain",
      title: t("feature3Title"),
      description: t("feature3Desc"),
    },
    {
      icon: "Zap",
      title: t("feature4Title"),
      description: t("feature4Desc"),
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("featuresTitle")}
          </h2>
          <p className="text-gray-400 text-lg">
            {t("featuresSubtitle")}
          </p>
        </div>

        {/* Grid - 4 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.icon];

            return (
              <Card key={index}>
                <div className="flex flex-col gap-4">
                  {IconComponent && (
                    <IconComponent className="w-12 h-12 text-white/80" />
                  )}
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
