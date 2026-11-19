import React from 'react';
import { Compass, Edit3, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    step: '01',
    icon: Compass,
    title: 'Choose or Dream Your Trip',
    description:
      'Explore our curated packages or tell us where you wish to head—whether the misty hills of Munnar or a sacred temple circuit.',
  },
  {
    step: '02',
    icon: Edit3,
    title: 'Customize with Local Experts',
    description:
      'Collaborate with our Kerala-based travel planners. Adjust dates, room categories, sightseeing pace, and vehicle preferences freely.',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Instant Hassle-Free Confirmation',
    description:
      'Lock in your booking with a nominal advance token. Receive instant hotel vouchers, chauffeur details, and digital itinerary.',
  },
  {
    step: '04',
    icon: HeartHandshake,
    title: 'Enjoy Your Day Off!',
    description:
      'Arrive stress-free. Your dedicated chauffeur receives you at the airport/station and our 24/7 concierge looks after everything.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Seamless Process"
          title="How Your Journey Unfolds"
          subtitle="From your initial inquiry to your journey back home, we make vacation planning completely effortless."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 flex flex-col items-center text-center relative group hover:border-emerald-500/50 transition-all duration-300"
              >
                <span className="text-3xl font-black text-emerald-400/30 group-hover:text-emerald-400 transition-colors mb-2">
                  {item.step}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
