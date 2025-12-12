"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { useTranslation } from "@/hooks/useTranslation";
import { FadeIn } from "@/components/animations/FadeIn";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faq1Question"),
      answer: t("faq1Answer"),
    },
    {
      question: t("faq2Question"),
      answer: t("faq2Answer"),
    },
    {
      question: t("faq3Question"),
      answer: t("faq3Answer"),
    },
    {
      question: t("faq4Question"),
      answer: t("faq4Answer"),
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
              {t("faqTitle")}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card>
                <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 text-white/80 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
