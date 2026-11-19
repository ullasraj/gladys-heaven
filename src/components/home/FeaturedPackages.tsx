'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { packagesData } from '@/data/packages';
import { PackageCard } from '@/components/packages/PackageCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

const categories = [
  { id: 'all', label: 'All Packages' },
  { id: 'hill-station', label: 'Hill Stations (Munnar/Ooty/Kodai)' },
  { id: 'backwater', label: 'Backwaters & Houseboats' },
  { id: 'sacred-path', label: 'India’s Sacred Paths' },
  { id: 'wildlife', label: 'Nature & Wildlife' },
];

export function FeaturedPackages() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPackages =
    activeCategory === 'all'
      ? packagesData
      : packagesData.filter((pkg) => pkg.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curated Escapes"
          title="Most Popular Holiday Packages"
          subtitle="Handcrafted itineraries designed by local travel concierges with verified hotels, seamless transfers, and unforgettable sights."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-105'
                  : 'bg-white text-slate-600 hover:text-emerald-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.slice(0, 6).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Bottom CTA to all packages */}
        <div className="mt-14 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition hover:gap-3"
          >
            <Compass size={18} className="text-emerald-400" />
            <span>Explore All Tour Packages &amp; Custom Itineraries</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
