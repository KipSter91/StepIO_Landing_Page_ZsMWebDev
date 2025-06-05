"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SplashContextType {
  splashCompleted: boolean;
  setSplashCompleted: (completed: boolean) => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export function SplashProvider({ children }: { children: ReactNode }) {
  const [splashCompleted, setSplashCompleted] = useState(false);

  return (
    <SplashContext.Provider value={{ splashCompleted, setSplashCompleted }}>
      {children}
    </SplashContext.Provider>
  );
}

export function useSplash() {
  const context = useContext(SplashContext);
  if (context === undefined) {
    throw new Error("useSplash must be used within a SplashProvider");
  }
  return context;
}
