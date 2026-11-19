import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const hasDescription = Boolean(destination.description && destination.description.trim().length > 0);
  const hasTags = Boolean(destination.tags && destination.tags.length > 0);
  const hasState = Boolean(destination.state && destination.state.trim().length > 0);
  const hasDuration = Boolean(destination.idealDuration && destination.idealDuration.trim().length > 0);

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative h-96 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 block"
    >
      {/* Background Image */}
      <Image
        src={destination.heroImage}
        alt={destination.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Top State Badge (Only rendered if state is not null/empty) */}
      {hasState && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/25">
            {destination.state}
          </span>
        </div>
      )}

      {/* Bottom Content Layer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white flex flex-col justify-end">
        {/* Optional Duration (Only rendered if not null) */}
        {hasDuration && (
          <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium mb-1.5">
            <MapPin size={13} />
            <span>{destination.idealDuration}</span>
          </div>
        )}

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors duration-300">
          {destination.name}
        </h3>

        {/* Hover Details (Only rendered if description or tags exist) */}
        {(hasDescription || hasTags) && (
          <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
            {hasDescription && (
              <p className="text-xs sm:text-sm text-white/85 mt-2 line-clamp-3 leading-relaxed">
                {destination.description}
              </p>
            )}

            {hasTags && (
              <div className="flex flex-wrap gap-2 mt-4 pt-1">
                {destination.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-md bg-white/20 hover:bg-white/30 text-white backdrop-blur-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
