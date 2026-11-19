import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { destinationsData } from '@/data/destinations';
import { DestinationCard } from '@/components/destinations/DestinationCard';

export const metadata = {
  title: 'Top Travel Destinations | Dayoff Journeys',
  description:
    'Discover Munnar, Ooty, Kodaikanal, Alleppey, Wayanad, Kedarnath, and more. Authentic destinations curated for your perfect day off.',
};

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />

      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 inline-block">
            Explore India
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Breathtaking Destinations We Cover
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            From the tea gardens of the Western Ghats to peaceful coastal backwaters and sacred pilgrimage shrines across India.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinationsData.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
