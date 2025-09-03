import Navigation from '../../components/Navigation';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="p-4 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6 sm:mb-8">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">Last updated: September 2025</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-6">
              By downloading, accessing, or using the LunaSync mobile
              application (&quot;App&quot;), you agree to be bound by these
              Terms of Service (&quot;Terms&quot;). If you do not agree to these
              Terms, please do not use our App.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-700 mb-6">
              LunaSync is an AI-powered women&rsquo;s health application that
              provides personalized nutrition guidance, workout plans, and
              menstrual cycle tracking. The App uses artificial intelligence to
              analyze your health data and provide recommendations.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              3. Health Information Disclaimer
            </h2>
            <p className="text-gray-700 mb-4">
              The information and recommendations provided by LunaSync are for
              educational and informational purposes only and are not intended
              as medical advice, diagnosis, or treatment. Always consult with
              qualified healthcare professionals before making any
              health-related decisions.
            </p>
            <p className="text-gray-700 mb-6 font-semibold bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <strong>Important:</strong> All AI-generated suggestions and
              recommendations are subject to confirmation from a qualified
              healthcare professional. LunaSync&rsquo;s AI is designed to assist
              and inform, not to replace professional medical advice.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="text-gray-700 mb-6 list-disc list-inside space-y-2">
              <li>
                Provide accurate and truthful information when using the App
              </li>
              <li>Use the App only for its intended purposes</li>
              <li>Maintain the security of your account information</li>
              <li>Not share your account with others</li>
              <li>Not attempt to reverse engineer or modify the App</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mb-4">
              5. Privacy and Data Protection
            </h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Our collection, use, and
              protection of your personal information is governed by our Privacy
              Policy, which is incorporated into these Terms by reference.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-6">
              The App and its content, including but not limited to text,
              graphics, logos, images, and software, are owned by LunaSync and
              are protected by copyright, trademark, and other intellectual
              property laws.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-6">
              LunaSync shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of profits, data, or other intangible losses
              resulting from your use of the App.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              8. Subscription and Payment Terms
            </h2>
            <p className="text-gray-700 mb-4">
              LunaSync is a paid application that offers a free trial period.
              After the free trial expires, continued use requires a paid
              subscription.
            </p>
            <p className="text-gray-700 mb-6">
              Subscription fees are billed in advance and are non-refundable
              except as required by applicable law. You may cancel your
              subscription at any time through your App Store account settings.
              Your subscription will remain active until the end of the current
              billing period.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              9. Termination
            </h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your access to the App at any time,
              with or without cause, and with or without notice. Upon
              termination, your right to use the App will cease immediately.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the new Terms within the App.
              Your continued use of the App after such changes constitutes
              acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-4">
              11. Contact Information
            </h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please
              contact us at team@lunasync.app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
