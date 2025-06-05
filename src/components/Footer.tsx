"use client";

import React from "react";

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
            href="#screenshots"
            className="text-darkMuted hover:text-primary font-sans transition-all">
            Screenshots
          </a>
          <a
            href="#download"
            className="text-darkMuted hover:text-primary font-sans transition-all">
            Download
          </a>
          <a
            href="https://github.com/yourusername/stepio"
            target="_blank"
            rel="noopener"
            className="text-darkMuted hover:text-primary font-sans transition-all flex items-center gap-1">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
