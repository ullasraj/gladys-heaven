import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Compass,
} from 'lucide-react';
import { destinationsData } from '@/data/destinations';
import { packagesData } from '@/data/packages';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { PackageCard } from '@/components/packages/PackageCard';

export function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = destinationsData.find((d) => d.slug === slug);

  if (!dest) {
    notFound();
  }

  // Find related packages
  const relatedPackages = packagesData.filter((pkg) =>
    pkg.destinations.some(
      (d) =>
        d.toLowerCase().includes(dest.name.toLowerCase()) ||
        dest.name.toLowerCase().includes(d.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[480px] bg-slate-950 text-white flex items-end pb-12 px-4 sm:px-6 lg:px-8">
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mb-4 transition"
          >
            <ArrowLeft size={14} /> Back to All Destinations
          </Link>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/80 text-white backdrop-blur-md">
              {dest.state}
            </span>
            <span className="text-xs text-slate-300">
              Ideal Duration: <strong>{dest.idealDuration}</strong>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            {dest.name}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-200 max-w-2xl font-light">
            {dest.tagline}
          </p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About {dest.name}</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {dest.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {dest.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Top Attractions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-emerald-600" />
                Must-Visit Attractions in {dest.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dest.topAttractions.map((att, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{att}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Quick Travel Facts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase font-semibold">
                    Best Time to Visit
                  </span>
                  <div className="flex items-center gap-2 text-slate-800 font-bold mt-1">
                    <Calendar size={16} className="text-emerald-600" />
                    <span>{dest.bestTimeToVisit}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] uppercase font-semibold">
                    Suggested Stay
                  </span>
                  <div className="flex items-center gap-2 text-slate-800 font-bold mt-1">
                    <Clock size={16} className="text-emerald-600" />
                    <span>{dest.idealDuration}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] uppercase font-semibold">
                    Location &amp; State
                  </span>
                  <div className="flex items-center gap-2 text-slate-800 font-bold mt-1">
                    <MapPin size={16} className="text-emerald-600" />
                    <span>{dest.name}, {dest.state}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  Plan a Trip to {dest.name}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Packages available for this destination */}
        <div className="pt-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Packages Covering {dest.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Curated itineraries with transport, stays, and guided experiences.
              </p>
            </div>
            <Link
              href="/packages"
              className="text-xs sm:text-sm font-bold text-emerald-700 hover:underline flex items-center gap-1"
            >
              All Packages <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPackages.length > 0 ? (
              relatedPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)
            ) : (
              <div className="col-span-3 bg-white p-8 rounded-2xl text-center border border-slate-200">
                <p className="text-slate-600 text-sm">
                  We create bespoke itineraries for {dest.name}. Contact our travel planners for a personalized quote!
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  Request Custom Quote
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
