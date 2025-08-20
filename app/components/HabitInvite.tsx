const HabitFetcher = async ({
  id,
  onData,
}: {
  id: string
  onData: (
    data: {
      type: "invite_acceptance"
      habit_id: string
      invite_id: string
      inviter_id: string
      inviter_name: string
    } | null
  ) => void
}) => {
  const apiBaseUrl = process.env.NEXT_API_URL
  const apiKey = process.env.NEXT_API_AUTH_SECRET

  if (!apiBaseUrl)
    return <p className="text-xs text-red-400">API base URL not configured</p>

  try {
    const response = await fetch(`${apiBaseUrl}/invites/details/${id}`, {
      // Cache on the server for a short period to avoid re-fetch loops
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })

    if (!response.ok) {
      console.log("error", response)
      return (
        <p className="text-xs text-red-400">
          Oops! Something went wrong. Please try again later.
        </p>
      )
    }

    const data = (await response.json()) as {
      data: {
        id: string
        habit_id: string
        invited_by: {
          id: string
          first_name: string
          last_name: string
        }
        email: string | null
        user_id: string
        status: string
        token: string | null
        expires_at: string | null
        accepted_at: string | null
        updated_at: string
        created_at: string
        habit: {
          id: string
          name: string
        }
      }
    }

    if (!data) return null

    onData({
      type: "invite_acceptance",
      habit_id: data.data.habit_id,
      invite_id: data.data.id,
      inviter_id: data.data.invited_by.id,
      inviter_name: `${data.data.invited_by.first_name} ${data.data.invited_by.last_name}`,
    })

    return (
      <div>
        <h1 className="text-[24px] font-extrabold leading-snug">
          {data.data.habit.name}
        </h1>
        <p className="text-xs text-[#D1D1D1]">
          I'm tracking my {data.data.habit.name} streak on HabitMirror. Join me
          and we'll check in daily with photos to keep each other accountable.
          <br />
          <br />
          Invited by {data.data.invited_by.first_name}{" "}
          {data.data.invited_by.last_name}
        </p>
      </div>
    )
  } catch {
    return <p className="text-xs text-red-400">Failed to load invite</p>
  }
}

export default HabitFetcher
