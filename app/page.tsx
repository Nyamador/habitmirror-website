import Image from "next/image"

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
        <p className="text-white/70">We&apos;re working on something amazing</p>
      </div>
    </div>
  )
}
