"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedText from "./components/AnimatedText"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import ContactModal from "./components/ContactModal"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const demoImages = ["/demo1.png", "/demo2.png", "/demo3.png"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % demoImages.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [demoImages.length])

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <div className="fixed top-6 left-0 right-0 flex justify-center z-50">
        <nav className="backdrop-blur-md bg-black/30 rounded-full px-4 py-3 flex items-center justify-between w-[90%] max-w-lg relative">
          <Link href="/" className="z-20">
            <Image
              src="/habitmirror.svg"
              alt="HabitMirror Logo"
              width={30}
              height={30}
              className="text-[#FF9500]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 items-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-white/90 hover:text-[#FF9500] transition-colors py-2 px-6 rounded-full text-sm"
            >
              Contact
            </button>
            <Link
              href="/privacy-policy"
              className="text-white/90 hover:text-[#FF9500] transition-colors py-2 px-6 rounded-full text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/90 hover:text-[#FF9500] transition-colors py-2 px-6 rounded-full text-sm"
            >
              Terms of Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-20 text-white/90 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Mobile Menu Overlay */}
          <motion.div
            initial={false}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              pointerEvents: isMenuOpen ? "auto" : "none",
            }}
            className="absolute top-0 left-0 right-0 backdrop-blur-md bg-black/95 rounded-2xl py-16 px-4 flex flex-col items-center gap-4 md:hidden"
          >
            <button
              onClick={() => {
                setIsContactOpen(true)
                setIsMenuOpen(false)
              }}
              className="text-white/90 hover:text-[#FF9500] transition-colors py-2 px-6 rounded-full text-lg"
            >
              Contact
            </button>
            <Link
              href="/privacy-policy"
              className="text-white/90 hover:text-[#FF9500] transition-colors py-2 px-6 rounded-full text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/90 hover:text-[#FF9500] transition-colors py-2 px-6 rounded-full text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms of Service
            </Link>
          </motion.div>
        </nav>
      </div>
      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex items-center justify-center px-4 md:px-8 lg:px-12 min-h-screen">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end md:items-center relative pb-0">
            {/* Phone Mockup */}
            <div className="relative w-full max-w-[360px] mx-auto translate-y-8 md:translate-y-20">
              {/* Screen Content */}
              <div className="absolute top-[3%] left-[3%] right-[3%] bottom-[1%] rounded-[38px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full bg-black"
                  >
                    <Image
                      src={demoImages[currentImageIndex]}
                      alt="HabitMirror Demo"
                      fill
                      className="object-cover scale-[0.95] origin-center"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Phone Frame */}
              <Image
                src="/mobile.png"
                alt="HabitMirror App"
                width={400}
                height={600}
                className="w-full h-auto relative z-10"
                priority
              />
            </div>

            {/* Content */}
            <div className="text-left md:self-center pb-8 md:pb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
              >
                You&apos;ll wish you started 3 months ago. One photo a day —
                that&apos;s all it takes.
              </motion.h1>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="inline-flex items-center justify-center bg-white text-black px-6 py-2.5 rounded-xl hover:bg-white/90 transition-colors text-sm font-medium">
                  <Image
                    src="/apple_black.svg"
                    alt="Apple Logo"
                    width={14}
                    height={14}
                    className="mr-2"
                  />
                  Coming soon for iOS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Sections */}
        <div className="flex flex-col gap-48 md:gap-64 px-4 md:px-8 lg:px-12 py-48 md:py-64 bg-[#111111]">
          {/* Section 1 */}
          <div className="max-w-7xl mx-auto">
            <AnimatedText>
              Most people never realize how far they&apos;ve come because they
              never track it — capture your daily effort with one photo, and
              finally see the transformation you&apos;ve been blind to.
            </AnimatedText>
          </div>

          {/* Section 2 */}
          <div className="max-w-7xl mx-auto">
            <AnimatedText>
              Six months from now, you&apos;ll either have a gallery full of
              progress or nothing but excuses — start now so you never have to
              wonder what could&apos;ve happened if you stayed consistent.
            </AnimatedText>
          </div>

          {/* Section 3 */}
          <div className="max-w-7xl mx-auto">
            <AnimatedText>
              The only difference between you and the ones who stuck with it is
              proof — document every small win daily, so you stop losing to the
              version of you that quits.
            </AnimatedText>
          </div>
        </div>
      </main>

      <footer className="w-full py-12 px-4 md:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                src="/habitmirror.svg"
                alt="HabitMirror Logo"
                width={30}
                height={30}
                className="text-[#FF9500]"
              />
            </Link>
            <p className="text-white/50 text-sm">© 2024 HabitMirror</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-4">
              <div
                // href="https://apps.apple.com"
                className="inline-flex items-center justify-center bg-white text-black px-6 py-2.5 rounded-xl hover:bg-white/90 transition-colors text-sm font-medium"
              >
                <Image
                  src="/apple_black.svg"
                  alt="Apple Logo"
                  width={14}
                  height={14}
                  className="mr-2"
                />
                Coming soon
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="mailto:info@habitmirror.app"
                className="text-white/50 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                info@habitmirror.app
              </Link>
              {/* <Link
                href="https://twitter.com/habitmirror"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@habitmirror"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/habitmirror"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link> */}
            </div>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  )
}
