import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { sacredPathsData } from '@/data/sacredPaths';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function SacredPathsHighlight() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Spiritual Tourism"
          title="India’s Sacred Paths"
          subtitle="Soul-stirring pilgrimages to holy Jyotirlingas, ancient Himalayan abodes, and majestic Dravidian temple corridors with verified priority logistics."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacredPathsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/60 rounded-2xl border border-slate-700/60 overflow-hidden hover:border-amber-400/40 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/90 text-slate-950 backdrop-blur-md">
                  {item.category.toUpperCase()}
                </span>
                <div className="absolute bottom-3 left-3 text-xs text-amber-300 font-medium flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{item.region}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
                      Popular Circuit
                    </span>
                    <p className="text-xs text-slate-200 mt-0.5 line-clamp-1">
                      {item.popularCircuit}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    Ideal: <strong className="text-white">{item.idealDays}</strong>
                  </span>
                  <Link
                    href="/sacred-paths"
                    className="inline-flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Sacred Itinerary</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-800/80 to-emerald-950/40 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Planning a Chardham Yatra or Temple Circuit with Elders?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                We coordinate special VIP darshan support, helicopter tickets, pure vegetarian meals, and mountain-experienced chauffeurs.
              </p>
            </div>
          </div>

          <Link
            href="/sacred-paths"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-95"
          >
            Explore Sacred Paths
          </Link>
        </div>
      </div>
    </section>
  );
}
