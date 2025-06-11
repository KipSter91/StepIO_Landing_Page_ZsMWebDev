"use client";

import { useState, useEffect } from "react";

const screenshots = [
  {
    title: "Home Dashboard",
    description:
      "Clean and intuitive main interface showing your daily stats and progress",
    image: "/images/stepio-logo.webp", // Replace with actual screenshot if available
    alt: "StepIO Home Screen",
  },
  {
    title: "Path Tracking",
    description:
      "Real-time GPS tracking with beautiful map visualization of your routes",
    image: "/images/stepio-background.png", // Replace with actual screenshot if available
    alt: "StepIO Path Tracking Screen",
  },
  {
    title: "Progress Analytics",
    description:
      "Track your progress over time with detailed charts and insights",
    image: "/images/stepio-logo.webp", // Replace with actual screenshot if available
    alt: "StepIO Analytics Screen",
  },
  {
    title: "Activity Sessions",
    description:
      "Detailed view of your workout sessions with comprehensive statistics",
    image: "/images/hero-icon.png", // Replace with actual screenshot if available
    alt: "StepIO Sessions Screen",
  },
];

export default function Demo() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById("screenshots");
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % screenshots.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <section
        id="screenshots"
        className="py-20 bg-darkBackground relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-cyber">
              See It In <span className="gradient-text">Action</span>
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
      id="demo"
      className="py-20 bg-darkBackground relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-cyber">
            Live <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-xl text-darkMuted max-w-3xl mx-auto font-sans">
            Take a look at the beautiful and intuitive interface designed for
            the best user experience
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone mockup */}
          <div
            className={`lg:w-1/2 flex justify-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}>
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[390px] h-[780px] bg-gradient-to-br from-primary/80 via-darkCard to-secondary/80 rounded-[2.5rem] p-[3px] shadow-2xl shadow-primary/30 border-4 border-primary/30">
                <div className="w-full h-full bg-darkBackground rounded-[2rem] overflow-hidden relative">
                  {/* Glass reflection effect */}
                  <div
                    className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent rounded-t-[2rem] pointer-events-none z-20"
                    style={{ filter: "blur(2px)" }}></div>
                  {/* Camera (notch) */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black/60 rounded-full z-20 flex items-center justify-center shadow-lg border-2 border-white/20">
                    <div className="w-2 h-2 bg-gray-300 rounded-full border border-white/60 shadow-inner"></div>
                  </div>
                  {/* Screenshot content */}
                  <div className="w-full h-full flex items-center justify-center p-1">
                    <video
                      src="/videos/demo-video.mp4"
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover rounded-xl object-center"
                      style={{
                        maxHeight: "720px",
                        aspectRatio: "20/39",
                        clipPath: "inset(0 4% 0 4%)",
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"
                style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
          {/* Feature descriptions */}
          <div
            className={`lg:w-1/2 space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}>
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`card cursor-pointer transition-all duration-500 ${
                  index === activeIndex
                    ? "border-primary/50 bg-darkCard/100 scale-105"
                    : "border-darkBorder hover:border-primary/30"
                }`}
                onClick={() => setActiveIndex(index)}>
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-gradient-to-br from-primary to-secondary"
                        : "bg-darkCard"
                    }`}>
                    <span className="text-white font-bold font-cyber">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 font-cyber gradient-text">
                      {screenshot.title}
                    </h3>
                    <p className="text-darkMuted leading-relaxed font-sans">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Progress indicators */}
            <div className="flex space-x-2 mt-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary scale-125"
                      : "bg-darkMuted hover:bg-primary/60"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
