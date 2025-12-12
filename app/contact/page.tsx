"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";
import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      title: t("contactEmail"),
      content: t("contactEmailValue"),
      link: `mailto:${t("contactEmailValue")}`,
    },
    {
      icon: MapPin,
      title: t("contactAddress"),
      content: t("contactAddressValue"),
    },
    {
      icon: Clock,
      title: t("contactHours"),
      content: t("contactHoursValue"),
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
              {t("contactTitle")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-400 mb-10">
              {t("contactDescription")}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Button
              onClick={() => setIsFormOpen(true)}
              variant="primary"
              size="lg"
            >
              {t("formTitle")}
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="h-full">
                  <div className="flex flex-col items-center text-center gap-4">
                    <IconComponent className="w-10 h-10 text-white/80" />
                    <h3 className="text-xl font-semibold text-white">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-white transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-400 whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <Footer />
    </main>
  );
}
