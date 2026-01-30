import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  message?: string;
}

function validateFormData(data: unknown): ContactFormData {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid form data");
  }

  const { name, email, company, phone, message } = data as Record<string, unknown>;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    throw new Error("Name is required");
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("Valid email is required");
  }

  if (!company || typeof company !== "string" || company.trim().length === 0) {
    throw new Error("Company is required");
  }

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    company: company.trim(),
    phone: typeof phone === "string" ? phone.trim() : undefined,
    message: typeof message === "string" ? message.trim() : undefined,
  };
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const formData = validateFormData(body);

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.CONTACT_EMAIL || "hello@vertio.com.au"],
      subject: `New Waitlist Signup: ${formData.company}`,
      text: `New Waitlist Signup

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company}
Message: ${formData.message || "No message"}
`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
