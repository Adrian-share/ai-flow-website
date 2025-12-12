"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import * as Icons from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function UseCasesSection() {
  const { t } = useTranslation();

  const useCases = [
    {
      icon: "Share2",
      title: t("useCase1Title"),
      description: t("useCase1Desc"),
    },
    {
      icon: "FileText",
      title: t("useCase2Title"),
      description: t("useCase2Desc"),
    },
    {
      icon: "Mail",
      title: t("useCase3Title"),
      description: t("useCase3Desc"),
    },
    {
      icon: "Database",
      title: t("useCase4Title"),
      description: t("useCase4Desc"),
    },
    {
      icon: "Bot",
      title: t("useCase5Title"),
      description: t("useCase5Desc"),
    },
    {
      icon: "Search",
      title: t("useCase6Title"),
      description: t("useCase6Desc"),
    },
  ];

  return (
    <section id="use-cases" className="py-24 px-6 bg-deepGray/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("useCasesTitle")}
          </h2>
          <p className="text-gray-400 text-lg">
            {t("useCasesSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const IconComponent = (Icons as any)[useCase.icon];

            return (
              <Card key={index}>
                <div className="flex flex-col gap-4">
                  {IconComponent && (
                    <IconComponent className="w-12 h-12 text-white/80" />
                  )}
                  <h3 className="text-xl font-semibold text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
