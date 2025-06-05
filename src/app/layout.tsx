import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient";
import { SplashProvider } from "@/contexts/SplashContext";

export const metadata: Metadata = {
  title: "StepIO - Your Personal Fitness Companion",
  description:
    "Track your daily steps, explore new paths, and achieve your fitness goals with StepIO - the ultimate Android fitness tracking app.",
  keywords:
    "fitness, step counter, health tracking, android app, walking, running, path tracking",
  authors: [{ name: "StepIO Team" }],
  robots: "index, follow",
  openGraph: {
    title: "StepIO - Your Personal Fitness Companion",
    description:
      "Track your daily steps, explore new paths, and achieve your fitness goals with StepIO.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "StepIO - Your Personal Fitness Companion",
    description:
      "Track your daily steps, explore new paths, and achieve your fitness goals with StepIO.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon.png"
          type="image/png"
        />
      </head>
      <body>
        <SplashProvider>
          <LayoutClient>{children}</LayoutClient>
        </SplashProvider>
      </body>
    </html>
  );
}
