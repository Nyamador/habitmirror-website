import { Client } from "@notionhq/client"
import { NextResponse } from "next/server"

// Check for required environment variables
if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
  console.error(
    "Missing required environment variables: NOTION_TOKEN or NOTION_DATABASE_ID"
  )
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export async function POST(request: Request) {
  try {
    // Validate environment variables
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      throw new Error("Missing required environment variables")
    }

    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        "Created time": {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error submitting to Notion:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to submit form",
      },
      { status: 500 }
    )
  }
}
