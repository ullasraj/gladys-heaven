import React from 'react';
import Link from 'next/link';
import {
  Car,
  Compass,
  Hotel,
  ShieldCheck,
  Headphones,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { createWhatsAppLink } from '@/lib/utils';

export const metadata = {
  title: 'Our Services | Dayoff Journeys',
  description:
    'Comprehensive travel solutions from customized tour itineraries to luxury chauffeur fleet services across Kerala and South India.',
};

const services = [
  {
    icon: Compass,
    title: 'Customized Tour Packages',
    description:
      'Tailor-made itineraries designed around your schedule, budget, and travel interests. Whether a serene hill station retreat, a spiritual pilgrimage, or a family vacation, we craft the perfect journey.',
  },
  {
    icon: Car,
    title: 'Chauffeur Fleet & Taxi Services',
    description:
      'Premium, clean, and air-conditioned vehicles (Toyota Innova Crysta, Maruti Dzire, Luxury Tempo Travellers) driven by experienced, polite mountain chauffeurs.',
  },
  {
    icon: Hotel,
    title: 'Curated Stays & Houseboats',
    description:
      'Handpicked heritage resorts, mountain view tea estate bungalows in Munnar, and authentic private air-conditioned houseboats in Alleppey.',
  },
  {
    icon: Sparkles,
    title: 'India’s Sacred Paths',
    description:
      'Specialized pilgrimage coordination with priority darshan guidance, senior citizen care, and pure vegetarian meals for Kedarnath, Badrinath, Kashi, and South Indian shrines.',
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Concierge',
    description:
      'Round-the-clock on-trip assistance from our local Kerala team. From transit coordination to restaurant recommendations, we are with you at every step.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent & Itemized Pricing',
    description:
      'Zero hidden costs, no surprise tolls or parking bills. Complete peace of mind with itemized inclusions and trusted local relationships.',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 inline-block">
            What We Offer
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Our Travel Services
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            From customized tour packages to luxury chauffeur fleet rentals, discover our end-to-end travel solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-[#f9fafb] p-8 rounded-3xl border border-gray-100 hover:border-[#1b4332]/30 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#e6f4ea] text-[#1b4332] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1b4332] group-hover:text-white transition-all">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#1b4332] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200/60">
                  <Link
                    href="/#booking-section"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4332] hover:text-[#2d6a4f] transition"
                  >
                    <span>Inquire for This Service</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#1b4332] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Need a Custom Travel Solution?</h3>
            <p className="text-sm text-white/80 mt-1 max-w-xl">
              Talk directly with our travel designers on WhatsApp or give us a call. We are available 7 days a week.
            </p>
          </div>
          <a
            href={createWhatsAppLink('Hello Dayoff Journeys! I would like to inquire about your travel services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
