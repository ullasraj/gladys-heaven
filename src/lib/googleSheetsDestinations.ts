import * as XLSX from 'xlsx';
import { Destination } from '@/types';
import { getAllDestinations as getLocalDestinations } from './destinationsLoader';

/**
 * Extracts Google Sheet ID from various Google Sheet URL formats:
 * - https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing
 * - https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/export?format=csv
 * - 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms (raw ID)
 */
export function extractGoogleSheetId(urlOrId: string): string | null {
  if (!urlOrId) return null;
  const match = urlOrId.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    return match[1];
  }
  // Check if user passed just the sheet ID directly
  if (/^[a-zA-Z0-9-_]{20,}$/.test(urlOrId.trim())) {
    return urlOrId.trim();
  }
  return null;
}

/**
 * Fetches destination data directly from a public Google Sheet link.
 * If any cell/data is NULL or empty, that detail is omitted completely.
 */
export async function fetchDestinationsFromGoogleSheet(sheetUrlOrId?: string): Promise<Destination[]> {
  const urlToUse = sheetUrlOrId || process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

  if (!urlToUse) {
    // If no Google Sheet provided yet, use local sample Excel sheet
    return getLocalDestinations();
  }

  const sheetId = extractGoogleSheetId(urlToUse);
  if (!sheetId) {
    console.warn('Invalid Google Sheet URL or ID provided. Falling back to local destinations.');
    return getLocalDestinations();
  }

  // Google Sheets CSV export endpoint
  const csvExportUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

  try {
    const response = await fetch(csvExportUrl, {
      next: { revalidate: 60 }, // Re-fetch from Google Sheets every 60 seconds
    });

    if (!response.ok) {
      console.warn(`Failed to fetch from Google Sheets (Status: ${response.status}). Using local data.`);
      return getLocalDestinations();
    }

    const csvText = await response.text();
    const workbook = XLSX.read(csvText, { type: 'string' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const rawRows: any[] = XLSX.utils.sheet_to_json(worksheet, { defval: null });

    if (!rawRows || rawRows.length === 0) {
      return getLocalDestinations();
    }

    return rawRows
      .filter((row) => row.name && String(row.name).trim().length > 0)
      .map((row) => {
        const name = String(row.name).trim();

        // 1. Slug: if null/empty, auto-generate from name
        const slug =
          row.slug && String(row.slug).trim().length > 0
            ? String(row.slug).trim()
            : name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');

        // 2. Description: if null/empty -> empty string (omitted on card)
        const description =
          row.description && String(row.description).trim().length > 0
            ? String(row.description).trim()
            : '';

        // 3. Tags: if null/empty -> empty array (omitted on card)
        const tags =
          row.tags && String(row.tags).trim().length > 0
            ? String(row.tags)
                .split(',')
                .map((t: string) => t.trim())
                .filter(Boolean)
            : [];

        // 4. State: if null/empty -> empty string (omitted on card)
        const state =
          row.state && String(row.state).trim().length > 0
            ? String(row.state).trim()
            : '';

        // 5. Ideal Duration: if null/empty -> empty string (omitted on card)
        const idealDuration =
          row.idealDuration && String(row.idealDuration).trim().length > 0
            ? String(row.idealDuration).trim()
            : '';

        // 6. Best Time to Visit: if null/empty -> empty string (omitted on card)
        const bestTimeToVisit =
          row.bestTimeToVisit && String(row.bestTimeToVisit).trim().length > 0
            ? String(row.bestTimeToVisit).trim()
            : '';

        // 7. Top Attractions: if null/empty -> empty array (omitted on card)
        const topAttractions =
          row.topAttractions && String(row.topAttractions).trim().length > 0
            ? String(row.topAttractions)
                .split(';')
                .map((a: string) => a.trim())
                .filter(Boolean)
            : [];

        // 8. Image: if null/empty -> high quality default fallback
        const heroImage =
          row.image && String(row.image).trim().length > 0
            ? String(row.image).trim()
            : 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1000&q=80';

        // 9. Featured: boolean
        const isFeatured =
          row.featured === true ||
          (typeof row.featured === 'string' &&
            ['yes', 'true', '1'].includes(row.featured.trim().toLowerCase()));

        return {
          slug,
          name,
          state,
          tagline: '',
          description,
          heroImage,
          galleryImages: [],
          bestTimeToVisit,
          idealDuration,
          topAttractions,
          tags,
          packagesCount: 3,
          featured: isFeatured,
        } as Destination & { featured?: boolean };
      });
  } catch (error) {
    console.error('Error fetching/parsing Google Sheet:', error);
    return getLocalDestinations();
  }
}
