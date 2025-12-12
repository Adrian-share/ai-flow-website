"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

export default function PricingPage() {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("pricingPlan1Title"),
      price: t("pricingPlan1Price"),
      priceUnit: "",
      description: t("pricingPlan1Desc"),
      features: [
        t("pricingPlan1Feature1"),
        t("pricingPlan1Feature2"),
        t("pricingPlan1Feature3"),
        t("pricingPlan1Feature4"),
      ],
      highlighted: false,
    },
    {
      name: t("pricingPlan2Title"),
      price: t("pricingPlan2Price"),
      priceUnit: t("pricingPlan2PriceUnit"),
      description: t("pricingPlan2Desc"),
      features: [
        t("pricingPlan2Feature1"),
        t("pricingPlan2Feature2"),
        t("pricingPlan2Feature3"),
        t("pricingPlan2Feature4"),
      ],
      highlighted: true,
    },
    {
      name: t("pricingPlan3Title"),
      price: t("pricingPlan3Price"),
      priceUnit: t("pricingPlan3PriceUnit"),
      description: t("pricingPlan3Desc"),
      features: [
        t("pricingPlan3Feature1"),
        t("pricingPlan3Feature2"),
        t("pricingPlan3Feature3"),
        t("pricingPlan3Feature4"),
        t("pricingPlan3Feature5"),
      ],
      highlighted: false,
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
              {t("pricingTitle")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-400">
              {t("pricingSubtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card
                className={`relative flex flex-col h-full ${
                  plan.highlighted
                    ? "ring-2 ring-white/20 shadow-2xl"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-white text-sm font-medium">
                    Popular
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.priceUnit && (
                      <span className="text-gray-400 text-lg">
                        {plan.priceUnit}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="w-full">
                  <Button
                    variant={plan.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {t("pricingButton")}
                  </Button>
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
