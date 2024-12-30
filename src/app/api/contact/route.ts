import prismaClient from "@/lib/client";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await prismaClient.contact.create({
      data: { name, email, phone, message },
    });
    if (!contact) {
      throw new Error("Failed to save contact data to the database.");
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter
    await transporter.verify();

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.NODE_MAILER_EMAIL,
        to: process.env.NODE_MAILER_EMAIL,
        subject: "New Contact Form Submission from Your Portfolio Website.",
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="background-color: #6a1b9a; color: #fff; padding: 15px; text-align: center; margin: 0; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            New Contact Form Submission
          </h2>
          <div style="padding: 20px;">
            <p style="font-size: 16px; color: #555;">You have received a new message from your portfolio website. Here are the details:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background-color: #f3e5f5;"><strong>Name:</strong></td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f3e5f5;"><strong>Email:</strong></td>
                <td style="padding: 8px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f3e5f5;"><strong>Phone:</strong></td>
                <td style="padding: 8px;">${phone || "N/A"}</td>
              </tr>
            </table>
            <h3 style="margin-top: 20px; color: #6a1b9a;">Message:</h3>
            <p style="background-color: #fce4ec; padding: 15px; border-left: 4px solid #6a1b9a; font-style: italic;">
              ${message}
            </p>
            <p style="margin-top: 20px; font-size: 14px; color: #888;">
              This message was automatically sent from your portfolio website. Please do not reply to this email.
            </p>
          </div>
          <footer style="background-color: #f3e5f5; padding: 10px; text-align: center; font-size: 12px; color: #666; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <strong>Abdul Rehman</strong> | Portfolio Website
          </footer>
        </div>
        `,
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      throw emailError;
    }

    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
