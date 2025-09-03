import Image from 'next/image';
import Navigation from '../components/Navigation';

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
            <div className="space-y-6">
              <div className="text-gray-800 leading-none tracking-tight">
                <div className="space-y-2">
                  <h1 className="text-5xl font-semibold">Your health</h1>
                  <h2 className="text-4xl font-medium">
                    is more than calories & workouts
                  </h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
                LunaSync is the AI-powered women&apos;s health app that helps
                you sync your nutrition, workouts, and cycle.
              </p>
              <div className="flex">{appleLink}</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-[600px]">
              {/* Left background image */}
              <div className="absolute left-0 top-20 z-10 transform rotate-12">
                <Image
                  src="/images/app-screenshots/5.png"
                  alt="LunaSync App Screenshot 1"
                  width={160}
                  height={320}
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Main centered image */}
              <div className="absolute left-1/2 top-0 z-30 transform -translate-x-1/2">
                <Image
                  src="/images/app-screenshots/nutrition.png"
                  alt="LunaSync App Screenshot 2"
                  width={280}
                  height={560}
                  className="w-full h-auto"
                />
              </div>

              {/* Right background image */}
              <div className="absolute right-0 top-20 z-20 transform -rotate-12">
                <Image
                  src="/images/app-screenshots/3.png"
                  alt="LunaSync App Screenshot 3"
                  width={160}
                  height={320}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
