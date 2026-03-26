"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Shield, Settings } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

// Pre-computed particle data to avoid hydration mismatches
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: ((i * 17 + 5) % 100),
  top: ((i * 23 + 11) % 100),
  duration: 3 + (i % 4),
  delay: (i % 5) * 0.4,
}));

export function ProblemStatement() {
  const particles = PARTICLES;

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Subtle background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `twinkle ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {/* Left Column - Two stacked cards */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {/* 95% Faster compliance */}
            <motion.div variants={staggerItem}>
              <StatCard
                icon={Clock}
                stat="95%"
                label="Faster compliance cycles"
              />
            </motion.div>

            {/* $150K+ savings */}
            <motion.div variants={staggerItem}>
              <StatCard
                icon={Zap}
                stat="$150K+"
                label="Average cost savings"
              />
            </motion.div>
          </div>

          {/* Center - Chart (spans 2 columns) */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-2"
          >
            <div className="h-full bg-card rounded-2xl border border-border p-6 lg:p-8 relative overflow-hidden group hover:border-primary/30 transition-colors">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 relative z-10">
                Audit Readiness Timeline
              </h3>

              {/* Chart */}
              <div className="relative z-10 h-48 lg:h-56">
                <ChartComponent />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Two stacked cards */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {/* 100% Audit Traceability */}
            <motion.div variants={staggerItem}>
              <StatCard
                icon={Shield}
                stat="100%"
                label="Audit Traceability"
              />
            </motion.div>

            {/* 100% Automated Evidence */}
            <motion.div variants={staggerItem}>
              <StatCard
                icon={Settings}
                stat="100%"
                label="Automated Evidence Collection"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="text-primary/60"
          >
            <path
              d="M16 0L18.5 13.5L32 16L18.5 18.5L16 32L13.5 18.5L0 16L13.5 13.5L16 0Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  stat,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  stat: string;
  label: string;
}) {
  return (
    <div className="h-full bg-card rounded-2xl border border-border p-6 relative overflow-hidden group hover:border-primary/30 transition-colors">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
          {stat}
        </div>
        <div className="text-sm lg:text-base text-text-secondary">
          {label}
        </div>
      </div>
    </div>
  );
}

function ChartComponent() {
  return (
    <div className="relative w-full h-full">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-text-muted pr-2">
        <span>100%</span>
        <span>75%</span>
        <span>50%</span>
        <span>25%</span>
        <span>0%</span>
      </div>

      {/* Chart area */}
      <div className="ml-10 h-full relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-b border-border/20 w-full" />
          ))}
        </div>

        {/* SVG Chart with curve, gradient fill, label and arrow */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 300 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00D4AA" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00D4AA" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00D4AA" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Filled area under curve - S-curve from bottom-left to top-right */}
          <path
            d="M0,200 L0,195 C30,190 60,170 90,140 C120,110 150,70 180,45 C210,20 240,8 270,5 L300,2 L300,200 Z"
            fill="url(#areaGradient)"
          />

          {/* Main curve line */}
          <path
            d="M0,195 C30,190 60,170 90,140 C120,110 150,70 180,45 C210,20 240,8 270,5 L300,2"
            fill="none"
            stroke="url(#curveGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Single arrowhead in middle of curve */}
          <polygon
            points="0,-12 36,0 0,12"
            fill="#00D4AA"
            transform="translate(160, 60) rotate(-40)"
          />
        </svg>

        {/* 95% Faster label - positioned ABOVE the curve */}
        <div
          className="absolute"
          style={{ top: '12%', left: '30%' }}
        >
          <div className="text-2xl lg:text-3xl font-bold text-primary">95%</div>
          <div className="text-sm text-text-muted text-left">Faster</div>
        </div>

        {/* X-axis labels */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-text-muted">
          <span>1 week</span>
          <span>2 weeks</span>
          <span>3 weeks</span>
          <span>4 weeks</span>
        </div>
      </div>
    </div>
  );
}
