import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { destinationsData } from '@/data/destinations';
import { DestinationCard } from '@/components/destinations/DestinationCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function DestinationsGrid() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Breathtaking Landscapes"
            title="Explore Top Destinations"
            subtitle="From the misty tea estates of the Western Ghats to emerald backwaters and spiritual corridors."
            align="left"
            className="mb-0"
          />

          <Link
            href="/destinations"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
          >
            <span>View All Destinations</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid of destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsData.slice(0, 4).map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}
