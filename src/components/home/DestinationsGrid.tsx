'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'Munnar',
    slug: 'munnar',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1000&q=80',
    description: 'A breathtaking hill station known for expansive tea plantations, misty hills, and scenic waterfalls.',
    tags: ['Hills', 'Tea Gardens', 'Waterfalls'],
  },
  {
    name: 'Kodaikanal',
    slug: 'kodaikanal',
    image: 'https://images.unsplash.com/photo-1628108426027-3806e30eb120?auto=format&fit=crop&w=1000&q=80',
    description: 'A charming hill station with scenic lakes, dense forests, and refreshing waterfalls.',
    tags: ['Hills', 'Lake', 'Forest'],
  },
  {
    name: 'Ooty',
    slug: 'ooty',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80',
    description: 'Queen of Hill Stations, famous for tea gardens, colonial charm, and scenic lakes.',
    tags: ['Hills', 'Toy Train', 'Heritage'],
  },
];

export function DestinationsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e6f4ea] text-[#1b4332] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sun size={14} className="text-[#2d6a4f]" />
            <span>Destinations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            South India Paradise
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gray-600 font-normal">
            Experience the magic of Ooty, Kodaikanal, and Munnar.
          </p>
        </div>

        {/* 3 Interactive Destination Hover Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 block"
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white flex flex-col justify-end">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors duration-300">
                  {dest.name}
                </h3>

                {/* Hover Reveal Content */}
                <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="text-xs sm:text-sm text-white/85 mt-2 line-clamp-3 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-2">
                    {dest.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-white/20 hover:bg-white/30 text-white backdrop-blur-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore All Destinations Button */}
        <div className="mt-14 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#1b4332] text-[#1b4332] hover:bg-[#1b4332] hover:text-white text-sm font-semibold transition-all duration-300 active:scale-95 shadow-sm"
          >
            <span>Explore All Destinations</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
