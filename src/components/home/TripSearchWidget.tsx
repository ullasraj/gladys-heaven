'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Compass, Calendar, Users, Search } from 'lucide-react';
import { BookingModal } from '@/components/ui/BookingModal';

export function TripSearchWidget() {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [theme, setTheme] = useState('all');
  const [duration, setDuration] = useState('any');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination || theme !== 'all') {
      const params = new URLSearchParams();
      if (destination) params.set('dest', destination);
      if (theme !== 'all') params.set('cat', theme);
      router.push(`/packages?${params.toString()}`);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-white/40">
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Destination */}
          <div className="flex flex-col text-left px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-1">
              <MapPin size={13} className="text-emerald-600" />
              Where To?
            </span>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full text-sm font-semibold text-slate-800 bg-transparent outline-none cursor-pointer focus:text-emerald-700"
            >
              <option value="">All Destinations</option>
              <option value="munnar">Munnar, Kerala</option>
              <option value="ooty">Ooty, Tamil Nadu</option>
              <option value="kodaikanal">Kodaikanal, Tamil Nadu</option>
              <option value="alleppey">Alleppey Backwaters</option>
              <option value="wayanad">Wayanad Rainforests</option>
              <option value="kedarnath">Kedarnath &amp; Badrinath</option>
              <option value="kashi-varanasi">Kashi (Varanasi)</option>
              <option value="goa">Goa Beaches &amp; Heritage</option>
            </select>
          </div>

          {/* Travel Theme */}
          <div className="flex flex-col text-left px-3 py-1.5 border-b sm:border-b-0 lg:border-r border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-1">
              <Compass size={13} className="text-emerald-600" />
              Experience Type
            </span>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full text-sm font-semibold text-slate-800 bg-transparent outline-none cursor-pointer focus:text-emerald-700"
            >
              <option value="all">Any Holiday Type</option>
              <option value="hill-station">Hill Stations &amp; Tea Mist</option>
              <option value="backwater">Houseboats &amp; Canals</option>
              <option value="sacred-path">Sacred Paths &amp; Temples</option>
              <option value="wildlife">Wildlife &amp; Spice Trails</option>
              <option value="coastal">Coastal &amp; Beach Bliss</option>
            </select>
          </div>

          {/* Duration */}
          <div className="flex flex-col text-left px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-1">
              <Calendar size={13} className="text-emerald-600" />
              Duration
            </span>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full text-sm font-semibold text-slate-800 bg-transparent outline-none cursor-pointer focus:text-emerald-700"
            >
              <option value="any">Any Duration</option>
              <option value="weekend">2 - 3 Days (Weekend Break)</option>
              <option value="medium">4 - 5 Days (Standard Tour)</option>
              <option value="extended">6+ Days (Grand Circuit)</option>
            </select>
          </div>

          {/* Submit Action */}
          <div className="pt-2 sm:pt-0">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Search size={18} />
              <span>Explore Journeys</span>
            </button>
          </div>
        </form>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageTitle="Custom Holiday Planner"
      />
    </>
  );
}
