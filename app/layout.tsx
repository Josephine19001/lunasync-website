import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LunaSync - AI-Powered Women's Health App",
  description: "AI-powered women's health: sync your nutrition, workouts, and cycle. One app that adapts to your body every day.",
  keywords: "women's health, period tracker, cycle tracker, nutrition app, calorie counter, fitness for women, AI health coach, fertility, weight loss, workout planner",
  authors: [{ name: "LunaSync" }],
  creator: "LunaSync",
  publisher: "LunaSync",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lunasync.app",
    title: "LunaSync - AI-Powered Women's Health App",
    description: "AI-powered women's health: sync your nutrition, workouts, and cycle. One app that adapts to your body every day.",
    siteName: "LunaSync",
  },
  twitter: {
    card: "summary_large_image",
    title: "LunaSync - AI-Powered Women's Health App",
    description: "AI-powered women's health: sync your nutrition, workouts, and cycle. One app that adapts to your body every day.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
