import React from 'react';
import Link from 'next/link';
import { Download, FileSpreadsheet } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { getAllDestinations } from '@/lib/destinationsLoader';
import { DestinationCard } from '@/components/destinations/DestinationCard';

export const metadata = {
  title: 'Top Travel Destinations | Dayoff Journeys',
  description:
    'Discover Munnar, Ooty, Kodaikanal, Alleppey, Wayanad, Kedarnath, and more. Authentic destinations curated for your perfect day off.',
};

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-6 md:px-12 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 inline-block">
            Explore India
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Breathtaking Destinations We Cover
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            From the tea gardens of the Western Ghats to peaceful coastal backwaters and sacred pilgrimage shrines across India.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="/destinations_sample.xlsx"
              download="destinations_sample.xlsx"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition backdrop-blur-md"
            >
              <FileSpreadsheet size={16} className="text-emerald-400" />
              <span>Download Destination Excel Sheet (.xlsx)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 flex-1 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
