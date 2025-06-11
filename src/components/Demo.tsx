"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Demo() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [bgScale, setBgScale] = useState(1);
  const [bgOpacity, setBgOpacity] = useState(0.1);
  const [bgBlur, setBgBlur] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsVideoPlaying(true);
            // Start video when section comes into view
            if (videoRef.current) {
              videoRef.current.play().catch(console.error);
            }
          } else {
            setIsVideoPlaying(false);
            // Pause video when section goes out of view
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        },
        { threshold: 0.3 } // Video starts/stops when 30% of section is visible
      );

      const element = document.getElementById("live demo");
      if (element) {
        observer.observe(element);
      }

      // Scroll-based background zoom effect (scale, opacity, blur)
      const onScroll = () => {
        const demoSection = document.getElementById("live demo");
        if (!demoSection) return;
        const rect = demoSection.getBoundingClientRect();
        // How much the demo section is scrolled out of view (0 = top, 1 = bottom)
        const scrollProgress = Math.min(
          Math.max(-rect.top / rect.height, 0),
          1
        );
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

      return () => {
        if (element) {
          observer.unobserve(element);
        }
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);
  if (!mounted) {
    return (
      <section
        id="live demo"
        className="py-20 bg-darkBackground relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-cyber">
              Live <span className="gradient-text">Demo</span>
            </h2>
            <p className="text-xl text-darkMuted max-w-3xl mx-auto font-sans">
              Take a look at the beautiful and intuitive interface designed for
              the best user experience
            </p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section
      id="live demo"
      className="py-20 bg-darkBackground relative overflow-hidden">
      {" "}
      {/* Gradient background elements with random movement */}
      <div className="absolute inset-0 pointer-events-none">
        {" "}
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 sm:top-10 sm:left-10 sm:translate-x-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, 120, -80, 150, -60, 90, 0],
            y: [0, -100, 140, -80, 120, -50, 0],
            scale: [1, 1.3, 0.7, 1.2, 0.8, 1.1, 1],
            rotate: [0, 180, -90, 270, 45, -135, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-4 right-1/2 translate-x-1/2 sm:bottom-10 sm:right-10 sm:translate-x-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-secondary/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -130, 110, -90, 160, -70, 0],
            y: [0, 80, -120, 100, -70, 130, 0],
            scale: [1, 0.6, 1.4, 0.9, 1.3, 0.75, 1],
            rotate: [0, -150, 120, -60, 200, -90, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
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
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 gradient-text font-cyber">
            Live <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-darkMuted mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto font-sans leading-relaxed px-2 sm:px-0">
            Take a look at the beautiful and intuitive interface designed for
            the best user experience
          </p>
        </div>
        <div className="flex justify-center mt-0">
          {/* Phone mockup - centered */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="relative">
              {/* Phone frame - responsive sizing */}
              <div className="relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] lg:w-[390px] lg:h-[780px] bg-gradient-to-br from-primary/80 via-darkCard to-secondary/80 rounded-[2rem] sm:rounded-[2.2rem] lg:rounded-[2.5rem] p-[2px] sm:p-[2.5px] lg:p-[3px] shadow-2xl shadow-primary/30 border-2 sm:border-3 lg:border-4 border-primary/30">
                <div className="w-full h-full bg-darkBackground rounded-[1.8rem] sm:rounded-[2rem] lg:rounded-[2rem] overflow-hidden relative">
                  {/* Glass reflection effect */}
                  <div
                    className="absolute top-0 left-0 w-full h-16 sm:h-18 lg:h-20 bg-gradient-to-b from-white/30 to-transparent rounded-t-[1.8rem] sm:rounded-t-[2rem] lg:rounded-t-[2rem] pointer-events-none z-20"
                    style={{ filter: "blur(2px)" }}></div>
                  {/* Camera (notch) */}
                  <div className="absolute top-3 sm:top-3.5 lg:top-4 left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 bg-black/60 rounded-full z-20 flex items-center justify-center shadow-lg border-2 border-white/20">
                    <div className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-gray-300 rounded-full border border-white/60 shadow-inner"></div>
                  </div>{" "}
                  {/* Screenshot content */}
                  <div className="w-full h-full flex items-center justify-center p-1">
                    <video
                      ref={videoRef}
                      src="/videos/demo-video.mp4"
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-xl object-center video-clip-mobile sm:video-clip-tablet lg:video-clip-desktop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
