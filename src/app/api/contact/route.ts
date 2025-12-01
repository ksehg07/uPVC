import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import twilio from 'twilio';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // 1. Store in Supabase
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, email, phone, message, created_at: new Date() }]);

    if (dbError) throw dbError;

    // 2. Send Confirmation Email to User
    await resend.emails.send({
      from: 'Quotes <onboarding@resend.dev>', // Use your verified domain
      to: [email],
      subject: 'We received your inquiry!',
      html: `<h1>Hi ${name},</h1><p>Thanks for reaching out. We will review your requirements for: ${message}</p>`,
    });

    // 3. Send Notification Email to Owners
    await resend.emails.send({
      from: 'System <onboarding@resend.dev>',
      to: [process.env.COMPANY_EMAIL!],
      subject: 'NEW LEAD DETECTED',
      html: `<p>New Lead: ${name}</p><p>Phone: ${phone}</p><p>Msg: ${message}</p>`,
    });

    // 4. Send WhatsApp to User (Twilio)
    await twilioClient.messages.create({
      body: `Hi ${name}, thank you for contacting us. Our team will call you shortly regarding your windows/doors inquiry.`,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${phone}`
    });

    // 5. Send WhatsApp to Owners
    const owners = [process.env.OWNER_PHONE_1, process.env.OWNER_PHONE_2];
    for (const owner of owners) {
        if(owner) {
            await twilioClient.messages.create({
                body: `🔔 NEW LEAD:\nName: ${name}\nPhone: ${phone}\nMsg: ${message}`,
                from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
                to: `whatsapp:${owner}`
            });
        }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}