import Navigation from '../../components/Navigation';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="p-4 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6 sm:mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: September 2025</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We collect several types of information to provide and improve our
              services:
            </p>

            <h3 className="text-xl font-semibold text-black mb-3">
              Health and Personal Data
            </h3>
            <ul className="text-gray-700 mb-6 list-disc list-inside space-y-2">
              <li>
                Menstrual cycle information (cycle dates, symptoms, moods)
              </li>
              <li>
                Nutrition data (food intake, dietary preferences, meal photos)
              </li>
              <li>
                Fitness information (workout preferences, activity levels,
                goals)
              </li>
              <li>Body measurements and health metrics</li>
              <li>Age, height, weight, and other demographic information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="text-gray-700 mb-6 list-disc list-inside space-y-2">
              <li>Provide personalized health recommendations and insights</li>
              <li>Track your menstrual cycle and predict future dates</li>
              <li>Generate AI-powered nutrition and fitness plans</li>
              <li>Analyze food photos for nutritional information</li>
              <li>Send you relevant notifications and reminders</li>
              <li>Improve our AI algorithms and app functionality</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>
                Process subscription payments and manage your free trial period
              </li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
              <p className="text-gray-700 font-semibold">
                <strong>Important AI Disclaimer:</strong> All AI-generated
                suggestions and recommendations provided by LunaSync are for
                informational purposes only and are subject to confirmation from
                a qualified healthcare professional. Our AI technology is
                designed to assist and inform, not to replace professional
                medical advice, diagnosis, or treatment.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-4">
              3. Data Security and Protection
            </h2>
            <p className="text-gray-700 mb-6">
              We implement industry-standard security measures to protect your
              personal information, including encryption of sensitive health
              data both in transit and at rest. Your health information is
              stored securely and access is limited to authorized personnel
              only.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal health data. We may share information
              in the following circumstances:
            </p>
            <ul className="text-gray-700 mb-6 list-disc list-inside space-y-2">
              <li>With your explicit consent</li>
              <li>With healthcare providers you choose to connect with</li>
              <li>
                With service providers who help us operate the app (under strict
                confidentiality agreements)
              </li>
              <li>When required by law or to protect our legal rights</li>
              <li>In aggregated, anonymized form for research purposes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mb-4">
              5. Your Privacy Rights
            </h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="text-gray-700 mb-6 list-disc list-inside space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of certain data processing activities</li>
              <li>Request information about how your data is used</li>
              <li>Withdraw consent at any time</li>
              <li>File a complaint with relevant privacy authorities</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mb-4">
              6. Data Retention
            </h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information for as long as necessary to
              provide our services and fulfill the purposes described in this
              policy. You can request deletion of your data at any time, and we
              will delete it within 30 days unless legally required to retain it
              longer.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              7. International Data Transfers
            </h2>
            <p className="text-gray-700 mb-6">
              Your information may be processed and stored in countries other
              than your own. We ensure appropriate safeguards are in place to
              protect your data when it is transferred internationally.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              8. Children&rsquo;s Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              LunaSync is not intended for use by individuals under 13 years of
              age. We do not knowingly collect personal information from
              children under 13. If we become aware of such collection, we will
              take steps to delete the information promptly.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              9. Third-Party Integrations
            </h2>
            <p className="text-gray-700 mb-6">
              Our app may integrate with third-party health platforms (like
              Apple Health or Google Fit) with your permission. These
              integrations are governed by the privacy policies of those third
              parties in addition to this policy.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new policy in
              the app and updating the &quot;Last updated&quot; date. Your
              continued use of the app after such changes constitutes acceptance
              of the updated policy.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or how we
              handle your personal information, please contact us at
              team@lunasync.app or through the contact form in the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
