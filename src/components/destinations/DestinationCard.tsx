import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
    >
      {/* Background Image */}
      <Image
        src={destination.heroImage}
        alt={destination.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

      {/* Top State Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
          {destination.state}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium mb-1">
          <MapPin size={13} />
          <span>{destination.idealDuration}</span>
        </div>

        <h3 className="text-xl font-bold tracking-tight group-hover:text-emerald-300 transition-colors">
          {destination.name}
        </h3>

        <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-light">
          {destination.tagline}
        </p>

        <div className="mt-3 pt-2 border-t border-white/20 flex items-center justify-between text-xs text-slate-200">
          <span>{destination.packagesCount} Curated Tours</span>
          <span className="inline-flex items-center gap-1 font-semibold text-emerald-300 group-hover:translate-x-1 transition-transform">
            View Details <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
