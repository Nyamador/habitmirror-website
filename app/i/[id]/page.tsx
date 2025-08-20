"use client"

import HabitFetcher from "@/app/components/HabitInvite"
import { sendGTMEvent } from "@next/third-parties/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// import type { Metadata } from "next"

// export function generateMetadata({
//   params,
// }: {
//   params: { id: string }
// }): Metadata {
//   const inviteId = params.id
//   const iosAppId = process.env.NEXT_PUBLIC_IOS_APP_ID || "6746387795"
//   const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN || "habitmirror.app"

//   // Use a universal link if your iOS app has Associated Domains set up; otherwise your custom scheme.
//   const deepLink = `https://${appDomain}/i/${inviteId}`

//   return {
//     other: {
//       "apple-itunes-app": `app-id=${iosAppId}, app-argument=${deepLink}`,
//     },
//   }
// }

const InvitePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const [data, setData] = useState<{
    type: "invite_acceptance"
    habit_id: string
    invite_id: string
    inviter_id: string
    inviter_name: string
  } | null>(null)
  const { id } = await params

  return (
    <main className="min-h-screen bg-black text-white relative pt-10">
      <Image
        src="/demo-calendar.png"
        alt="HabitMirror Background"
        width={360}
        height={220}
        className="m-auto"
      />

      <div className="container mx-auto max-w-[360px] flex flex-col justify-center gap-4 mt-20">
        <Image
          src="/habitmirror.svg"
          alt="HabitMirror Logo"
          width={46}
          height={46}
        />
        <div className="flex flex-col gap-1">
          <HabitFetcher id={id} onData={setData} />
        </div>

        <Link
          className="bg-white w-full text-black rounded-full  text-sm font-bold text-center h-[45px] flex items-center justify-center mt-4"
          onClick={() => {
            sendGTMEvent({
              event: "invite_accepted",
              invite_id: id,
            })
          }}
          href={`habitmirror://?${new URLSearchParams({
            type: "invite_acceptance",
            habit_id: data?.habit_id ?? "",
            invite_id: data?.invite_id ?? "",
            inviter_id: data?.inviter_id ?? "",
            inviter_name: data?.inviter_name ?? "",
          }).toString()}`}
        >
          Join & Accept Invite
        </Link>
      </div>
    </main>
  )
}

export default InvitePage
