import Navigation from '../../components/Navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact LunaSync - AI Women\'s Health App Support',
  description: 'Contact the LunaSync team for support with our AI-powered women\'s health app. Get help with period tracking, nutrition planning, and cycle-synced workouts.',
  keywords: 'LunaSync contact, women\'s health app support, period tracker help, fitness app contact, AI health coach support',
  openGraph: {
    title: 'Contact LunaSync - Women\'s Health App Support',
    description: 'Get in touch with the LunaSync team for support with our AI-powered women\'s health app.',
    url: 'https://lunasync.app/contact',
    siteName: 'LunaSync',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lunasync.app/contact',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about LunaSync? We'd love to hear from you.
            </p>
          </div>
          
          <div className="pt-8">
            <a
              href="mailto:team@lunasync.app"
              className="inline-flex items-center px-8 py-4 bg-[#EC4899] text-white font-medium text-lg rounded-lg hover:bg-[#db3a87] transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}