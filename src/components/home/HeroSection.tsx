'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Headphones,
  Award,
  ChevronRight,
  PlayCircle,
  MessageCircle,
} from 'lucide-react';
import { TripSearchWidget } from './TripSearchWidget';
import { BookingModal } from '@/components/ui/BookingModal';
import { createWhatsAppLink } from '@/lib/utils';

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/70 to-slate-950/90 z-0" />

        {/* Ambient glow accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md">
            <Sparkles size={16} className="text-amber-400 fill-amber-400" />
            <span>Discover Kerala, Nilgiris &amp; India&apos;s Sacred Paths</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15]">
            Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Days Off</span> Into Extraordinary Stories.
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed">
            Handcrafted holiday itineraries across Munnar&apos;s emerald tea estates, Ooty, Kodaikanal, tranquil Alleppey houseboats, and divine pilgrimage shrines with dedicated chauffeur fleet and 24/7 ground care.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-emerald-900/40 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Get Free Custom Itinerary</span>
              <ChevronRight size={18} />
            </button>

            <a
              href={createWhatsAppLink('Hi Dayoff Journeys! I would like to consult with an expert to plan my upcoming trip.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:border-emerald-400"
            >
              <MessageCircle size={18} className="text-emerald-400" />
              <span>Talk to Kerala Travel Expert</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="flex items-center gap-2.5 text-slate-300">
              <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm font-medium">100% Customized Trips</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Award size={20} className="text-amber-400 shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Handpicked Vetted Resorts</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Headphones size={20} className="text-teal-400 shrink-0" />
              <span className="text-xs sm:text-sm font-medium">24/7 On-Trip Assistance</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Sparkles size={20} className="text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Transparent Pricing</span>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Search Widget */}
        <div className="relative z-20 w-full mt-12">
          <TripSearchWidget />
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageTitle="Tailor-Made Tour Package"
      />
    </>
  );
}
