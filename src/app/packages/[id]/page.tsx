import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/image';
import {
  Clock,
  MapPin,
  CheckCircle2,
  XCircle,
  Calendar,
  Sparkles,
  Phone,
  MessageCircle,
  ArrowLeft,
  ChevronDown,
} from 'lucide-react';
import { packagesData } from '@/data/packages';
import { formatINR, createWhatsAppLink } from '@/lib/utils';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { StarRating } from '@/components/ui/StarRating';
import { PackageDetailClient } from './PackageDetailClient';

export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    id: pkg.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { id } = await params;
  const pkg = packagesData.find((p) => p.id === id);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />

      {/* Package Hero Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${pkg.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4">
            <a href="/packages" className="hover:underline flex items-center gap-1">
              <ArrowLeft size={14} /> Back to Tour Packages
            </a>
            <span>•</span>
            <span className="uppercase tracking-wider text-slate-300">
              {pkg.category.replace('-', ' ')}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white max-w-4xl tracking-tight">
            {pkg.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl font-light">
            {pkg.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
              <Clock size={16} className="text-emerald-400" />
              <span className="font-bold">{pkg.duration}</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
              <MapPin size={16} className="text-emerald-400" />
              <span>{pkg.destinations.join(' • ')}</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
              <StarRating rating={pkg.rating} count={pkg.reviewCount} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Booking Column */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <PackageDetailClient pkg={pkg} />
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
