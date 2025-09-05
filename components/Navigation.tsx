'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="relative px-2 sm:px-4 py-4 sm:py-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="LunaSync Logo"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 mr-1"
            />
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#EC4899]">
              LunaSync
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-4 lg:space-x-8 text-sm lg:text-base">
          <Link href="/terms" className="text-gray-700">
            Terms
          </Link>
          <Link href="/privacy" className="text-gray-700">
            Privacy
          </Link>
          <Link href="/contact" className="text-gray-700">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button & App Store Link */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="scale-75 sm:scale-100 hidden sm:block">{appleLink}</div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg sm:hidden z-50">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/terms"
              className="block text-gray-700 hover:text-[#EC4899] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="block text-gray-700 hover:text-[#EC4899] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-[#EC4899] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
