import TrackingCta from "@/app/components/TrackingCta"
import Image from "next/image"

type InviteResponse = {
  data: {
    id: string
    habit_id: string
    invited_by: { id: string; first_name: string; last_name: string }
    habit: { id: string; name: string }
  }
}

const InvitePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const apiBaseUrl = process.env.NEXT_API_URL
  const apiKey = process.env.NEXT_API_AUTH_SECRET

  let invite: InviteResponse | null = null

  if (apiBaseUrl) {
    try {
      const res = await fetch(`${apiBaseUrl}/invites/details/${id}`, {
        next: { revalidate: 60 },
        headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined,
      })
      if (res.ok) {
        invite = (await res.json()) as InviteResponse
      }
    } catch {
      // ignore and show fallback UI
    }
  }

  const deepLinkParams = new URLSearchParams({
    type: "invite_acceptance",
    habit_id: invite?.data.habit_id ?? "",
    invite_id: invite?.data.id ?? "",
    inviter_id: invite?.data.invited_by.id ?? "",
    habit_name: invite?.data.habit.name ?? "",
    inviter_name: invite
      ? `${invite.data.invited_by.first_name} ${invite.data.invited_by.last_name}`
      : "",
  })

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
          <h1 className="text-[24px] font-extrabold leading-snug">
            {invite?.data.habit.name ?? "Habit invite"}
          </h1>
          <p className="text-xs text-[#D1D1D1]">
            {invite?.data.habit.name
              ? `I\'m tracking my ${invite.data.habit.name} streak on HabitMirror. Join me and we\'ll check in daily with photos to keep each other accountable.`
              : `Join me on HabitMirror and we\'ll check in daily with photos to keep each other accountable.`}
            <br />
            <br />
            {invite
              ? `Invited by ${invite.data.invited_by.first_name} ${invite.data.invited_by.last_name}`
              : ""}
          </p>
        </div>

        <TrackingCta
          href={`habitmirror://?${deepLinkParams.toString()}`}
          event={{
            event: "invite_accepted",
            invite_id: invite?.data.id ?? id,
          }}
          className="bg-white w-full text-black rounded-full  text-sm font-bold text-center h-[45px] flex items-center justify-center mt-4"
        >
          Join & Accept Invite
        </TrackingCta>
      </div>
    </main>
  )
}

export default InvitePage
