"use client";

import { motion } from "framer-motion";
import { Brain, Wrench, ClipboardCheck, Shield } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    id: "architect",
    icon: Brain,
    title: "The Architect",
    subtitle: "Intelligent Scoping",
    description:
      "Determines exactly which use cases, web services, and conformance requirements apply to your specific product. You know what to build before writing a line of code.",
    color: "#00D4AA",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "builder",
    icon: Wrench,
    title: "The Builder",
    subtitle: "Pre-Built Compliance Code",
    description:
      "Production-ready SDK packages you install into your own system, regardless of framework. Covers identifier validation, SOAP integration, status transition logic, mock testing, and PII-safe audit logging across HI, MHR, and EP. Vertio maintains the conformance logic as specifications evolve.",
    color: "#00C2FF",
    gradient: "from-accent-cyan/20 to-accent-cyan/5",
  },
  {
    id: "auditor",
    icon: ClipboardCheck,
    title: "The Auditor",
    subtitle: "Validation & Certification",
    description:
      "Run simulated conformance tests and auto-generate the mandatory Evidence Packs required to pass official government compliance tests without rejection loops.",
    color: "#AC55FF",
    gradient: "from-accent-purple/20 to-accent-purple/5",
  },
  {
    id: "guardian",
    icon: Shield,
    title: "The Guardian",
    subtitle: "Compliance Maintenance",
    description:
      "Post-certification monitoring that detects regulatory changes and data standard updates, keeping your system audit-ready without manual tracking.",
    color: "#FB4A02",
    gradient: "from-accent-orange/20 to-accent-orange/5",
  },
];

export function Features() {
  return (
    <section id="solution" className="pt-8 pb-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Four Pillars of Compliance
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            No Australian healthcare vendor should spend months on conformance when they could spend weeks. Vertio handles every stage.
          </p>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={staggerItem}>
              <Card
                variant="bordered"
                className={`h-full p-8 bg-gradient-to-br ${feature.gradient} hover:border-border-hover group`}
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon
                    className="w-7 h-7"
                    style={{ color: feature.color }}
                  />
                </div>
                <div className="mb-2">
                  <span
                    className="text-sm font-medium"
                    style={{ color: feature.color }}
                  >
                    {feature.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
