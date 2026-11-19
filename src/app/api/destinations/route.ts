import { NextResponse } from 'next/server';
import { fetchDestinationsFromGoogleSheet } from '@/lib/googleSheetsDestinations';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sheetUrl = searchParams.get('sheetUrl') || undefined;

    const destinations = await fetchDestinationsFromGoogleSheet(sheetUrl);

    return NextResponse.json({
      success: true,
      count: destinations.length,
      data: destinations,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch destinations',
      },
      { status: 500 }
    );
  }
}
