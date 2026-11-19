'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Heart,
  MessageCircle,
} from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { sacredPathsData } from '@/data/sacredPaths';
import { packagesData } from '@/data/packages';
import { PackageCard } from '@/components/packages/PackageCard';
import { BookingModal } from '@/components/ui/BookingModal';
import { createWhatsAppLink } from '@/lib/utils';

export default function SacredPathsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCircuit, setSelectedCircuit] = useState('Chardham & Jyotirlinga Yatra');

  const sacredPackages = packagesData.filter((pkg) => pkg.category === 'sacred-path');

  const handleOpenBooking = (name: string) => {
    setSelectedCircuit(name);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <TopBar />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={16} className="text-amber-400" />
            <span>Divine Journeys &bull; Dayoff Journeys Special</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            India&apos;s Sacred Paths
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Experience profound spiritual renewal. From the towering Himalayan heights of Kedarnath and Badrinath to the sacred gopurams of Madurai, Rameswaram, and the eternal ghats of Kashi.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleOpenBooking('Custom Sacred Path Yatra')}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg transition active:scale-95"
            >
              Plan Your Spiritual Yatra
            </button>
            <a
              href={createWhatsAppLink('Hi Dayoff Journeys! I would like to inquire about your Sacred Paths pilgrimage packages.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition flex items-center gap-2"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>Talk to Yatra Specialist</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sacred Destinations Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Revered Holy Sanctuaries
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            Major Spiritual Corridors We Facilitate
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Thoughtfully planned for devotees, seniors, and families with verified transport, hygienic food, and priority access guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacredPathsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/60 rounded-2xl border border-slate-700/60 overflow-hidden flex flex-col justify-between hover:border-amber-400/40 transition group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                    {item.category}
                  </span>
                  <div className="absolute bottom-3 left-3 text-xs text-amber-300 flex items-center gap-1 font-medium">
                    <MapPin size={12} />
                    <span>{item.region}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-700/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      Spiritual Significance:
                    </span>
                    <p className="text-xs text-slate-300 italic">
                      &ldquo;{item.spiritualSignificance}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 mb-4 text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    Suggested Circuit
                  </span>
                  <p className="text-slate-200 mt-0.5">{item.popularCircuit}</p>
                </div>

                <button
                  onClick={() => handleOpenBooking(item.name)}
                  className="w-full py-2.5 rounded-xl bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs transition"
                >
                  Inquire for {item.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Pilgrimage Care Features */}
      <section className="py-16 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Devotee Comfort First
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Why Pilgrims Trust Dayoff Journeys
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-base font-bold text-white">Elderly &amp; Family Friendly</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                We plan comfortable driving intervals, gentle walking pace, and coordinate palki, pony, or helicopter assistance where needed.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-base font-bold text-white">Pure Vegetarian Stays</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Verified satvik/vegetarian meals and clean, hygienic accommodations located conveniently close to temple corridors.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-base font-bold text-white">Biometric &amp; Token Guidance</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Step-by-step assistance with yatra registration, Darshan booking slots, and local ritual arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Sacred Path Packages */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Ready Itineraries
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            Featured Sacred Path Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageTitle={`Sacred Path: ${selectedCircuit}`}
      />
    </div>
  );
}
