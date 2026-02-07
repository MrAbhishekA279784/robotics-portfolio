import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔥 this line will THROW real Gmail error if auth is wrong
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      text: `
New portfolio message

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    return res.status(500).json({ message: "Email failed" });
  }
}
