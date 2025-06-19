import NavBar from "../components/NavBar"

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#111111] text-white relative">
      <NavBar />

      {/* Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Terms & Conditions – Habit Mirror
          </h1>
          <div className="space-y-6 text-white/80">
            <p>Effective Date: March 14, 2024</p>

            <p className="text-white/90">
              Welcome to Habit Mirror! These Terms & Conditions outline your
              rights and responsibilities when using our app.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By using Habit Mirror, you agree to these terms. If you
                don&apos;t agree, please don&apos;t use the app.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                2. Using Our App
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least 13 years old to use Habit Mirror</li>
                <li>
                  You&apos;re responsible for maintaining your account security
                </li>
                <li>
                  Don&apos;t misuse our services or try to access them through
                  unauthorized means
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                3. Your Content
              </h2>
              <p>
                The photos you upload remain yours. You give us permission to
                store and display them within the app for your personal use.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                4. Account Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep your account information accurate and up-to-date</li>
                <li>You can delete your account and data at any time</li>
                <li>We may suspend accounts that violate our terms</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                5. Changes to Terms
              </h2>
              <p>
                We may update these terms. We&apos;ll notify you of significant
                changes through the app or email.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                6. &quot;As Is&quot; Service
              </h2>
              <p>
                Habit Mirror is provided &quot;as is&quot; without warranties of
                any kind, either express or implied.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                7. Contact
              </h2>
              <p>
                Questions about these terms? Email us at{" "}
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
