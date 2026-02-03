"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TwinklingStars } from "@/components/animations/TwinklingStars";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <TwinklingStars count={60} />

      {/* Gradient Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <motion.div
          key="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-text-secondary">
              Now accepting early access signups
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Digital Health Compliance.</span>
            <br />
            <span className="gradient-text">Accelerated. Assured.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
          >
            Integrate with Australia&apos;s digital health ecosystem faster, without
            compromising confidence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="https://cal.com/vertioaus" size="lg">
              Book a Demo
            </Button>
            <Button href="#solution" variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
