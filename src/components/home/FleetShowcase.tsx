'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Briefcase, Snowflake, Check, ArrowRight } from 'lucide-react';
import { fleetData } from '@/data/fleet';
import { formatINR } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BookingModal } from '@/components/ui/BookingModal';

export function FleetShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('Innova Crysta Rental');

  const handleBookVehicle = (name: string) => {
    setSelectedVehicle(name);
    setModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              badge="Fleet & Transportation"
              title="Premium Chauffeur-Driven Vehicles"
              subtitle="Travel through hill station curves and highways in absolute comfort. Sanitized, air-conditioned, and driven by background-verified professionals."
              align="left"
              className="mb-0"
            />

            <Link
              href="/fleet"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
            >
              <span>View Full Fleet &amp; Tariff</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetData.map((car) => (
              <div
                key={car.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-emerald-300 transition-all duration-300"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-200">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase text-white tracking-wider">
                      {car.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base text-slate-900 line-clamp-1">
                      {car.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {car.bestFor}
                    </p>

                    {/* Specs badges */}
                    <div className="mt-4 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-emerald-600 shrink-0" />
                        <span>{car.seatingCapacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={14} className="text-emerald-600 shrink-0" />
                        <span>{car.luggageCapacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Snowflake size={14} className="text-emerald-600 shrink-0" />
                        <span>Chilled Dual Air-Conditioning</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer price & CTA */}
                <div className="p-5 pt-0 border-t border-slate-200/60 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                      Starting at
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {formatINR(car.packageStartingDay)}{' '}
                      <span className="text-[10px] text-slate-500 font-normal">/ day</span>
                    </span>
                  </div>

                  <button
                    onClick={() => handleBookVehicle(car.name)}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm"
                  >
                    Rent Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageTitle={`Vehicle Booking: ${selectedVehicle}`}
      />
    </>
  );
}
