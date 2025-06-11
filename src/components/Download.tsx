"use client";

import { useState, useEffect } from "react";

export default function Download() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("download");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleDownload = () => {
    // This would link to your actual APK file
    // For now, it shows an alert
    alert(
      "APK download would start here!\n\nIn a real deployment, this would download the StepIO.apk file from your server."
    );
  };

  const handleSourceCode = () => {
    // Link to your GitHub repository
    window.open("https://github.com/yourusername/stepio", "_blank");
  };
  return (
    <section
      id="download"
      className="bg-section-darker py-16 sm:py-20 relative overflow-hidden">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-8 sm:mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text font-cyber">
            Ready to Start Your <span className="gradient-text">Journey</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-darkMuted mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto font-sans leading-relaxed px-2 sm:px-0">
            Download StepIO now and begin tracking your fitness goals with
            precision and style
          </p>{" "}
          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button
              onClick={handleDownload}
              className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-cyber w-full sm:w-auto min-w-[180px] sm:min-w-[200px] hover:shadow-lg transform hover:scale-105 transition-all duration-300 rounded-[16px]">
              Download APK
            </button>
            <button
              onClick={handleSourceCode}
              className="btn-secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-cyber w-full sm:w-auto min-w-[180px] sm:min-w-[200px] hover:shadow-lg transition-all duration-300 rounded-[16px]">
              View Source
            </button>
          </div>
          {/* App requirements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-primary mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
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
              </div>
              <h3 className="font-semibold text-white mb-2 font-cyber">
                Android 7.0+
              </h3>
              <p className="text-darkMuted text-sm font-sans">
                Compatible with most modern Android devices
              </p>
            </div>
            <div className="card text-center">
              <div className="text-primary mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2 font-cyber">
                Privacy First
              </h3>
              <p className="text-darkMuted text-sm font-sans">
                Your data stays on your device
              </p>
            </div>
            <div className="card text-center">
              <div className="text-primary mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
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
              <h3 className="font-semibold text-white mb-2 font-cyber">
                Low Battery
              </h3>
              <p className="text-darkMuted text-sm font-sans">
                Optimized for minimal battery usage
              </p>
            </div>
          </div>
          {/* Installation note */}
          <div className="mt-8 max-w-2xl mx-auto">
            {/* reduced top margin */}
            <div className="bg-darkCard/90 border border-info/30 rounded-xl p-6 shadow-card">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-info mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-left">
                  <h4 className="font-semibold text-info mb-2 font-cyber">
                    Installation Instructions
                  </h4>
                  <ol className="text-sm text-darkMuted space-y-1 list-decimal list-inside font-sans">
                    <li>
                      Enable "Install from unknown sources" in your Android
                      settings
                    </li>
                    <li>Download the APK file to your device</li>
                    <li>
                      Open the downloaded file and follow the installation
                      prompts
                    </li>
                    <li>
                      Grant necessary permissions for step counting and location
                      access
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
