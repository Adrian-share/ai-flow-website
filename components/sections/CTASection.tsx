"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { useTranslation } from "@/hooks/useTranslation";

export function CTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {t("ctaTitle")}
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          {t("ctaSubtitle")}
        </p>
        <Button onClick={() => setIsFormOpen(true)} variant="primary">
          {t("ctaButton")}
        </Button>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
