'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Users,
  Briefcase,
  Snowflake,
  ShieldCheck,
  Check,
  Phone,
  MessageCircle,
  Car,
} from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { fleetData } from '@/data/fleet';
import { formatINR, createWhatsAppLink } from '@/lib/utils';
import { BookingModal } from '@/components/ui/BookingModal';

export default function FleetPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('Toyota Innova Crysta');

  const handleBook = (name: string) => {
    setSelectedVehicle(name);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 inline-block">
            Ground Logistics &amp; Transport
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Premium Chauffeur Fleet &amp; Taxi Services
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Travel across Kerala, Nilgiris, Tamil Nadu, and pilgrimage routes with peace of mind. Experienced mountain drivers, sanitized vehicles, and transparent per-km or all-inclusive daily tariffs.
          </p>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleetData.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <div className="relative h-60 w-full bg-slate-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase text-white tracking-wider">
                    {car.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">Daily Package from</span>
                      <span className="text-xl font-extrabold text-emerald-700">
                        {formatINR(car.packageStartingDay)}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-6">
                    <strong>Best Suited For:</strong> {car.bestFor}
                  </p>

                  {/* Key specs */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center mb-6">
                    <div className="space-y-1">
                      <Users size={18} className="mx-auto text-emerald-600" />
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Capacity</span>
                      <span className="text-xs font-semibold text-slate-800">{car.seatingCapacity.split(' ')[0]} Seats</span>
                    </div>
                    <div className="space-y-1">
                      <Briefcase size={18} className="mx-auto text-emerald-600" />
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Luggage</span>
                      <span className="text-xs font-semibold text-slate-800">{car.luggageCapacity.split(' ')[0]} Bags</span>
                    </div>
                    <div className="space-y-1">
                      <Snowflake size={18} className="mx-auto text-emerald-600" />
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">AC</span>
                      <span className="text-xs font-semibold text-emerald-700">Chilled AC</span>
                    </div>
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Vehicle Inclusions &amp; Amenities:
                    </span>
                    {car.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <Check size={14} className="text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleBook(car.name)}
                  className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
                >
                  Book This Vehicle
                </button>
                <a
                  href={createWhatsAppLink(`Hi Dayoff Journeys! I would like to inquire about taxi/fleet rates for ${car.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} className="text-emerald-600" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Airport & Outstation Services Banner */}
        <div className="p-8 rounded-3xl bg-emerald-950 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-bold">Airport Transfers &amp; Inter-State Outstation Trips</h3>
            <p className="text-sm text-emerald-200 max-w-xl">
              We provide fixed-rate airport pickups and drops from Kochi (COK), Calicut (CCJ), Coimbatore (CJB), Trivandrum (TRV), Madurai (IXM), and Bangalore (BLR).
            </p>
          </div>
          <a
            href="tel:+919847012345"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition"
          >
            <Phone size={16} />
            <span>Call Fleet Desk: +91 98470 12345</span>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageTitle={`Vehicle Rental: ${selectedVehicle}`}
      />
    </div>
  );
}
