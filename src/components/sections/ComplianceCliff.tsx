"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, ShieldAlert } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { staggerContainer, staggerItem } from "@/lib/animations";

const problems = [
  {
    icon: Clock,
    title: "18-24 Month Delays",
    description:
      "Manual compliance journeys drain seed capital on red tape rather than clinical innovation.",
  },
  {
    icon: DollarSign,
    title: "$150K-$300K Per Cycle",
    description:
      "Expensive specialist consultants are currently the only option to navigate complex regulations.",
  },
  {
    icon: ShieldAlert,
    title: "#1 in Data Breaches",
    description:
      "The health sector leads in data breaches, often from compliance gaps and misconfigurations.",
  },
];

export function ComplianceCliff() {
  return (
    <section className="py-24 relative overflow-hidden bg-card">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-card-elevated via-card to-background" />

      {/* Subtle warm glow for visual interest */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FB4A02]/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The &ldquo;Compliance Cliff&rdquo; is Blocking Innovation in Digital Health
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg">
            Digital health innovators face extreme technical complexity when connecting to
            Australia&apos;s national health infrastructure (Health Identifiers, My Health Record,
            Electronic Prescribing).
          </p>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent">
                <div className="relative h-full bg-gradient-to-b from-card to-background rounded-2xl p-8 overflow-hidden">
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#FB4A02]/10 border border-[#FB4A02]/20 text-[#FB4A02] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FB4A02]/15 group-hover:border-[#FB4A02]/30">
                      <problem.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">
                      {problem.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
