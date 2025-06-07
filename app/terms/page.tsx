import Image from "next/image"
import Link from "next/link"

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#111111] text-white relative">
      {/* Gradient Banner */}
      <div
        className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-[#FFB238]/20 via-[#FF9500]/10 to-transparent"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,178,56,0.15) 0%, rgba(255,149,0,0.05) 50%, rgba(255,149,0,0) 100%)",
        }}
      />

      {/* Navigation */}
      <div className="fixed top-6 left-0 right-0 flex justify-center z-50">
        <nav className="backdrop-blur-md bg-black/30 rounded-full px-4 py-1 flex items-center gap-2">
          <Link href="/">
            <Image
              src="/habitmirror.svg"
              alt="HabitMirror Logo"
              width={20}
              height={20}
              className="text-[#FF9500]"
            />
          </Link>
          <div className="flex gap-2 items-center">
            <Link
              href="/privacy-policy"
              className="text-white/90 hover:text-[#FF9500] transition-colors py-1 px-2 rounded-full"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#FF9500] py-1 px-2 rounded-full"
            >
              Terms of Service
            </Link>
          </div>
        </nav>
      </div>

      {/* Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Terms & Conditions – Habit Mirror
          </h1>
          <div className="space-y-6 text-white/80">
            <p>Effective Date: March 14, 2024</p>

            <p className="text-white/90">
              Welcome to Habit Mirror! By using our app, you agree to these
              Terms and Conditions.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                1. Use of the App
              </h2>
              <p>
                You may use Habit Mirror to track your personal habits visually.
                You agree not to misuse the app or upload harmful or illegal
                content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                2. User-Generated Content
              </h2>
              <p>
                You own the photos and content you upload. By uploading, you
                grant us permission to store and display it only within your
                account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                3. Account
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your
                account. Don't share your login with others.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                4. Modifications
              </h2>
              <p>
                We may update or modify the app at any time. We'll notify you of
                major changes that affect your use.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                5. Termination
              </h2>
              <p>
                You can delete your account at any time. We may suspend your
                access if you're found violating these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                6. Liability
              </h2>
              <p>
                Habit Mirror is provided "as is." We are not liable for any loss
                or damage resulting from your use of the app.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                7. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of California, United
                States.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                8. Contact
              </h2>
              <p>
                For any concerns, email{" "}
                <a
                  href="mailto:hello@habitmirror.com"
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
