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
  title: "LunaSync - AI-Powered Women's Health App | Like Flo + MyFitnessPal + Cal AI Combined",
  description: "LunaSync combines the best of Flo period tracking, MyFitnessPal nutrition, and Cal AI coaching. The ultimate AI-powered women's health app that syncs your cycle, workouts, and nutrition.",
  keywords: "women's health app like Flo, nutrition app like MyFitnessPal, AI health coach like Cal AI, period tracker, cycle tracking, fertility tracker, calorie counter, fitness for women, hormone tracking, menstrual cycle app, reproductive health",
  authors: [{ name: "LunaSync Team" }],
  creator: "LunaSync",
  publisher: "LunaSync",
  applicationName: "LunaSync",
  category: "Health & Fitness",
  classification: "Women's Health App",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lunasync.app",
    title: "LunaSync - Like Flo + MyFitnessPal + Cal AI Combined",
    description: "The AI-powered women's health app that combines period tracking like Flo, nutrition like MyFitnessPal, and coaching like Cal AI. Sync your cycle, workouts, and nutrition in one place.",
    siteName: "LunaSync",
    images: [
      {
        url: "/images/app-screenshots/nutrition.png",
        width: 280,
        height: 560,
        alt: "LunaSync App - Women's Health Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LunaSync - AI Women's Health App",
    description: "Like Flo + MyFitnessPal + Cal AI combined! Track your cycle, nutrition, and workouts with AI.",
    images: ["/images/app-screenshots/nutrition.png"],
    creator: "@lunasync",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  alternates: {
    canonical: 'https://lunasync.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
