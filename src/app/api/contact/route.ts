import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const body = (await request.json()) as {
      name: string;
      email: string;
      business: string;
      businessType: string;
      message: string;
    };

    const { name, email, business, businessType, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Estuary Water <contact@estuarywater.com>",
      to: "estuarymineralwater@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name}${business ? ` — ${business}` : ""}`,
      html: `
        <div style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">

            <!-- Header -->
            <div style="background-color: #232b59; padding: 40px 32px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.05em; color: #ffffff; font-family: Georgia, 'Times New Roman', serif;">ESTUARY</h1>
              <p style="margin: 4px 0 0; font-size: 10px; letter-spacing: 0.35em; color: rgba(255,255,255,0.5);">MINERAL WATER</p>
              <div style="width: 10px; height: 10px; background-color: #b8a472; transform: rotate(45deg); margin: 16px auto 0;"></div>
            </div>

            <!-- Body -->
            <div style="background-color: #ffffff; padding: 32px;">
              <p style="margin: 0 0 4px; font-size: 10px; letter-spacing: 0.25em; color: #b8a472; text-transform: uppercase;">New Enquiry</p>
              <h2 style="margin: 0 0 24px; font-size: 22px; font-weight: 500; color: #232b59; font-family: Georgia, 'Times New Roman', serif;">Website Contact Form</h2>

              <!-- Contact Details Table -->
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #9ca3af; width: 120px; vertical-align: top;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #232b59;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #9ca3af; width: 120px; vertical-align: top;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #232b59;"><a href="mailto:${email}" style="color: #232b59; text-decoration: none;">${email}</a></td>
                </tr>
                ${business ? `<tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #9ca3af; width: 120px; vertical-align: top;">Business</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #232b59;">${business}</td>
                </tr>` : ""}
                ${businessType ? `<tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #9ca3af; width: 120px; vertical-align: top;">Type</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #232b59;">${businessType}</td>
                </tr>` : ""}
              </table>

              ${message ? `
              <!-- Message -->
              <div style="margin-top: 24px;">
                <p style="margin: 0 0 8px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #9ca3af;">Message</p>
                <div style="padding: 16px; background-color: #f8f9fa; border-left: 3px solid #b8a472; font-size: 14px; line-height: 1.6; color: #374151;">${message.replace(/\n/g, "<br/>")}</div>
              </div>
              ` : ""}

              <!-- Reply Button -->
              <div style="margin-top: 32px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; padding: 12px 32px; background-color: #232b59; color: #ffffff; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; font-weight: 500;">Reply to ${name.split(" ")[0]}</a>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 24px 32px; text-align: center;">
              <p style="margin: 0 0 4px; font-size: 10px; letter-spacing: 0.25em; color: #b8a472;">ESTUARY MINERAL WATER</p>
              <p style="margin: 0; font-size: 11px; color: #9ca3af;">estuarywater.com</p>
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry. Please try again." },
      { status: 500 },
    );
  }
}
