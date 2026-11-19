'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Check, ArrowRight, Sparkles } from 'lucide-react';
import { TourPackage } from '@/types';
import { formatINR } from '@/lib/utils';
import { StarRating } from '@/components/ui/StarRating';
import { Badge } from '@/components/ui/Badge';
import { BookingModal } from '@/components/ui/BookingModal';

interface PackageCardProps {
  pkg: TourPackage;
}

export function PackageCard({ pkg }: PackageCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col">
        {/* Card Image */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-100">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white">
              {pkg.category.replace('-', ' ')}
            </span>
            {pkg.featured && (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 flex items-center gap-1">
                <Sparkles size={12} className="fill-slate-950" />
                Featured
              </span>
            )}
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
            <Clock size={13} className="text-emerald-600" />
            <span>{pkg.duration}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Rating & Destinations */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <StarRating rating={pkg.rating} count={pkg.reviewCount} />
              <div className="flex items-center gap-1 text-xs text-slate-500 font-medium truncate">
                <MapPin size={12} className="text-emerald-600 shrink-0" />
                <span className="truncate">{pkg.destinations.join(' • ')}</span>
              </div>
            </div>

            {/* Title */}
            <Link href={`/packages/${pkg.id}`}>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-1">
                {pkg.title}
              </h3>
            </Link>

            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {pkg.subtitle}
            </p>

            {/* Highlights bullets */}
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
              {pkg.highlights.slice(0, 3).map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <Check size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Actions */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <span className="text-[11px] text-slate-500 block uppercase font-medium">
                Starting from
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-extrabold text-emerald-800">
                  {formatINR(pkg.pricePerPerson)}
                </span>
                {pkg.originalPrice && (
                  <span className="text-xs line-through text-slate-400">
                    {formatINR(pkg.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-slate-400">per person (twin sharing)</span>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={`/packages/${pkg.id}`}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition"
                title="View Full Itinerary"
              >
                <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition active:scale-95"
              >
                Book Now
              </button>
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
