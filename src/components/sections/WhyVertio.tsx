"use client";

import { motion } from "framer-motion";
import { Rocket, Users, ShieldCheck, RefreshCw } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { staggerContainer, staggerItem } from "@/lib/animations";

const benefits = [
  {
    icon: Rocket,
    title: "Speed to Market",
    description:
      "Compress integration timelines from years to weeks with automated compliance workflows.",
    metric: "90%",
    metricLabel: "faster",
  },
  {
    icon: Users,
    title: "Democratise Access",
    description:
      "Eliminate consultant dependency, making compliance accessible to SMEs and startups.",
    metric: "$200K+",
    metricLabel: "saved",
  },
  {
    icon: ShieldCheck,
    title: "Risk Reduction",
    description:
      "Validate via Digital Twin before deployment, catching issues before they become problems.",
    metric: "0",
    metricLabel: "compliance failures",
  },
  {
    icon: RefreshCw,
    title: "Continuous Compliance",
    description:
      "Real-time alerts for regulatory changes keep you audit-ready at all times.",
    metric: "24/7",
    metricLabel: "monitoring",
  },
];

export function WhyVertio() {
  return (
    <section id="why-vertio" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Why Vertio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transform Your Compliance Journey
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We&apos;re not just another compliance tool. We&apos;re your partner in
            navigating Australia&apos;s digital health ecosystem.
          </p>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 transition-transform group-hover:scale-110">
                <benefit.icon className="w-8 h-8" />
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold gradient-text">
                  {benefit.metric}
                </span>
                <span className="text-text-secondary ml-2">{benefit.metricLabel}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-text-secondary text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
