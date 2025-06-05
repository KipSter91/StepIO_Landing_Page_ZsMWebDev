"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSplash } from "@/contexts/SplashContext";
import SplashScreen from "./SplashScreen";
import Hero from "./Hero";
import Features from "./Features";
import Screenshots from "./Screenshots";
import Download from "./Download";
import Footer from "./Footer";

export default function MainContent() {
  const { splashCompleted, setSplashCompleted } = useSplash();
  const [showSplash, setShowSplash] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setSplashCompleted(true);

    // Delay main content appearance to ensure fresh animations
    setTimeout(() => {
      setShowMainContent(true);
    }, 300);
  };

  useEffect(() => {
    // If splash is already completed (e.g., on refresh in dev mode), skip splash
    if (splashCompleted) {
      setShowSplash(false);
      setShowMainContent(true);
    }
  }, [splashCompleted]);
  return (
    <>
      {/* Splash Screen - only show if not completed */}
      <AnimatePresence>
        {showSplash && !splashCompleted && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {/* Main Content - only show after splash completion and state update */}
      <AnimatePresence>
        {splashCompleted && showMainContent && (
          <motion.main
            className="min-h-screen overflow-x-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}>
            <Hero />
            <Features />
            <Screenshots />
            <Download />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
