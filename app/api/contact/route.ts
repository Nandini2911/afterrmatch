import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactRequest = {
  name?: string;
  contactNumber?: string;
  gameCategory?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim();
    const contactNumber = body.contactNumber?.trim();
    const gameCategory = body.gameCategory?.trim();

    if (!name || !contactNumber || !gameCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 },
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"AfterrMatch Website" <${emailUser}>`,
      to: emailUser,
      replyTo: emailUser,
      subject: `New AfterrMatch Enquiry — ${gameCategory}`,
      text: `
New enquiry received from the AfterrMatch website.

Name: ${name}
Contact Number: ${contactNumber}
Game Category: ${gameCategory}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New AfterrMatch Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact Number:</strong> ${contactNumber}</p>
          <p><strong>Game Category:</strong> ${gameCategory}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your enquiry.",
      },
      { status: 500 },
    );
  }
}