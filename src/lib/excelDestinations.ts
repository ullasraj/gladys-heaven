import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';
import { Destination } from '@/types';

export interface ExcelDestinationRow {
  name?: string | null;
  slug?: string | null;
  image?: string | null;
  description?: string | null;
  tags?: string | null;
  state?: string | null;
  idealDuration?: string | null;
  bestTimeToVisit?: string | null;
  topAttractions?: string | null;
  featured?: string | boolean | null;
}

export function parseDestinationsFromExcel(filePath?: string): Destination[] {
  const targetPath =
    filePath ||
    (fs.existsSync(path.resolve('destinations_sample.xlsx'))
      ? path.resolve('destinations_sample.xlsx')
      : path.resolve('public', 'destinations_sample.xlsx'));

  if (!fs.existsSync(targetPath)) {
    return [];
  }

  const fileBuffer = fs.readFileSync(targetPath);
  const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const rawRows: ExcelDestinationRow[] = XLSX.utils.sheet_to_json(worksheet, {
    defval: null, // Treat blank Excel cells as null
  });

  return rawRows
    .filter((row) => row.name && String(row.name).trim().length > 0)
    .map((row) => {
      const name = String(row.name).trim();

      // Auto-slugify if slug is null/empty
      const slug =
        row.slug && String(row.slug).trim().length > 0
          ? String(row.slug).trim()
          : name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');

      // Parse tags (comma separated), or empty array if null
      const tags =
        row.tags && String(row.tags).trim().length > 0
          ? String(row.tags)
              .split(',')
              .map((t) => t.trim())
              .filter(Boolean)
          : [];

      // Parse top attractions (semicolon or comma separated), or empty array if null
      const topAttractions =
        row.topAttractions && String(row.topAttractions).trim().length > 0
          ? String(row.topAttractions)
              .split(';')
              .map((a) => a.trim())
              .filter(Boolean)
          : [];

      const isFeatured =
        row.featured === true ||
        (typeof row.featured === 'string' &&
          ['yes', 'true', '1'].includes(row.featured.trim().toLowerCase()));

      return {
        slug,
        name,
        state: row.state && String(row.state).trim().length > 0 ? String(row.state).trim() : '',
        tagline: '',
        description:
          row.description && String(row.description).trim().length > 0
            ? String(row.description).trim()
            : '',
        heroImage:
          row.image && String(row.image).trim().length > 0
            ? String(row.image).trim()
            : 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1000&q=80',
        galleryImages: [],
        bestTimeToVisit:
          row.bestTimeToVisit && String(row.bestTimeToVisit).trim().length > 0
            ? String(row.bestTimeToVisit).trim()
            : '',
        idealDuration:
          row.idealDuration && String(row.idealDuration).trim().length > 0
            ? String(row.idealDuration).trim()
            : '',
        topAttractions,
        tags,
        packagesCount: 3,
        featured: isFeatured,
      } as Destination & { featured?: boolean };
    });
}
