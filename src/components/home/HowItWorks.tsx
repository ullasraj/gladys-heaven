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
    <section className="py-20 bg-[#f9fafb] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Your Journey with Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-normal">
            From inspiration to unforgettable memories — we&apos;re with you every step
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Connecting line (visible on lg screens) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#2d6a4f]/25 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-center text-center group">
                  {/* Icon Circle Container */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-[#2d6a4f]/30 shadow-md flex items-center justify-center text-[#1b4332] group-hover:scale-110 group-hover:border-[#1b4332] group-hover:bg-[#e6f4ea] transition-all duration-300">
                      <Icon size={28} className="stroke-[1.8]" />
                    </div>

                    {/* Number Badge */}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#1b4332] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-[#111827] mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 max-w-[190px] leading-relaxed">
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
