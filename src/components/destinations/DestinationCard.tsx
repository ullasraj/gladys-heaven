import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowUpRight } from 'lucide-react';
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
      className="group relative h-[420px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 block border border-gray-100 hover:border-emerald-500/40"
    >
      {/* Background Image with smooth zoom and subtle brightness transition */}
      <Image
        src={destination.heroImage}
        alt={destination.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out group-hover:brightness-105"
      />

      {/* Smooth Multi-stop Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Top Floating Badges */}
      <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
        {hasState ? (
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/25 shadow-sm transform group-hover:scale-105 transition-transform">
            {destination.state}
          </span>
        ) : (
          <span />
        )}

        {/* Floating Quick Action Arrow on top right */}
        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 border border-white/30 shadow-md">
          <ArrowUpRight size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Bottom Content Layer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white flex flex-col justify-end">
        {/* Optional Duration */}
        {hasDuration && (
          <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold mb-2 transform group-hover:translate-x-1 transition-transform duration-300">
            <MapPin size={13} className="text-emerald-400" />
            <span>{destination.idealDuration}</span>
          </div>
        )}

        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors duration-300">
          {destination.name}
        </h3>

        {/* Hover Details with spring expansion */}
        {(hasDescription || hasTags) && (
          <div className="max-h-0 opacity-0 group-hover:max-h-52 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
            {hasDescription && (
              <p className="text-xs sm:text-sm text-white/90 mt-2.5 line-clamp-3 leading-relaxed transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                {destination.description}
              </p>
            )}

            {hasTags && (
              <div className="flex flex-wrap gap-2 mt-4 pt-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                {destination.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-md bg-white/20 hover:bg-white/35 text-white backdrop-blur-md text-xs font-medium border border-white/15 transition-colors"
                  >
                    #{tag}
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
