import NavBar from "../components/NavBar"


export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#111111] text-white relative">
      <NavBar />
      {/* Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Privacy Policy – Habit Mirror
          </h1>
          <div className="space-y-6 text-white/80">
            <p>Effective Date: March 14, 2024</p>

            <p className="text-white/90">
              Habit Mirror (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
              respects your privacy. This Privacy Policy explains how we
              collect, use, and protect your information when you use our mobile
              app.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p>We collect the following types of data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Photos you upload – used solely to help you track your habit
                  visually. Stored securely and only accessible to you.
                </li>
                <li>
                  Device data – basic info like device type and OS version to
                  improve app performance.
                </li>
                <li>
                  Account data – if you sign in (e.g., email or Apple ID), we
                  use it to personalize and back up your data.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                2. How We Use Your Data
              </h2>
              <p>We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Display your check-ins and habit progress</li>
                <li>Provide support and improve the app</li>
                <li>Send important updates (only when needed)</li>
              </ul>
              <p className="mt-4">We do not sell your data or show you ads.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                3. Photo Access
              </h2>
              <p>
                Habit Mirror requires camera and photo library access so you can
                check in with a photo. You can disable this anytime in your
                device settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                4. Data Storage & Security
              </h2>
              <p>
                Your data is stored securely and encrypted where applicable. We
                take reasonable precautions to protect it but cannot guarantee
                100% security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                5. Your Rights
              </h2>
              <p>You can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delete your account and all associated data at any time</li>
                <li>Contact us to request data access or deletion</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                6. Changes
              </h2>
              <p>
                We may update this policy. We&apos;ll notify you of major
                changes via the app or email.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                7. Contact
              </h2>
              <p>
                Questions? Email us at{" "}
                <a
                  href="mailto:info@habitmirror.app"
                  className="text-[#FF9500] hover:underline"
                >
                  info@habitmirror.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
