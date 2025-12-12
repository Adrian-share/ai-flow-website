"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { useTranslation } from "@/hooks/useTranslation";
import { FadeIn } from "@/components/animations/FadeIn";
import { Building2, Target, Eye } from "lucide-react";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t("aboutTitle")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              {t("aboutDescription")}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t("aboutMission")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 px-6 bg-deepGray/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card>
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-8 h-8 text-white/80 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("aboutCompanyInfoTitle")}
                  </h2>
                  <div className="space-y-2 text-gray-400">
                    <p>{t("aboutLegalName")}</p>
                    <p>{t("aboutEntityType")}</p>
                    <p>{t("aboutIncorporated")}</p>
                    <p>{t("aboutEIN")}</p>
                    <p>{t("aboutAddress")}</p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn delay={0.1}>
            <Card>
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-white/80 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {t("aboutMissionTitle")}
                  </h2>
                  <p className="text-gray-400">
                    {t("aboutMissionText")}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card>
              <div className="flex items-start gap-4">
                <Eye className="w-8 h-8 text-white/80 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {t("aboutVisionTitle")}
                  </h2>
                  <p className="text-gray-400">
                    {t("aboutVisionText")}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
