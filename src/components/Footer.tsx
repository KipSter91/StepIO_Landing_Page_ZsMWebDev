"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-darkBackground border-t border-darkBorder py-10 mt-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-xl font-cyber font-bold gradient-text">
            StepIO
          </span>
          <span className="text-darkMuted font-sans">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        <div className="flex gap-6 items-center">
          <a
            href="#features"
            className="text-darkMuted hover:text-primary font-sans transition-all">
            Features
          </a>
          <a
            href="#live demo"
            className="text-darkMuted hover:text-primary font-sans transition-all">
            Live Demo
          </a>
          <a
            href="#download"
            className="text-darkMuted hover:text-primary font-sans transition-all">
            Download
          </a>{" "}
          <a
            href="https://github.com/yourusername/stepio"
            target="_blank"
            rel="noopener"
            className="text-darkMuted hover:text-primary font-sans transition-all flex items-center gap-1">
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
