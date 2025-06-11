"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { useState } from "react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to submit")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => {
        onClose()
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4 z-50"
          >
            <div className="bg-[#1c1c1e] rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                <button
                  onClick={onClose}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center space-y-3"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                    <h3 className="text-xl font-semibold text-white">
                      Message Sent!
                    </h3>
                    <p className="text-white/70">
                      Thanks for reaching out. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/90 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/90 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white/90 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent resize-none"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FF9500] text-black font-medium px-6 py-3 rounded-xl hover:bg-[#FF9500]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <div>
                          <p className="text-red-500 font-medium">
                            Failed to send message
                          </p>
                          <p className="text-red-500/70 text-sm">
                            Please try again or contact us directly at
                            info@habitmirror.app
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
