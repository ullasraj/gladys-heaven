import React from 'react';
import Link from 'next/link';
import { Sun, ArrowRight, Download } from 'lucide-react';
import { fetchDestinationsFromGoogleSheet } from '@/lib/googleSheetsDestinations';
import { DestinationCard } from '@/components/destinations/DestinationCard';

export async function DestinationsGrid() {
  const allDestinations = await fetchDestinationsFromGoogleSheet();
  const featured = allDestinations.filter((d: any) => d.featured === true);
  const destinations = featured.length > 0 ? featured.slice(0, 3) : allDestinations.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e6f4ea] text-[#1b4332] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sun size={14} className="text-[#2d6a4f]" />
            <span>Destinations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            South India Paradise
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gray-600 font-normal">
            Experience the magic of Ooty, Kodaikanal, and Munnar.
          </p>
        </div>

        {/* 3 Destination Cards (Loaded Live from your Google Sheet) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>

        {/* Actions Row */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#1b4332] text-[#1b4332] hover:bg-[#1b4332] hover:text-white text-sm font-semibold transition-all duration-300 active:scale-95 shadow-sm"
          >
            <span>Explore All Destinations</span>
            <ArrowRight size={16} />
          </Link>

          {/* Download Sample Excel Button */}
          <a
            href="/destinations_sample.xlsx"
            download="destinations_sample.xlsx"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition"
            title="Download template Excel sheet"
          >
            <Download size={16} />
            <span>Download Template Excel Sheet (.xlsx)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
