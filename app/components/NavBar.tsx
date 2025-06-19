"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import ContactModal from "./ContactModal"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-6 left-0 right-0 flex justify-center z-50"
    >
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

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </motion.div>
  )
}

export default NavBar
