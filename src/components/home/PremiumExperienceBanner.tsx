import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export function PremiumExperienceBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl py-20 px-6 sm:px-12 md:px-16 text-center flex flex-col items-center justify-center min-h-[420px]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80')`,
            }}
          />

          {/* Deep dark tint overlay */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-white/25">
              <Sparkles size={14} className="text-emerald-300" />
              <span>Premium Experiences</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Elevate Your <br />
              <span className="text-emerald-400">Travel Experience</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl font-light leading-relaxed">
              From personalized itineraries to luxury fleet services, we offer comprehensive travel solutions tailored to your unique needs.
            </p>

            {/* Button */}
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-sm font-semibold shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
