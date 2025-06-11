"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const BRAND_TEXT = "StepIO";

// Helper to get current section
const SECTION_IDS = ["features", "live demo", "download"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change or scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    window.addEventListener("scroll", close);
    return () => {
      window.removeEventListener("resize", close);
      window.removeEventListener("scroll", close);
    };
  }, [menuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      let found = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling with offset for header
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust this value to control how much space above the section
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };
  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300${
          scrolled
            ? " backdrop-blur-md bg-section-darker/90 border-b border-primary/30 shadow-card"
            : " bg-section-darker"
        }`}>
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-20 md:h-20 relative">
          <motion.a href="#hero-section">
            <span className="font-cyber font-bold text-xl sm:text-2xl md:text-3xl gradient-text tracking-wide">
              {BRAND_TEXT.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + index * 0.12,
                  }}
                  className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.a>
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {SECTION_IDS.map((id, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleSectionClick(e, id)}
                className={
                  `relative text-darkMuted hover:text-primary font-sans transition-all duration-300 hover:scale-105` +
                  (activeSection === id ? " text-primary" : "")
                }
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}>
                <span className="relative inline-block">
                  {id.split(" ").map((word, index) => (
                    <span key={index}>
                      {word.charAt(0).toUpperCase() + word.slice(1)}
                      {index < id.split(" ").length - 1 && " "}
                    </span>
                  ))}
                  <span className="absolute left-0 -bottom-1 h-[2.5px] w-full overflow-hidden pointer-events-none">
                    {activeSection === id && (
                      <motion.span
                        key={id + "-underline"}
                        className="block w-full h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                        initial={{ scaleX: 0, opacity: 0.7 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0.7 }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ transformOrigin: "left" }}
                      />
                    )}
                  </span>
                </span>
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/KipSter91/StepIO_Android_App_ZsMWebDev.git"
              target="_blank"
              rel="noopener"
              className="text-darkMuted hover:text-primary font-sans transition-all duration-300 hover:scale-105 flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}>
              <FaGithub className="w-5 h-5" />
              GitHub
            </motion.a>
          </nav>
          {/* Hamburger icon for mobile */}
          <motion.button
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-lg border border-darkBorder hover:border-primary transition-all bg-darkCard/80 backdrop-blur-sm z-50"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}>
            <span
              className={`block w-5 h-0.5 bg-white mb-1 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}></span>
            <span
              className={`block w-5 h-0.5 bg-white mb-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}></span>
          </motion.button>
          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                key="mobile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`md:hidden absolute left-0 w-full bg-darkBackground/95 backdrop-blur-md border-b border-primary/20 shadow-card transition-all duration-300 overflow-hidden ${
                  menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ top: "100%", zIndex: 49 }}>
                <div className="flex flex-col gap-2 py-6 px-6 sm:px-8">
                  <a
                    href="#features"
                    className="text-white font-sans py-3 px-4 rounded-lg hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20"
                    onClick={(e) => handleSectionClick(e, "features")}>
                    Features
                  </a>
                  <a
                    href="#live demo"
                    className="text-white font-sans py-3 px-4 rounded-lg hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20"
                    onClick={(e) => handleSectionClick(e, "live demo")}>
                    Live Demo
                  </a>
                  <a
                    href="#download"
                    className="text-white font-sans py-3 px-4 rounded-lg hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20"
                    onClick={(e) => handleSectionClick(e, "download")}>
                    Download
                  </a>
                  <a
                    href="https://github.com/yourusername/stepio"
                    target="_blank"
                    rel="noopener"
                    className="text-white font-sans py-3 px-4 rounded-lg hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20 flex items-center gap-2"
                    onClick={() => setMenuOpen(false)}>
                    <FaGithub className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
        {/* Bottom border line for scroll effect */}
        <motion.div
          className={`absolute left-0 right-0 bottom-0 h-[2px] transition-all duration-300 ${
            scrolled
              ? "bg-gradient-to-r from-primary via-secondary to-primary opacity-80"
              : "opacity-0"
          }`}
          initial={false}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.header>
    </AnimatePresence>
  );
}
