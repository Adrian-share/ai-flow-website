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
      title: t("why1Title"),
      description: t("why1Desc"),
    },
    {
      icon: "Zap",
      title: t("why2Title"),
      description: t("why2Desc"),
    },
    {
      icon: "Layers",
      title: t("why3Title"),
      description: t("why3Desc"),
    },
    {
      icon: "Shield",
      title: t("why4Title"),
      description: t("why4Desc"),
    },
    {
      icon: "TrendingUp",
      title: t("why5Title"),
      description: t("why5Desc"),
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("whyTitle")}
          </h2>
          <p className="text-gray-400 text-lg">
            {t("whySubtitle")}
          </p>
        </div>

        {/* Grid - 5 features, responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First row: 3 cards */}
          {features.slice(0, 3).map((feature, index) => {
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

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          {features.slice(3).map((feature, index) => {
            const IconComponent = (Icons as any)[feature.icon];

            return (
              <Card key={index + 3}>
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
