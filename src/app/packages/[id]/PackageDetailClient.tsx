'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Calendar,
  Check,
  CheckCircle2,
  XCircle,
  Sparkles,
  Phone,
  MessageCircle,
  ChevronDown,
  ShieldCheck,
  MapPin,
  Clock,
} from 'lucide-react';
import { TourPackage } from '@/types';
import { formatINR, createWhatsAppLink } from '@/lib/utils';
import { BookingModal } from '@/components/ui/BookingModal';

interface Props {
  pkg: TourPackage;
}

export function PackageDetailClient({ pkg }: Props) {
  const [activeDay, setActiveDay] = useState<number | null>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDay = (day: number) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const handleWhatsAppInquiry = () => {
    const msg = `Hi Dayoff Journeys! I am looking to book *${pkg.title}* (${pkg.duration}). Could you share availability and details?`;
    window.open(createWhatsAppLink(msg), '_blank');
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Itinerary, Highlights, Inclusions (8 Cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Overview Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles size={20} className="text-emerald-600" />
              Tour Overview
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {pkg.overview}
            </p>

            {/* Highlights */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
                Trip Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day-by-Day Itinerary */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Day-by-Day Itinerary</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Click on each day to reveal detailed sightseeing &amp; activities
                </p>
              </div>
              <button
                onClick={() => setActiveDay(activeDay === null ? 1 : null)}
                className="text-xs font-semibold text-emerald-700 hover:underline"
              >
                {activeDay === null ? 'Expand Days' : 'Collapse All'}
              </button>
            </div>

            <div className="space-y-4">
              {pkg.itinerary.map((dayItem) => {
                const isOpen = activeDay === dayItem.day;
                return (
                  <div
                    key={dayItem.day}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleDay(dayItem.day)}
                      className={`w-full flex items-center justify-between p-4 text-left transition ${
                        isOpen ? 'bg-emerald-50/70 border-b border-emerald-100' : 'bg-slate-50 hover:bg-slate-100/70'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                          D{dayItem.day}
                        </span>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-slate-900">
                            {dayItem.title}
                          </h4>
                          {dayItem.stayLocation && (
                            <span className="text-[11px] text-emerald-700 font-medium">
                              Stay: {dayItem.stayLocation}
                            </span>
                          )}
                        </div>
                      </div>

                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform ${
                          isOpen ? 'rotate-180 text-emerald-700' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-5 bg-white space-y-4 animate-fade-in text-xs sm:text-sm text-slate-600">
                        <p className="leading-relaxed">{dayItem.description}</p>
                        {dayItem.activities && dayItem.activities.length > 0 && (
                          <div className="pt-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                              Planned Activities &amp; Sights:
                            </span>
                            <ul className="space-y-1.5">
                              {dayItem.activities.map((act, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-700">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  <span>{act}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions */}
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <h3 className="text-base font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" />
                What&apos;s Included
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
              <h3 className="text-base font-bold text-rose-900 mb-4 flex items-center gap-2">
                <XCircle size={18} className="text-rose-600" />
                What&apos;s Excluded
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold text-xs shrink-0">&times;</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sticky Booking Box (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-white p-6 rounded-2xl border border-slate-200 shadow-lg space-y-6">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Total Package Price
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-black text-emerald-800">
                  {formatINR(pkg.pricePerPerson)}
                </span>
                {pkg.originalPrice && (
                  <span className="text-sm line-through text-slate-400">
                    {formatINR(pkg.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-xs text-slate-500 block mt-0.5">
                Per person on twin sharing basis (inclusive of vehicle &amp; stays)
              </span>
            </div>

            {/* Inclusions overview pills */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Private Sanitized AC Vehicle</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Verified Deluxe Hotels / Houseboat</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Daily Breakfast Included</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>24/7 Dedicated Chauffeur &amp; Support</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-md transition active:scale-95"
              >
                Book This Package
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} className="text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>

            {/* Direct hotline */}
            <div className="pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">Need immediate help?</p>
              <a
                href="tel:+919847012345"
                className="text-sm font-bold text-slate-800 hover:text-emerald-600 transition flex items-center justify-center gap-1.5 mt-1"
              >
                <Phone size={14} className="text-emerald-600" />
                +91 98470 12345
              </a>
              <p className="text-[10px] text-slate-400 mt-1">
                Mon - Sun: 9:00 AM - 10:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageTitle={pkg.title}
        packageId={pkg.id}
      />
    </>
  );
}
