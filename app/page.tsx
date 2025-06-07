import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center">
      <div className="text-center">
        <Image
          src="/habitmirror.svg"
          alt="HabitMirror Logo"
          width={200}
          height={200}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-white/70">We're working on something amazing</p>
      </div>
    </div>
  )
}

function Old() {
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
        <nav className="backdrop-blur-md bg-black/30 rounded-full px-4 py-3 flex items-center gap-12">
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
              className="text-white/90 hover:text-[#FF9500] transition-colors py-2 px-6 rounded-full"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/90 hover:text-[#FF9500] transition-colors py-2 px-6 rounded-full"
            >
              Terms of Service
            </Link>
          </div>
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium hover:bg-white/20 transition-colors">
            Download
          </button>
        </nav>
      </div>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-24 relative">
        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-6xl font-bold mb-6 max-w-4xl leading-tight">
              See your progress. Stay on track. Feel the difference.
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Checklists don't show how far you've come. HabitMirror captures
              your journey in real snapshots—one photo at a time.
            </p>
          </div>

          {/* iPhone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-[300px]">
              <Image
                src="/camera.png"
                alt="Camera interface"
                width={300}
                height={650}
                className="w-full h-auto"
                priority
              />
              <Image
                src="/mobile.png"
                alt="iPhone frame"
                width={300}
                height={650}
                className="absolute top-0 left-0 w-full h-auto"
                priority
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
