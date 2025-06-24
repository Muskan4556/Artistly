"use client";

import { motion } from "framer-motion";

const CONFETTI_CONFIG = {
  positions: [
    { left: 15, top: 25 },
    { left: 85, top: 15 },
    { left: 25, top: 75 },
    { left: 75, top: 85 },
    { left: 45, top: 35 },
    { left: 65, top: 65 },
    { left: 35, top: 55 },
    { left: 55, top: 25 },
    { left: 5, top: 45 },
    { left: 95, top: 75 },
    { left: 20, top: 90 },
    { left: 80, top: 10 },
  ],
  colors: ["#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6"],
  animationDelays: [0, 1, 2, 3, 4, 0.5, 1.5, 2.5, 3.5, 4.5, 1, 3],
  durations: [8, 9, 10, 11, 12, 8.5, 9.5, 10.5, 11.5, 12.5, 9, 11],
  xMovements: [0, 25, -15, 20, -25, 15, -20, 10, -10, 30, -30, 5],
};

interface ConfettiAnimationProps {
  count?: number;
  className?: string;
}

export default function ConfettiAnimation({
  count = 12,
  className = "",
}: ConfettiAnimationProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => {
        const position =
          CONFETTI_CONFIG.positions[i % CONFETTI_CONFIG.positions.length];
        const color = CONFETTI_CONFIG.colors[i % CONFETTI_CONFIG.colors.length];
        const delay =
          CONFETTI_CONFIG.animationDelays[
            i % CONFETTI_CONFIG.animationDelays.length
          ];
        const duration =
          CONFETTI_CONFIG.durations[i % CONFETTI_CONFIG.durations.length];
        const xMovement =
          CONFETTI_CONFIG.xMovements[i % CONFETTI_CONFIG.xMovements.length];

        return (
          <motion.div
            key={`confetti-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              backgroundColor: color,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, xMovement, 0],
              rotate: [0, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
