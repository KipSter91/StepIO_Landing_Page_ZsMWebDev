"use client";

import { useState, useEffect, useRef } from "react";

export default function Demo() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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

      return () => {
        if (element) {
          observer.unobserve(element);
        }
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
      <div className="container mx-auto px-6">
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
