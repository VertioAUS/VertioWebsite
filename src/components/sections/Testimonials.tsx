"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    headline: "Addressing a Genuine Gap in Digital Health Compliance",
    quote:
      "From my experience in digital health, Vertio addresses a genuine gap in the market. Their solution has the potential to make digital health compliance more accessible, reduce integration time from months to weeks, and enable faster innovation in Australia's health technology sector.",
    role: "Senior Digital Health Architect",
    company: "Australian Department of Health",
    initials: "DH",
  },
  {
    headline: "From Uncertainty to Confidence",
    quote:
      "Compliance requirements for national health infrastructure are highly complex, leading to costly consultants and ongoing uncertainty. Vertio's solution converts complex standards into clear, actionable requirements, allowing us to implement obligations more quickly, confidently, and at lower cost without excessive reliance on external consultants.",
    role: "CEO",
    company: "Australian Tech Company",
    initials: "AT",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hear from Health Tech Professionals
          </h2>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card variant="bordered" hover={false} className="p-6 sm:p-8 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="w-8 h-8 text-primary/30 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-foreground">
                    {testimonial.headline}
                  </h3>
                </div>
                <blockquote className="text-base text-text-secondary leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
