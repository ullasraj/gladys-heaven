import React from 'react';
import {
  SlidersHorizontal,
  Hotel,
  Car,
  Headphones,
  BadgePercent,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const features = [
  {
    icon: SlidersHorizontal,
    title: '100% Personalized Itineraries',
    description:
      'No rigid schedules or forced shopping stops. Every trip is tailored to your family’s pace, interests, budget, and travel preferences.',
    color: 'emerald',
  },
  {
    icon: Hotel,
    title: 'Handpicked & Verified Stays',
    description:
      'From mist-wrapped tea estate bungalows in Munnar to private air-conditioned houseboats in Alleppey, we inspect every property for hygiene and comfort.',
    color: 'teal',
  },
  {
    icon: Car,
    title: 'Dedicated Fleet & Courteous Drivers',
    description:
      'Travel in sanitized Innova Crystas, Sedans, or Luxury Tempo Travellers driven by courteous, mountain-route certified chauffeurs.',
    color: 'emerald',
  },
  {
    icon: Headphones,
    title: '24/7 Ground Assistance',
    description:
      'Your personal travel concierge remains on call throughout your journey to coordinate smooth hotel check-ins, boat arrivals, and road transit.',
    color: 'teal',
  },
  {
    icon: BadgePercent,
    title: 'Transparent Pricing Guarantee',
    description:
      'Clear, itemized quotations with zero hidden surprises. Vehicle taxes, tolls, parking, and driver allowances are all factored in upfront.',
    color: 'emerald',
  },
  {
    icon: MapPin,
    title: 'Rooted In Kerala, Trusted Nationwide',
    description:
      'Operating from our Chappanangadi (Kottakkal) headquarters, our deep local connections unlock authentic experiences standard travel portals miss.',
    color: 'teal',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Dayoff Journeys Advantage"
          title="Why Travelers Choose Us Over Mega Portals"
          subtitle="We treat your vacation as our own, ensuring heartfelt hospitality, seasoned chauffeurs, and unforgettable memories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Local Assurance Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-emerald-100 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
            <CheckCircle2 size={18} className="text-emerald-600" />
            <span>Over 1,500+ Happy Travelers Guided</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
            <CheckCircle2 size={18} className="text-emerald-600" />
            <span>4.9 / 5 Average Customer Rating</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
            <CheckCircle2 size={18} className="text-emerald-600" />
            <span>Govt. Approved Tourism Vehicles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
