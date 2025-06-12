/**
 * StepIO Landing Page - Footer Component
 *
 * Copyright (c) 2025 Zsolt Márku (KipSter91)
 * All rights reserved. This code is proprietary and confidential.
 * Unauthorized reproduction or distribution is prohibited.
 */

"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-darkBackground border-t border-darkBorder py-8 lg:py-6 mt-0">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span className="text-xl font-cyber font-bold gradient-text">
              StepIO
            </span>
            <span className="text-darkMuted font-sans text-sm lg:text-base">
              © {new Date().getFullYear()} Zsolt Márku. All rights reserved.
            </span>
          </div>
          <div className="flex items-center text-darkMuted font-sans text-sm lg:text-base">
            <span className="hidden md:inline mx-3">|</span>
            <span>Developed by</span>
            <a
              href="https://www.zsoltmarku.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center hover:opacity-80 transition-opacity duration-200">
              <img
                src="/images/zsmwebdev.webp"
                alt="ZsMWebDev logo"
                className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 rounded-full object-cover border border-primary/40 shadow-sm hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>{" "}
        <div className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6 items-center">
          <a
            href="#features"
            className="text-darkMuted hover:text-primary font-sans transition-all text-sm lg:text-base">
            Features
          </a>
          <a
            href="#live demo"
            className="text-darkMuted hover:text-primary font-sans transition-all text-sm lg:text-base">
            Live Demo
          </a>
          <a
            href="#download"
            className="text-darkMuted hover:text-primary font-sans transition-all text-sm lg:text-base">
            Download
          </a>
          <a
            href="https://github.com/KipSter91/StepIO_Android_App_ZsMWebDev.git"
            target="_blank"
            rel="noopener"
            className="text-darkMuted hover:text-primary font-sans transition-all flex items-center gap-1 text-sm lg:text-base">
            <FaGithub className="w-4 h-4 lg:w-5 lg:h-5" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
