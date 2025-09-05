import Image from 'next/image';
import Navigation from '../components/Navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "LunaSync - AI Women's Health App | Better than Flo + MyFitnessPal + Cal AI Combined",
  description:
    "LunaSync is the AI-powered women's health app that combines period tracking like Flo, nutrition like MyFitnessPal, and smart AI like Cal AI. Sync your cycle, workouts, and nutrition in one app.",
  keywords:
    "women's health app, period tracker like Flo, nutrition app like MyFitnessPal, AI health coach like Cal AI, cycle tracking, fertility tracker, calorie counter, workout planner, hormone tracking",
  openGraph: {
    title: "LunaSync - The Ultimate Women's Health App",
    description:
      "It's like Flo + Cal AI + MyFitnessPal combined! AI-powered period tracking, nutrition, and fitness all in one app.",
    url: 'https://lunasync.app',
    siteName: 'LunaSync',
    images: [
      {
        url: '/images/app-screenshots/nutrition.png',
        width: 280,
        height: 560,
        alt: 'LunaSync App Screenshot'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "LunaSync - AI Women's Health App",
    description:
      'Like Flo + MyFitnessPal + Cal AI combined! Track your cycle, nutrition, and workouts with AI.',
    images: ['/images/app-screenshots/nutrition.png']
  },
  alternates: {
    canonical: 'https://lunasync.app'
  }
};

export default function Home() {
  const appleLink = (
    <a
      href="#"
      className="inline-block transition-all duration-300 hover:opacity-70"
      aria-label="Download LunaSync on the App Store"
    >
      <Image
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        width={160}
        height={42}
      />
    </a>
  );
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="text-gray-800 leading-none tracking-tight">
                <div className="space-y-2">
                  <h1 className="text-5xl font-semibold">Your body changes</h1>
                  <h2 className="text-4xl font-medium">
                    every month—LunaSync adapts with you
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
                  Not just another diet or period tracker. Think{' '}
                  <span className="font-medium text-[#EC4899]">
                    Flo + MyFitnessPal + Cal AI
                  </span>
                  —but built for the girlies.
                </p>
                
                <div className="space-y-3 text-gray-700 max-w-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EC4899] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Snap your meals or log them—we&apos;ll estimate calories & macros (no diet obsession, just balance).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EC4899] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Choose your workout focus (glutes, abs, splits) + location (mat at home or mountain hike—we got you).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EC4899] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Cycle-aware workouts that flex with your energy (cramps, fatigue, or beast mode).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EC4899] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Period & fertility tracking with smart predictions.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EC4899] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Insights that connect fitness, food, and hormones.</p>
                  </div>
                </div>
              </div>
              <div className="flex">{appleLink}</div>
            </div>
          </div>
          {/* Mobile: Simple horizontal layout */}
          <div className="flex justify-center items-center gap-2 px-4 sm:hidden">
            <div className="transform rotate-3">
              <Image
                src="/images/app-screenshots/sports.png"
                alt="LunaSync App Screenshot 1"
                width={80}
                height={160}
                className="w-20 h-auto rounded-lg"
              />
            </div>
            <div className="z-10">
              <Image
                src="/images/app-screenshots/nutrition.png"
                alt="LunaSync App Screenshot 2"
                width={120}
                height={240}
                className="w-28 h-auto"
              />
            </div>
            <div className="transform -rotate-3">
              <Image
                src="/images/app-screenshots/period.png"
                alt="LunaSync App Screenshot 3"
                width={80}
                height={160}
                className="w-20 h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Desktop: Overlapping layout */}
          <div className="hidden sm:flex justify-center">
            <div className="relative w-full max-w-2xl h-[600px]">
              {/* Left background image */}
              <div className="absolute left-0 top-20 z-10 transform rotate-12">
                <Image
                  src="/images/app-screenshots/sports.png"
                  alt="LunaSync App Screenshot 1"
                  width={160}
                  height={320}
                  className="w-32 lg:w-40 h-auto rounded-2xl"
                />
              </div>

              {/* Main centered image */}
              <div className="absolute left-1/2 top-0 z-30 transform -translate-x-1/2">
                <Image
                  src="/images/app-screenshots/nutrition.png"
                  alt="LunaSync App Screenshot 2"
                  width={280}
                  height={560}
                  className="w-56 lg:w-70 h-auto"
                />
              </div>

              {/* Right background image */}
              <div className="absolute right-0 top-20 z-20 transform -rotate-12">
                <Image
                  src="/images/app-screenshots/period.png"
                  alt="LunaSync App Screenshot 3"
                  width={160}
                  height={320}
                  className="w-32 lg:w-40 h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
