import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to format phone number to E.164 format
const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // If it already has country code, return with +
  if (cleaned.length >= 10) {
    return '+' + cleaned.slice(-10).replace(/^0/, '');
  }
  
  throw new Error(`Invalid phone number format: ${phone}`);
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, message' },
        { status: 400 }
      );
    }

    // Format phone number to E.164 format
    let formattedPhone: string;
    try {
      formattedPhone = formatPhoneNumber(phone);
    } catch (phoneError) {
      return NextResponse.json(
        { error: `Invalid phone number: ${(phoneError as Error).message}` },
        { status: 400 }
      );
    }

    // 1. Store in Supabase
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, email, phone: formattedPhone, message, created_at: new Date() }]);

    if (dbError) throw new Error(`Database error: ${dbError.message}`);

    // 2. Send Confirmation Email to User
    await resend.emails.send({
      from: 'Quotes <info@accuratewindoorsolutions.com>', // Use your verified domain
      to: [email],
      subject: 'We received your inquiry!',
      html: `<h1>Hi ${name},</h1><p>Thanks for reaching out. We will review your requirements for: ${message}</p>`,
    });

    // 3. Send Notification Email to Owners
    await resend.emails.send({
      from: 'System <notification@accuratewindoorsolutions.com>',
      to: [process.env.COMPANY_EMAIL!],
      subject: 'NEW LEAD DETECTED',
      html: `<p>New Lead: ${name}</p><p>Phone: ${formattedPhone}</p><p>Msg: ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('API Error:', errorMessage);
    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 }
    );
  }
}