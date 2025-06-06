"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    title: "Step Tracking",
    description:
      "Accurate step counting with advanced algorithms and real-time updates throughout your day.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "Path Tracking",
    description:
      "Map your routes with GPS precision and visualize your walking and running paths in real-time.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Progress Analytics",
    description:
      "Detailed statistics and progress tracking to help you reach your daily fitness goals.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Background Service",
    description:
      "Continuous tracking even when the app is in the background, ensuring no steps are missed.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Health Focus",
    description:
      "Calorie estimation, health insights, and wellness recommendations based on your activity.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Mobile Optimized",
    description:
      "Native Android experience with smooth performance and intuitive user interface.",
  },
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const constraintsRef = useRef(null);
  // Detect mobile device for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();

    // Throttle resize events for better performance
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);
  // Memoize virtual slides to prevent unnecessary recalculations
  const virtualSlides = useMemo(() => {
    const slides = [];
    // Reduce slide count on mobile for better performance
    const slideRange = isMobile ? 2 : 3;
    for (let i = -slideRange; i <= slideRange; i++) {
      const virtualIndex = currentIndex + i;
      const featureIndex =
        ((virtualIndex % features.length) + features.length) % features.length;
      slides.push({
        virtualIndex,
        feature: features[featureIndex],
        key: `${virtualIndex}-${featureIndex}`,
      });
    }
    return slides;
  }, [currentIndex, isMobile]);

  // Optimize drag handler
  const handleDragEnd = useCallback(
    (event: any, info: PanInfo) => {
      const threshold = isMobile ? 30 : 50;
      if (info.offset.x > threshold) {
        setCurrentIndex((prev) => prev - 1);
      } else if (info.offset.x < -threshold) {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [isMobile]
  );

  const goToSlide = useCallback(
    (index: number) => {
      const currentFeatureIndex =
        ((currentIndex % features.length) + features.length) % features.length;
      const targetIndex = currentIndex + (index - currentFeatureIndex);
      setCurrentIndex(targetIndex);
    },
    [currentIndex]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="features"
      className="bg-section-darker py-20 relative overflow-hidden">
      {" "}
      {/* Decorative blurred shapes background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Optimized background shapes using theme colors */}
        <div
          className="absolute left-[-80px] bottom-[-120px] w-72 h-72 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-full"
          style={{ filter: "blur(80px)" }}
        />
        <div
          className="absolute right-[-60px] top-[-60px] w-56 h-56 bg-gradient-to-bl from-primary/30 to-info/20 rounded-full"
          style={{ filter: "blur(60px)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full"
          style={{ filter: "blur(70px)" }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div
          className={`text-center mb-8 sm:mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text font-cyber">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg sm:text-xl text-darkMuted max-w-3xl mx-auto font-sans leading-relaxed">
            Everything you need to track, monitor, and improve your daily
            fitness activities
          </p>
        </div>
        {/* 3D Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {" "}
          {/* Main Carousel Viewport */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] perspective-1000 overflow-hidden flex items-center justify-center">
            <motion.div
              ref={constraintsRef}
              className="relative w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={isMobile ? 0.1 : 0.2}
              onDragEnd={handleDragEnd}>
              {virtualSlides.map(({ virtualIndex, feature, key }) => {
                // Calculate position relative to current index
                const offset = virtualIndex - currentIndex;
                const absOffset = Math.abs(offset);

                // Mobile-optimized parameters
                const baseAngle = isMobile ? 25 : 35;
                const angle = (offset * baseAngle * Math.PI) / 180;
                const R = isMobile ? 280 : 390;

                // Arc positions
                const x = R * Math.sin(angle);
                const y = R * (1 - Math.cos(angle)) * (isMobile ? 0.3 : 0.5);
                const rotateY = offset * baseAngle;
                const z =
                  absOffset === 0
                    ? isMobile
                      ? 40
                      : 60
                    : (isMobile ? 20 : 30) -
                      Math.abs(offset) * (isMobile ? 20 : 40);
                const scale =
                  absOffset === 0
                    ? 1
                    : Math.max(
                        isMobile ? 0.75 : 0.65,
                        1 - absOffset * (isMobile ? 0.1 : 0.13)
                      );
                const opacity =
                  absOffset === 0
                    ? 1
                    : Math.max(
                        isMobile ? 0.4 : 0.22,
                        1 - absOffset * (isMobile ? 0.15 : 0.22)
                      );
                const isVisible3D = absOffset <= (isMobile ? 2 : 3);
                return (
                  <motion.div
                    key={key}
                    className={`absolute w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96 cursor-pointer ${
                      isVisible3D ? "block" : "hidden"
                    }`}
                    style={{
                      transformStyle: isMobile ? "flat" : "preserve-3d",
                      transformOrigin: "center center",
                      zIndex: absOffset === 0 ? 20 : 10 - absOffset,
                      willChange: isMobile ? "transform" : "transform",
                    }}
                    animate={{
                      x,
                      y,
                      z,
                      rotateY,
                      rotateX: Math.abs(offset) * (isMobile ? 3 : 5),
                      rotateZ: offset * (isMobile ? 1 : 1.5),
                      scale,
                      opacity,
                    }}
                    transition={{
                      duration: isMobile ? 0.6 : 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    onClick={() =>
                      goToSlide(
                        ((virtualIndex % features.length) + features.length) %
                          features.length
                      )
                    }>
                    {" "}
                    {/* Card with enhanced border for Active */}
                    <div className="w-full h-full relative">
                      {/* Enhanced gradient border for active card */}
                      {absOffset === 0 && (
                        <>
                          {/* Animated gradient border */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-75 animate-pulse"></div>
                          <div className="absolute inset-[1px] rounded-2xl bg-darkCard"></div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-sm"></div>
                        </>
                      )}

                      {/* Main card content */}
                      <div
                        className={`${
                          absOffset === 0
                            ? "absolute inset-[1px]"
                            : "absolute inset-0"
                        } rounded-2xl shadow-2xl ${
                          absOffset === 0
                            ? "bg-gradient-to-br from-darkCard via-darkCard/95 to-darkCard"
                            : "bg-gradient-to-br from-darkCard/80 to-darkCard/60 backdrop-blur-md border border-darkBorder/50"
                        }`}
                        style={
                          absOffset === 0
                            ? {
                                backgroundImage: `linear-gradient(rgba(19, 24, 36, 0.85), rgba(19, 24, 36, 0.9)), url('/images/stepio-background.png')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundBlendMode: "overlay",
                              }
                            : {}
                        }>
                        {" "}
                        {/* Overlay for non-active cards */}
                        {absOffset !== 0 && (
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 rounded-2xl pointer-events-none" />
                        )}
                        {/* Card content */}
                        <div className="relative p-6 sm:p-8 h-full flex flex-col justify-center items-center text-center z-10">
                          <motion.div
                            className="mb-6 relative text-primary"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}>
                            <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
                            <div className="relative p-4 bg-primary/20 rounded-full border border-primary/30 backdrop-blur-sm">
                              {feature.icon}
                            </div>
                          </motion.div>

                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 font-cyber gradient-text">
                            {feature.title}
                          </h3>

                          <p
                            className={`text-xs sm:text-sm md:text-base leading-relaxed font-sans ${
                              absOffset === 0
                                ? "text-gray-200"
                                : "text-darkMuted"
                            }`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-0 right-0 h-8 bg-gradient-to-b from-white/5 to-transparent blur-sm rounded-b-2xl transform scale-y-[-1]" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>{" "}
          {/* Navigation Dots */}
          <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {features.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  ((currentIndex % features.length) + features.length) %
                    features.length ===
                  index
                    ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                    : "bg-darkBorder hover:bg-darkMuted"
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          {/* Navigation Arrows */}
          <div className={`${isMobile ? "hidden" : "block"}`}>
            <motion.button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-darkCard/80 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-darkCard hover:border-primary/50 transition-all duration-300 shadow-lg"
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              initial={{ scale: 1, x: 0 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-darkCard/80 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-darkCard hover:border-primary/50 transition-all duration-300 shadow-lg"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              initial={{ scale: 1, x: 0 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>{" "}
          {/* Progress Bar */}
          <div className="mt-4 sm:mt-6 mx-auto max-w-xs">
            <div className="h-1 bg-darkBorder rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                animate={{
                  width: `${
                    (((((currentIndex % features.length) + features.length) %
                      features.length) +
                      1) /
                      features.length) *
                    100
                  }%`,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <p className="text-center text-xs text-darkMuted mt-2">
              {(((currentIndex % features.length) + features.length) %
                features.length) +
                1}{" "}
              of {features.length}
            </p>
          </div>
        </div>
        {/* Technical note about memory optimization */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block bg-darkCard/90 border border-warning/40 rounded-xl p-4 sm:p-6 max-w-2xl shadow-card mx-4">
            <div className="flex items-center justify-center mb-3">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-warning mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <span className="text-warning font-semibold font-cyber text-sm sm:text-base">
                Developer Note
              </span>
            </div>
            <p className="text-xs sm:text-sm text-darkMuted font-sans leading-relaxed">
              This app is currently in beta. Due to memory optimization
              challenges with background services, extended usage (1+ month) may
              cause performance issues. Perfect for testing and learning React
              Native development!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
