"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import { useSplash } from "@/contexts/SplashContext";

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const { splashCompleted } = useSplash();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (splashCompleted) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setShowHeader(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [splashCompleted]);
  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  );
}
