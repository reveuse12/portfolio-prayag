import connectDB from "@/app/db/connectDB";
import Message from "@/app/db/message.model";
import { sendEmail } from "@/app/db/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();
    const { name, email, message } = await request.json();

    const savedMessage = await Message.create({ name, email, message });

    const sendEmailToClient = await sendEmail({
      email,
      name,
      message,
    });

    return NextResponse.json({
      message: "Message sent successfully",
      savedMessage,
    });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      {
        error: "An error occurred while saving the message.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
