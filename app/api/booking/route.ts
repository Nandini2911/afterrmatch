import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function POST(req: Request) {
  try {
    const {
      name,
      phone,
      date,
      time,
      experience,
    } = await req.json();

    const message = `
🎮 NEW BOOKING REQUEST

👤 Name: ${name}
📞 Contact: ${phone}
📅 Date: ${date}
⏰ Time: ${time}
🎯 Experience: ${experience}
`;

    await client.messages.create({
      body: message,
      from: process.env.TWILIO_WHATSAPP_FROM!,
      to: process.env.TWILIO_WHATSAPP_TO!,
    });

    return NextResponse.json({
      success: true,
      message: "Booking sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send booking",
      },
      { status: 500 }
    );
  }
}