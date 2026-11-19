import { Destination } from '@/types';
import { destinationsData as defaultDestinations } from '@/data/destinations';
import { parseDestinationsFromExcel } from './excelDestinations';

export function getAllDestinations(): Destination[] {
  try {
    const excelData = parseDestinationsFromExcel();
    if (excelData && excelData.length > 0) {
      return excelData;
    }
  } catch (err) {
    // Fall back to default destinations
  }
  return defaultDestinations;
}

export function getFeaturedDestinations(): Destination[] {
  const all = getAllDestinations();
  // Filter destinations where featured is true, or take the first 3 (Munnar, Kodaikanal, Ooty)
  const featured = all.filter((d: any) => d.featured === true);
  return featured.length > 0 ? featured.slice(0, 3) : all.slice(0, 3);
}
