'use client';

import React from 'react';
import { Search, FileText, Plane, MapPin, Camera } from 'lucide-react';

const steps = [
  {
    step: '1',
    icon: Search,
    title: 'Discover',
    description: 'Browse curated destinations and packages',
  },
  {
    step: '2',
    icon: FileText,
    title: 'Plan',
    description: 'Customize your itinerary with our experts',
  },
  {
    step: '3',
    icon: Plane,
    title: 'Book',
    description: 'Secure your trip with easy payment options',
  },
  {
    step: '4',
    icon: MapPin,
    title: 'Travel',
    description: 'Enjoy 24/7 support during your journey',
  },
  {
    step: '5',
    icon: Camera,
    title: 'Remember',
    description: 'Create memories that last forever',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f9fafb] via-white to-[#f9fafb] border-y border-gray-100 overflow-hidden relative">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#e6f4ea] text-[#1b4332] text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            Seamless Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Your Journey with Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-normal">
            From inspiration to unforgettable memories — we&apos;re with you every step
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Animated Connecting Guide Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-emerald-600/20 via-emerald-600/50 to-emerald-600/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Icon Circle Container with Ripple Effect */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-[#2d6a4f]/25 shadow-lg flex items-center justify-center text-[#1b4332] group-hover:scale-110 group-hover:border-[#1b4332] group-hover:bg-[#e6f4ea] group-hover:shadow-xl group-hover:shadow-emerald-900/10 transition-all duration-500 ease-out relative">
                      <Icon
                        size={32}
                        className="stroke-[1.8] transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Animated Number Badge with Floating Glow */}
                    <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#1b4332] text-white text-xs font-extrabold flex items-center justify-center shadow-md border-2 border-white group-hover:bg-[#b89047] group-hover:scale-110 transition-all duration-300">
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#1b4332] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 max-w-[200px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
