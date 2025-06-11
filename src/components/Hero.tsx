"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [bgScale, setBgScale] = useState(1);
  const [bgOpacity, setBgOpacity] = useState(0.1);
  const [bgBlur, setBgBlur] = useState(0);

  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Add animation class after component mounts to prevent hydration mismatch
    const heroContent = document.getElementById("hero-content");
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add("animate-fade-in");
      }, 100);
    }
    // Scroll-based background zoom effect (scale, opacity, blur)
    const onScroll = () => {
      const hero = document.getElementById("hero-section");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      // How much the hero section is scrolled out of view (0 = top, 1 = bottom)
      const scrollProgress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      // Scale from 1.0 to 1.35
      const scale = 1 + scrollProgress * 0.35;
      // Opacity from 0.10 to 0.18
      const opacity = 0.1 + scrollProgress * 0.08;
      // Blur from 0px to 8px
      const blur = scrollProgress * 8;
      setBgScale(scale);
      setBgOpacity(opacity);
      setBgBlur(blur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darkBackground pt-20 sm:pt-24 md:pt-20">
      {" "}
      {/* Gradient background elements with random movement */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 sm:top-10 sm:left-10 sm:translate-x-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, 500, 35, -15, 0],
            scale: [1, 0.6, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-4 right-1/2 translate-x-1/2 sm:bottom-10 sm:right-10 sm:translate-x-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-secondary/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -35, 25, -50, 0],
            y: [0, -500, -30, 25, 0],
            scale: [1, 0.4, 1.2, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      {/* Background image with scroll-based zoom, opacity, blur */}
      <motion.div
        className="absolute inset-0 bg-[url('/images/stepio-background.png')] bg-cover bg-center will-change-transform"
        style={{
          transform: `scale(${bgScale})`,
          opacity: bgOpacity,
          filter: `blur(${bgBlur}px)`,
        }}
        initial={{ scale: 1, opacity: 0.1, filter: "blur(0px)" }}
        animate={{
          scale: bgScale,
          opacity: bgOpacity,
          filter: `blur(${bgBlur}px)`,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.13 } },
        }}>
        <motion.div
          id="hero-content"
          className="transform opacity-0 translate-y-8 scale-95 transition-all duration-1000 ease-out"
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}>
          {/* Logo with animated zoom background (no squircle, vivid) */}
          <motion.div
            className="flex justify-center mb-4 sm:mb-6 relative"
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7 },
              },
            }}>
            <div className="animate-logo-zoom w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
              <img
                src="/images/stepio-logo.webp"
                alt="StepIO logo"
                className="w-full h-full object-contain"
                draggable="false"
              />
            </div>
          </motion.div>
          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-3 sm:mb-4 max-w-2xl mx-auto font-sans"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}>
            Your Personal Fitness Companion
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-darkMuted mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto font-sans leading-relaxed px-2 sm:px-0"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}>
            Track your daily steps, explore new paths, and achieve your fitness
            goals with the ultimate Android fitness tracking app.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}>
            <button
              onClick={scrollToDownload}
              className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-cyber w-full sm:w-auto min-w-[180px] sm:min-w-[200px] hover:shadow-lg transform hover:scale-105 transition-all duration-300 rounded-[16px]">
              Download APK
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-cyber w-full sm:w-auto min-w-[180px] sm:min-w-[200px] hover:shadow-lg transition-all duration-300 rounded-[16px]">
              Learn More
            </button>
          </motion.div>
          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-2 sm:px-0"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-darkCard/20 backdrop-blur-sm border border-darkBorder/30">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text font-cyber mb-1">
                10K+
              </div>
              <div className="text-darkMuted font-sans text-xs sm:text-sm md:text-base">
                Steps Tracked
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-darkCard/20 backdrop-blur-sm border border-darkBorder/30">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text font-cyber mb-1">
                24/7
              </div>
              <div className="text-darkMuted font-sans text-xs sm:text-sm md:text-base">
                Background Tracking
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-darkCard/20 backdrop-blur-sm border border-darkBorder/30">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text font-cyber mb-1">
                Free
              </div>
              <div className="text-darkMuted font-sans text-xs sm:text-sm md:text-base">
                Open Source
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:block absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.7,
          type: "spring",
          stiffness: 60,
        }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-darkMuted opacity-60 hover:opacity-100 transition-opacity duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
