'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    tag: 'Explore All',
    title: "Glady's Heaven",
    headline: 'Explore India, One Destination at a Time',
    subtitle: 'Discover breathtaking destinations crafted for every kind of traveler.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85',
    ctaLink: '/destinations',
  },
  {
    id: 2,
    tag: 'Trending Now',
    title: "Glady's Heaven",
    headline: 'Travel What Everyone’s Talking About',
    subtitle: 'Explore the most loved and trending travel experiences of the season.',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=2000&q=85',
    ctaLink: '/destinations',
  },
  {
    id: 3,
    tag: 'Spiritual Journey',
    title: "Glady's Heaven",
    headline: 'Discover India’s Sacred Paths',
    subtitle: 'Begin a soulful journey to sacred places that inspire peace and devotion.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    ctaLink: '/destinations',
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[580px] max-h-[820px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background image */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
            <div className="absolute inset-0 bg-black/25" />

            {/* Content Container */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-left">
              {/* Top pill badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/25 mb-4 shadow-sm animate-fade-in">
                <Sparkles size={14} className="text-emerald-300" />
                <span>Where Memories Are Beautifully Crafted</span>
              </div>

              {/* Brand Title */}
              <h2 className="text-lg sm:text-xl font-bold text-emerald-300 mb-1">
                {slide.title}
              </h2>

              {/* Sub-tag pill */}
              <div className="inline-block px-3 py-0.5 rounded-md bg-[#2d6a4f]/90 text-white text-xs font-semibold uppercase tracking-wider mb-3">
                {slide.tag}
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-3xl leading-[1.15] tracking-tight">
                {slide.headline}
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                {slide.subtitle}
              </p>

              {/* CTA button */}
              <div className="mt-8">
                <Link
                  href={slide.ctaLink}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-sm font-semibold shadow-lg shadow-black/30 transition-all hover:scale-105 active:scale-95"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Nav Chevrons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition border border-white/20 active:scale-90"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition border border-white/20 active:scale-90"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? 'w-8 h-2.5 bg-white shadow-md'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
