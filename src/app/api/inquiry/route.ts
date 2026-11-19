import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // In production, send to email service (Resend, SendGrid) or CRM (Bigin, Hubspot)
    // console.log('New Inquiry received by Dayoff Journeys:', data);

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. Our team will contact you shortly.',
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
