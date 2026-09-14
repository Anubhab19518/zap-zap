import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please provide all required fields (name, email, subject, message)." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Determine target recipient (default: zapzapprofessor@gmail.com)
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.GMAIL_USER ||
      "zapzapprofessor@gmail.com";

    // Check credentials (Gmail or Generic SMTP)
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465;

    if (!gmailUser || !gmailPass) {
      console.warn(
        "⚠️ [Zap-Zap Contact Form] Email credentials not found in environment variables (GMAIL_USER/GMAIL_APP_PASSWORD or SMTP_USER/SMTP_PASS). Message received in simulated mode:\n",
        { name, email, subject, message, receiverEmail, timestamp: new Date().toISOString() }
      );

      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Message received in laboratory preview mode. Configure GMAIL_USER and GMAIL_APP_PASSWORD in .env.local to send live emails.",
      });
    }

    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Clean up variables for HTML
    const sanitizedName = String(name).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedEmail = String(email).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedSubject = String(subject).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedMessage = String(message)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br/>");

    // Email HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #fed7aa; box-shadow: 0 4px 20px rgba(251, 146, 60, 0.1); }
            .header { background: linear-gradient(135deg, #f59e0b, #ea580c); padding: 28px 24px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
            .header p { margin: 6px 0 0; font-size: 12px; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px; }
            .body { padding: 28px 24px; }
            .badge { display: inline-block; background-color: #fff7ed; color: #ea580c; border: 1px solid #ffedd5; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 999px; text-transform: uppercase; margin-bottom: 16px; }
            .field-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .field-table td { padding: 8px 0; font-size: 14px; vertical-align: top; }
            .field-label { color: #64748b; font-weight: 600; width: 110px; }
            .field-value { color: #0f172a; font-weight: 500; }
            .message-box { background-color: #fffbeb; border: 1px solid #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 10px; }
            .footer { padding: 20px 24px; background-color: #f1f5f9; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
            .reply-btn { display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #ea580c; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⚡ ZAP-ZAP PROFESSOR</h1>
              <p>Laboratory Transmission Received</p>
            </div>
            <div class="body">
              <span class="badge">New Contact Inquiry</span>
              <table class="field-table">
                <tr>
                  <td class="field-label">Sender Name:</td>
                  <td class="field-value"><strong>${sanitizedName}</strong></td>
                </tr>
                <tr>
                  <td class="field-label">Sender Email:</td>
                  <td class="field-value"><a href="mailto:${sanitizedEmail}" style="color: #ea580c;">${sanitizedEmail}</a></td>
                </tr>
                <tr>
                  <td class="field-label">Subject:</td>
                  <td class="field-value"><strong>${sanitizedSubject}</strong></td>
                </tr>
                <tr>
                  <td class="field-label">Timestamp:</td>
                  <td class="field-value">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} (IST)</td>
                </tr>
              </table>

              <div style="margin-top: 16px;">
                <div style="font-size: 12px; font-weight: 700; color: #ea580c; text-transform: uppercase; margin-bottom: 6px;">Message Content:</div>
                <div class="message-box">
                  ${sanitizedMessage}
                </div>
              </div>

              <center>
                <a href="mailto:${sanitizedEmail}?subject=Re: ${encodeURIComponent(subject)}" class="reply-btn">Reply to ${sanitizedName}</a>
              </center>
            </div>
            <div class="footer">
              This transmission was sent via the Zap-Zap Professor official contact portal.<br/>
              © ${new Date().getFullYear()} Zap Zap Professor Studios.
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text alternative
    const textContent = `
New Transmission from Zap-Zap Professor Official Website:
---------------------------------------------------------
From: ${name} (${email})
Subject: ${subject}
Date: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST

Message:
${message}

---------------------------------------------------------
Reply to: ${email}
    `.trim();

    // Send Mail
    await transporter.sendMail({
      from: `"${sanitizedName} (via Zap-Zap Portal)" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `⚡ [Zap-Zap Inquiry] ${subject} - from ${name}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Message successfully transmitted to the Laboratory team!",
    });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to transmit message to the server.";
    return NextResponse.json(
      {
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
