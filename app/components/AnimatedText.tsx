"use client"

import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { useRef } from "react"

interface AnimatedTextProps {
  children: React.ReactNode
}

export default function AnimatedText({ children }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
    once: false,
  })

  return (
    <motion.h2
      ref={ref}
      className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight max-w-4xl transition-colors duration-500 ${
        isInView ? "text-white" : "text-white/30"
      }`}
    >
      {children}
    </motion.h2>
  )
}
