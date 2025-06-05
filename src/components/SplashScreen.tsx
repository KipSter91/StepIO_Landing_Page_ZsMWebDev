"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Separate component for timer display to isolate re-renders
const TimerDisplay = ({
  remaining,
  total,
  timerActive,
}: {
  remaining: number;
  total: number;
  timerActive: boolean;
}) => {
  // Calculate progress percentage (0-100)
  const progress = timerActive ? ((total - remaining) / total) * 100 : 0;

  return (
    <div className="relative flex items-center justify-center w-8 h-8">
      {/* Background circle */}
      <div className="absolute inset-0 w-8 h-8 rounded-full border-2 border-white/20" />

      {/* Progress circle - SVG approach for better control */}
      <svg
        className="absolute inset-0 w-8 h-8 -rotate-90"
        viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          r="12"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 12}`} // Circumference
          strokeDashoffset={`${2 * Math.PI * 12 * (1 - progress / 100)}`} // Progress offset
          className="transition-all duration-1000 ease-linear"
        />
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%">
            <stop
              offset="0%"
              stopColor="rgba(0, 255, 204, 0.8)"
            />
            <stop
              offset="50%"
              stopColor="rgba(0, 255, 204, 0.6)"
            />
            <stop
              offset="100%"
              stopColor="rgba(180, 95, 255, 0.6)"
            />
          </linearGradient>
        </defs>
      </svg>

      {/* Timer number */}
      <span className="relative z-10 text-white/90 font-mono text-xs font-bold min-w-[1.5em] text-center">
        {remaining}
      </span>
    </div>
  );
};

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [remaining, setRemaining] = useState(5); // Start at 5 seconds
  const [timerActive, setTimerActive] = useState(false);
  const SPLASH_DURATION = 8000; // Total splash duration (8 seconds)
  const TIMER_START_DELAY = 2000; // Timer starts when skip button appears (2 seconds)

  // Memoize particles data to prevent recreation on timer updates
  const particlesData = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: `particle-${i}`,
      initialX:
        typeof window !== "undefined"
          ? Math.random() * window.innerWidth
          : Math.random() * 1200,
      initialY:
        typeof window !== "undefined"
          ? Math.random() * window.innerHeight
          : Math.random() * 800,
      targetY:
        typeof window !== "undefined"
          ? Math.random() * window.innerHeight - 100
          : Math.random() * 700,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 3,
    }));
  }, [isClient]); // Only recreate when isClient changes

  const skipSplash = () => {
    setShowSplash(false);
    // Give time for exit animation before showing main content
    setTimeout(onComplete, 300);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (!isClient) return;

    // Start the countdown timer when skip button appears (2 seconds)
    const timerDelay = setTimeout(() => {
      setTimerActive(true);
    }, TIMER_START_DELAY);

    // Main splash timer - full duration (8 seconds)
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      // Wait for exit animation before calling onComplete
      setTimeout(onComplete, 300);
    }, SPLASH_DURATION);

    return () => {
      clearTimeout(timerDelay);
      clearTimeout(splashTimer);
    };
  }, [onComplete, isClient, SPLASH_DURATION, TIMER_START_DELAY]);
  useEffect(() => {
    if (!timerActive) return;

    setRemaining(5); // Mindig 5-től induljon

    // Countdown timer - counts down from 5 to 0, 1000ms-onként
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerActive]);

  if (!showSplash || !isClient) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-darkBackground via-darkCard to-darkBackground"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.1,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}>
        
        {/* Optimized background particles with stable keys */}
        <div className="absolute inset-0 overflow-hidden">
          {particlesData.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{
                opacity: 0,
                x: particle.initialX,
                y: particle.initialY,
                scale: 0,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                y: [particle.initialY, particle.targetY],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        {/* Main splash content - absolutely centered, de kicsit fentebb */}
        <div className="absolute inset-0 flex items-center justify-center -translate-y-12 sm:-translate-y-16">
          <div className="text-center flex flex-col items-center justify-center">
            {/* Logo container with subtle effects */}
            <div className="relative">
              
              {/* Subtle rotating ring behind logo - squircle shaped */}
              <motion.div
                className="absolute inset-0 w-40 h-40 sm:w-48 sm:h-48"
                style={{
                  borderRadius: "30%",
                  background:
                    "conic-gradient(from 0deg, transparent, rgba(0, 255, 204, 0.05), transparent, rgba(180, 95, 255, 0.05), transparent)",
                  border: "1px solid rgba(0, 255, 204, 0.1)",
                }}
                initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                animate={{
                  rotate: 360,
                  scale: 1,
                  opacity: 0.6,
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, delay: 0.8 },
                  opacity: { duration: 1.5, delay: 0.8 },
                }}
              />
              {/* Inner pulsing glow */}
              <motion.div
                className="absolute inset-4 sm:inset-6"
                style={{
                  borderRadius: "30%",
                  background:
                    "radial-gradient(circle, rgba(0, 255, 204, 0.03) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Logo with bounce-in animation and gentle pulsing */}
              <motion.div
                className="relative flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.2, 0.9, 1],
                  opacity: [0, 1, 1, 1],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.3,
                  ease: "easeOut",
                  times: [0, 0.5, 0.8, 1],
                }}>
                <motion.img
                  src="/images/stepio-logo.webp"
                  alt="StepIO"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain relative z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    delay: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
            {/* Animated text - only tagline, no brand name since logo is present */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6">
              {/* Tagline */}
              <motion.p
                className="text-darkMuted text-xl sm:text-2xl font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}>
                Your Personal Fitness Companion
              </motion.p>
              {/* Loading indicator with optimal spacing */}
              <motion.div
                className="mt-6 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}>
                <div className="flex space-x-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-darkBackground to-transparent" />
        {/* Enhanced skip button with circular progress timer */}
        <motion.div
          className="absolute bottom-8 right-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.3 }}>
          <motion.button
            onClick={skipSplash}
            className="relative px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 text-white border border-primary/30 hover:border-primary/50 rounded-xl font-cyber text-sm transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-primary/20 flex items-center gap-3 group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            {/* Animated background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderRadius: "inherit" }}
            />
            <span className="gradient-text relative z-10">Skip</span>
            {/* Circular timer with progress ring */}
            <TimerDisplay
              remaining={remaining}
              total={6} // 5 seconds countdown
              timerActive={timerActive}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
