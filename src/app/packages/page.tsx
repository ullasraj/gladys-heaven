'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, SlidersHorizontal, Compass } from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { packagesData } from '@/data/packages';
import { PackageCard } from '@/components/packages/PackageCard';

const categories = [
  { id: 'all', label: 'All Packages' },
  { id: 'hill-station', label: 'Hill Stations' },
  { id: 'backwater', label: 'Backwaters & Houseboats' },
  { id: 'sacred-path', label: 'Sacred Paths' },
  { id: 'wildlife', label: 'Wildlife & Nature' },
  { id: 'coastal', label: 'Coastal & Beach' },
];

function PackagesCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const initialDest = searchParams.get('dest') || '';

  const [category, setCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialDest);
  const [sortBy, setSortBy] = useState('popular');

  const filtered = useMemo(() => {
    return packagesData
      .filter((pkg) => {
        const matchesCategory = category === 'all' || pkg.category === category;
        const matchesQuery =
          !searchQuery ||
          pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pkg.destinations.some((d) =>
            d.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          pkg.overview.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.pricePerPerson - b.pricePerPerson;
        if (sortBy === 'price-high') return b.pricePerPerson - a.pricePerPerson;
        if (sortBy === 'duration') return b.days - a.days;
        return b.rating - a.rating; // default: popular
      });
  }, [category, searchQuery, sortBy]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />

      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 inline-block">
            Explore All Journeys
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Curated Tour Packages &amp; Itineraries
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            From the tea valleys of Munnar to sacred Himalayan shrines, explore our handpicked holiday packages crafted for couples, families, and groups.
          </p>
        </div>
      </section>

      {/* Filter and Content Area */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        {/* Controls row */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search box */}
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search by destination (e.g. Munnar, Ooty, Kedarnath)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none bg-white text-slate-700"
            >
              <option value="popular">Top Rated &amp; Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Longest Duration</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
                category === cat.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Packages count feedback */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing <strong>{filtered.length}</strong> holiday packages
          </span>
          {(category !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setCategory('all');
                setSearchQuery('');
              }}
              className="text-emerald-700 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <Compass size={48} className="mx-auto text-slate-400 mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No Packages Match Your Query</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              We can still craft a 100% custom itinerary for any destination you desire.
            </p>
            <button
              onClick={() => {
                setCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700"
            >
              View All Packages
            </button>
          </div>
        )}
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function PackagesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <p className="text-emerald-700 font-semibold">Loading Dayoff Journeys Packages...</p>
        </div>
      }
    >
      <PackagesCatalog />
    </Suspense>
  );
}
