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
    title: "Activity Sessions",
    description:
      "Detailed view of your workout sessions with comprehensive statistics",
    image: "/images/hero-icon.png", // Replace with actual screenshot if available
    alt: "StepIO Sessions Screen",
  },
  {
    title: "Progress Analytics",
    description:
      "Track your progress over time with detailed charts and insights",
    image: "/images/stepio-logo.webp", // Replace with actual screenshot if available
    alt: "StepIO Analytics Screen",
  },
];

export default function Screenshots() {
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
      id="screenshots"
      className="py-20 bg-darkBackground relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-cyber">
            See It In <span className="gradient-text">Action</span>
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
              <div className="relative w-80 h-[640px] bg-darkCard rounded-[3rem] p-2 shadow-card">
                <div className="w-full h-full bg-darkBackground rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone notch */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-darkCard rounded-full z-10"></div>
                  {/* Screenshot content */}
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="text-center space-y-6">
                      {/* Mock app interface */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mx-auto flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white font-cyber">
                        StepIO
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-darkCard/90 rounded-xl p-4 shadow-card">
                          <div className="text-3xl font-bold gradient-text font-cyber">
                            8,432
                          </div>
                          <div className="text-darkMuted font-sans">
                            Today's Steps
                          </div>
                        </div>
                        <div className="bg-darkCard/90 rounded-xl p-4 shadow-card">
                          <div className="text-xl font-bold text-accent font-cyber">
                            2.1 km
                          </div>
                          <div className="text-darkMuted font-sans">
                            Distance
                          </div>
                        </div>
                        <div className="bg-darkCard/90 rounded-xl p-4 shadow-card">
                          <div className="text-xl font-bold text-success font-cyber">
                            284 cal
                          </div>
                          <div className="text-darkMuted font-sans">
                            Calories
                          </div>
                        </div>
                      </div>
                    </div>
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
