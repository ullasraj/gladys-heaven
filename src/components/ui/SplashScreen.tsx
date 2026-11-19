'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plane, Sparkles, Compass } from 'lucide-react';

export function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isDone, setIsDone] = useState(false);
  const [phase, setPhase] = useState<'intro' | 'logo' | 'brand' | 'ready'>('intro');

  useEffect(() => {
    // 10-second total duration: 100 updates of 100ms
    const interval = 100;
    const totalDuration = 10000;
    const step = 100 / (totalDuration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    // 1-second countdown timer
    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Choreographed animation phases across 10 seconds:
    const t1 = setTimeout(() => setPhase('logo'), 2200);   // Logo aura reveals
    const t2 = setTimeout(() => setPhase('brand'), 5000);  // Typography & tagline
    const t3 = setTimeout(() => setPhase('ready'), 8500);  // Final portal glow
    const t4 = setTimeout(() => setIsDone(true), 10000);   // Complete exit at 10s

    return () => {
      clearInterval(timer);
      clearInterval(countdownTimer);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleSkip = () => {
    setProgress(100);
    setIsDone(true);
  };

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070e1a] text-white overflow-hidden transition-all duration-1000 ease-in-out ${
        progress >= 100 ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dynamic Starlight Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#11233d] via-[#081220] to-[#040810]" />

      {/* Floating Animated Nebula Clouds */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b89047]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Twinkling Star Points */}
      <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 bg-amber-200 rounded-full animate-ping opacity-75" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-emerald-300 rounded-full animate-ping delay-500 opacity-60" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-1000 opacity-80" />
      <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-amber-100 rounded-full animate-ping delay-700 opacity-70" />

      {/* Animated Airplane Flight Path (Swooshing across over 10s) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-35" viewBox="0 0 1000 600" fill="none">
          <path
            d="M -100 500 C 300 450, 400 150, 1100 50"
            stroke="url(#flightGrad)"
            strokeWidth="2.5"
            strokeDasharray="8 8"
          />
          <defs>
            <linearGradient id="flightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2d6a4f" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#b89047" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#25D366" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Flight Jet with Glowing Tail */}
        <div
          className="absolute text-amber-300 transition-all duration-[10000ms] ease-out"
          style={{
            left: `${Math.min(progress * 1.1, 102)}%`,
            top: `${Math.max(70 - progress * 0.65, 8)}%`,
            transform: `rotate(${Math.min(-15 - progress * 0.15, -30)}deg) scale(1.3)`,
          }}
        >
          <div className="relative">
            <Plane size={28} className="fill-amber-300 filter drop-shadow-[0_0_12px_#b89047]" />
            <span className="absolute -bottom-1 -left-3 w-8 h-1 bg-gradient-to-l from-amber-400 to-transparent blur-[1px] opacity-80" />
          </div>
        </div>
      </div>

      {/* Skip Button on Top-Right */}
      <button
        onClick={handleSkip}
        className="absolute top-8 right-8 z-50 px-4 py-2 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
      >
        <span>Skip Intro</span>
        <span className="text-[10px] text-amber-300 font-mono">({timeLeft}s)</span>
      </button>

      {/* Main Core Animated Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-lg mx-auto">
        {/* Animated Expanding Rings around Logo */}
        <div className="relative mb-6">
          {/* Pulsing Aura Rings */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-amber-500/20 animate-ping opacity-40 blur-md" />
          <div className="absolute -inset-4 rounded-full border border-amber-400/30 animate-spin-slow opacity-60" />
          <div className="absolute -inset-8 rounded-full border border-dashed border-emerald-400/20 animate-spin-slow opacity-40" />

          {/* Logo Card with 3D Float */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-b from-white/95 to-slate-100 p-2 shadow-[0_0_50px_rgba(184,144,71,0.35)] border border-amber-300/40 flex items-center justify-center transform transition-all duration-700 hover:scale-105">
            <Image
              src="/images/logo.jpg"
              alt="Glady's Heaven"
              width={120}
              height={120}
              priority
              className="object-contain w-full h-full rounded-2xl"
            />
          </div>
        </div>

        {/* Brand Name Typography with Shimmer Entrance */}
        <div className="overflow-hidden mb-2">
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight">
            <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              Glady&apos;s{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 drop-shadow-[0_2px_12px_rgba(184,144,71,0.4)]">
              Heaven
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#b89047] font-semibold mb-6 flex items-center justify-center gap-2">
          <Sparkles size={13} className="text-amber-400 animate-spin-slow" />
          <span>Travel Beyond Dreams</span>
          <Sparkles size={13} className="text-amber-400 animate-spin-slow" />
        </p>

        {/* Dynamic Status Text that shifts across the 10 seconds */}
        <div className="h-6 mb-8">
          <p className="text-xs font-light text-slate-300 tracking-wider animate-fade-in-up">
            {progress < 30 && '✦ Navigating Breathtaking Horizons...'}
            {progress >= 30 && progress < 60 && '✦ Preparing Curated South India Escapes...'}
            {progress >= 60 && progress < 85 && '✦ Unlocking India’s Sacred Paths...'}
            {progress >= 85 && '✦ Welcome to Glady’s Heaven!'}
          </p>
        </div>

        {/* Glowing Progress Bar with Indicator */}
        <div className="w-64 sm:w-80 flex flex-col items-center gap-2">
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-0.5 border border-white/15 backdrop-blur-md">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#b89047] shadow-[0_0_12px_#b89047] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="w-full flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Loading Experience</span>
            <span className="text-amber-300 font-bold">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
