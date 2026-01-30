"use client";

import { motion } from "framer-motion";

// Pre-computed star data to avoid hydration mismatches
const STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: ((i * 17 + 7) % 100),
  y: ((i * 23 + 13) % 100),
  size: (i % 3) + 1,
  delay: (i % 10) * 0.3,
  duration: 2 + (i % 3),
}));

interface TwinklingStarsProps {
  count?: number;
  className?: string;
}

export function TwinklingStars({ count = 50, className }: TwinklingStarsProps) {
  const stars = STARS.slice(0, count);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
