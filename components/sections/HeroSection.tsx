"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { GradientGlow } from "@/components/ui/GradientGlow";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/ui/ContactForm";
import { useTranslation } from "@/hooks/useTranslation";

export function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <GradientGlow />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <FadeIn>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient mb-6">
            {t("heroTitle")}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
            {t("heroSubtitle")}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t("heroDescription")}
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10">
            <Button onClick={() => setIsFormOpen(true)} variant="primary" size="lg">
              {t("heroButton")}
            </Button>
          </div>
        </FadeIn>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
