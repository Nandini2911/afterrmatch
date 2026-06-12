import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "afterrmatch26@gmail.com",
      subject: "New Community Member - After Match",
      html: `
        <h2>New Community Member</h2>

        <p>A new user has joined the After Match community.</p>

        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p>
          Interested in:
        </p>

        <ul>
          <li>Exclusive Updates</li>
          <li>Events</li>
          <li>Membership Announcements</li>
          <li>Community Experiences</li>
        </ul>

        <p>Submitted from After Match website.</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}