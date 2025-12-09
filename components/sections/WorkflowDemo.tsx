"use client";

import React from "react";
import { AnimatedNode } from "@/components/ui/AnimatedNode";
import { FlowingLine } from "@/components/animations/FlowingLine";
import { useTranslation } from "@/hooks/useTranslation";

export function WorkflowDemo() {
  const { t } = useTranslation();

  const workflowNodes = [
    {
      id: "input",
      icon: "MessageSquare",
      label: t("workflowNode1"),
    },
    {
      id: "process",
      icon: "Cpu",
      label: t("workflowNode2"),
    },
    {
      id: "output",
      icon: "Send",
      label: t("workflowNode3"),
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("workflowTitle")}
          </h2>
          <p className="text-gray-400 text-lg">
            {t("workflowSubtitle")}
          </p>
        </div>

        {/* Workflow Container */}
        <div className="relative border border-white/10 rounded-2xl p-12 md:p-20 bg-black/50">
          {/* Nodes Container */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
            {workflowNodes.map((node, index) => (
              <div key={node.id} className="relative z-10">
                <AnimatedNode
                  icon={node.icon}
                  label={node.label}
                  delay={index * 0.2}
                />
              </div>
            ))}

            {/* Flowing Lines - Desktop */}
            <div className="hidden md:block absolute inset-0">
              <FlowingLine
                startX={200}
                startY={150}
                endX={400}
                endY={150}
                delay={0}
              />
              <FlowingLine
                startX={600}
                startY={150}
                endX={800}
                endY={150}
                delay={1}
              />
            </div>

            {/* Flowing Lines - Mobile (vertical) */}
            <div className="md:hidden absolute inset-0">
              <FlowingLine
                startX={180}
                startY={100}
                endX={180}
                endY={250}
                delay={0}
              />
              <FlowingLine
                startX={180}
                startY={350}
                endX={180}
                endY={500}
                delay={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
