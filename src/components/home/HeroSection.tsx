'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

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
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setCurrent((prev) => (prev + 1) % slides.length);
      setTimeout(() => setAnimating(false), 800);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (index: number) => {
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 800);
  };

  const prevSlide = () => {
    const nextIdx = (current - 1 + slides.length) % slides.length;
    changeSlide(nextIdx);
  };

  const nextSlide = () => {
    const nextIdx = (current + 1) % slides.length;
    changeSlide(nextIdx);
  };

  return (
    <section className="relative w-full h-[88vh] min-h-[600px] max-h-[850px] overflow-hidden bg-black select-none">
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
            {/* Background image with Ken Burns zoom animation */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35" />
            <div className="absolute inset-0 bg-black/20" />

            {/* Content Container */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-left">
              {/* Floating pill badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/30 mb-5 shadow-lg transition-all duration-700 animate-float ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
              >
                <Sparkles size={14} className="text-amber-300 animate-spin-slow" />
                <span>Where Memories Are Beautifully Crafted</span>
              </div>

              {/* Brand Title */}
              <h2
                className={`text-lg sm:text-xl font-bold text-emerald-300 tracking-wide mb-1 transition-all duration-700 delay-100 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {slide.title}
              </h2>

              {/* Sub-tag pill with pulse glow */}
              <div
                className={`inline-block px-3.5 py-1 rounded-md bg-[#2d6a4f]/95 text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm border border-emerald-400/30 transition-all duration-700 delay-150 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {slide.tag}
              </div>

              {/* Main Headline */}
              <h1
                className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-[1.12] tracking-tight transition-all duration-700 delay-200 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {slide.headline}
              </h1>

              {/* Subtitle */}
              <p
                className={`mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-light leading-relaxed transition-all duration-700 delay-300 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {slide.subtitle}
              </p>

              {/* CTA button with hover arrow movement & glow */}
              <div
                className={`mt-9 transition-all duration-700 delay-500 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Link
                  href={slide.ctaLink}
                  className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-sm font-semibold shadow-xl shadow-black/40 transition-all duration-300 hover:scale-105 hover:shadow-emerald-900/40 active:scale-95 border border-emerald-400/30"
                >
                  <span>Explore Now</span>
                  <ArrowRight
                    size={16}
                    className="transform transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Nav Chevrons with hover scale */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 border border-white/25 hover:scale-110 active:scale-90 shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 border border-white/25 hover:scale-110 active:scale-90 shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight size={26} />
      </button>

      {/* Indicator Dots with expanding active bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            className={`transition-all duration-500 rounded-full ${
              current === i
                ? 'w-10 h-2.5 bg-white shadow-lg'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
