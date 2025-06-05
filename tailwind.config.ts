import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#00FFCC",
        secondary: "#B45FFF",
        accent: "#FFD700",
        white: "#FFFFFF",
        black: "#000000",
        darkBackground: "#0F1420",
        darkCard: "#131824",
        darkBorder: "#2B3044",
        darkMuted: "#8A94A6",
        darkHighlight: "#1D2235",
        success: "#4ADE80",
        warning: "#FF9F0A",
        info: "#42A5F5",
        error: "#FF4A6F",
      },
      backgroundImage: {
        "soft-gradient": "linear-gradient(120deg, #0F1420 0%, #131824 100%)",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "40px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        xxl: "24px",
        xxxl: "30px",
        title: "36px",
      },
      fontFamily: {
        cyber: ['"Orbitron"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 24px 0 #0F1420",
      },
      borderRadius: {
        card: "16px",
        full: "9999px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
