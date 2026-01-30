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
      "Our AI ingests regulatory frameworks and instantly translates them into a specific technical roadmap and security architecture tailored to your use case.",
    color: "#00D4AA",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "builder",
    icon: Wrench,
    title: "The Builder",
    subtitle: "Automated Implementation",
    description:
      "Unlike passive checklists, our core engine actively generates the SDKs and API connectors required to bridge your application with government health networks.",
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
      "Post-certification, the platform provides 24/7 monitoring to detect regulatory drift and data standard updates, ensuring long-term audit readiness.",
    color: "#FB4A02",
    gradient: "from-accent-orange/20 to-accent-orange/5",
  },
];

export function Features() {
  return (
    <section id="solution" className="py-24 bg-background relative overflow-hidden">
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
            A comprehensive platform that handles every stage of your digital health
            compliance journey.
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
                className={`h-full p-8 bg-gradient-to-br ${feature.gradient} hover:border-[${feature.color}]/50 group`}
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
