import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export function PremiumExperienceBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl py-24 px-6 sm:px-12 md:px-16 text-center flex flex-col items-center justify-center min-h-[440px] border border-gray-100">
          {/* Background image with gentle hover zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80')`,
            }}
          />

          {/* Deep dark tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80 backdrop-blur-[1px]" />

          {/* Floating animated sparkles */}
          <div className="absolute top-8 left-1/4 w-2 h-2 rounded-full bg-amber-400 animate-ping opacity-60 pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-60 delay-1000 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Pill badge with float animation */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-white/30 shadow-lg animate-float">
              <Sparkles size={14} className="text-amber-300" />
              <span>Premium Experiences</span>
            </div>

            {/* Headline with glowing accent */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.15] tracking-tight">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                Travel Experience
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-light leading-relaxed">
              From personalized itineraries to luxury fleet services, we offer comprehensive travel solutions tailored to your unique needs.
            </p>

            {/* Button with arrow transition & glow */}
            <div className="mt-9">
              <Link
                href="/services"
                className="group/btn inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-sm font-semibold shadow-xl shadow-black/40 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/30 hover:shadow-emerald-900/40"
              >
                <span>Explore Our Services</span>
                <ArrowRight
                  size={16}
                  className="transform transition-transform duration-300 group-hover/btn:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
