'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Compass, Sparkles, ChevronRight } from 'lucide-react';
import { AirplaneCanvas3D } from './AirplaneCanvas3D';

export function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isDone, setIsDone] = useState(false);
  const [stage, setStage] = useState<1 | 2 | 3 | 4>(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Floating Golden Dust Particle Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 60 floating golden and cyan stardust particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -Math.random() * 0.7 - 0.2, // Drift upward
      alpha: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.35 ? '#b89047' : '#38bdf8',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.pulseSpeed;

        if (p.alpha > 0.9 || p.alpha < 0.15) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.shadowBlur = p.radius * 4;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 10-Second Telemetry Counter
  useEffect(() => {
    const totalDuration = 10000;
    const intervalTime = 40; // 40ms updates for ultra-smooth 60fps flight trajectory
    const increment = 100 / (totalDuration / intervalTime);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const countdownTimer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const s2 = setTimeout(() => setStage(2), 2400); // 2.4s: Logo & Astrolabe
    const s3 = setTimeout(() => setStage(3), 5200); // 5.2s: Brand typography
    const s4 = setTimeout(() => setStage(4), 8400); // 8.4s: Gateway portal
    const end = setTimeout(() => setIsDone(true), 10000); // 10s: Fade out

    return () => {
      clearInterval(progressTimer);
      clearInterval(countdownTimer);
      clearTimeout(s2);
      clearTimeout(s3);
      clearTimeout(s4);
      clearTimeout(end);
    };
  }, []);

  const handleSkip = () => {
    setProgress(100);
    setIsDone(true);
  };

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#040810] text-white overflow-hidden select-none transition-all duration-1000 ease-in-out ${
        progress >= 100 ? 'opacity-0 scale-105 blur-lg pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ perspective: '1400px' }}
    >
      {/* HTML5 Canvas Particle Engine */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Atmospheric Radial Caustics & Sky Horizon Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,_rgba(184,144,71,0.15)_0%,_rgba(27,67,50,0.22)_35%,_rgba(4,8,16,0.98)_100%)] pointer-events-none z-0" />

      {/* High-Altitude Horizon Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1100px] h-64 bg-gradient-to-t from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Passing Atmospheric 3D Cloud Wisps */}
      <div
        className="absolute top-1/3 -left-40 w-[600px] h-44 bg-white/[0.025] rounded-full blur-3xl pointer-events-none transition-transform duration-[10000ms]"
        style={{ transform: `translateX(${progress * 6}px)` }}
      />
      <div
        className="absolute top-1/2 -right-40 w-[700px] h-52 bg-emerald-300/[0.02] rounded-full blur-3xl pointer-events-none transition-transform duration-[10000ms]"
        style={{ transform: `translateX(${-progress * 5}px)` }}
      />

      {/* ========================================================================= */}
      {/* 3D HARDWARE-ACCELERATED WEBGL AIRLINER & TWIN CONTRAIL FLIGHT SYSTEM */}
      {/* ========================================================================= */}
      <AirplaneCanvas3D progress={progress} />

      {/* Top Header Row with Chrono Counter & Skip Option */}
      <div className="absolute top-8 left-8 right-8 z-30 flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-xs text-amber-200/75 font-mono tracking-widest uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Glady&apos;s Heaven &bull; Luxury Travel Suite</span>
        </div>

        <button
          onClick={handleSkip}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          <span>Skip Experience</span>
          <span className="text-[10px] text-amber-300 font-mono">({secondsRemaining}s)</span>
          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Core Center Presentation */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-xl mx-auto">
        {/* Precision Astrolabe / Celestial Rotating Rings */}
        <div className="relative w-44 h-44 sm:w-48 sm:h-48 mb-8 flex items-center justify-center">
          {/* Outer Celestial Compass Ring */}
          <div className="absolute inset-0 rounded-full border border-amber-400/20 animate-spin-slow opacity-60" />
          {/* Inner Geodetic Dotted Ring (Reverse Rotation) */}
          <div
            className="absolute inset-3 rounded-full border border-dashed border-emerald-400/25 opacity-50"
            style={{ animation: 'spinSlow 24s linear infinite reverse' }}
          />
          {/* Ambient Glowing Halo */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-amber-500/20 via-emerald-500/15 to-transparent blur-xl animate-pulse-glow" />

          {/* Compass Axis Crosshairs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-amber-200 to-transparent" />
          </div>

          {/* Centered Luxury Logo Frame */}
          <div
            className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-b from-white/95 to-slate-100 p-2 shadow-[0_0_60px_rgba(184,144,71,0.35)] border border-amber-300/40 flex items-center justify-center transform transition-all duration-1000 ${
              stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <Image
              src="/images/logo.jpg"
              alt="Glady's Heaven"
              width={124}
              height={124}
              priority
              className="object-contain w-full h-full rounded-2xl"
            />
          </div>
        </div>

        {/* Brand Name Typography */}
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-tight mb-2">
            <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]">
              Glady&apos;s{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c278] via-[#f7e0a7] to-[#b89047] drop-shadow-[0_2px_16px_rgba(184,144,71,0.45)]">
              Heaven
            </span>
          </h1>
        </div>

        {/* Slogan with Expanding Letter Spacing */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.38em] text-[#b89047] uppercase mb-7 flex items-center justify-center gap-3">
            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#b89047]" />
            <Sparkles size={13} className="text-amber-300 animate-spin-slow" />
            <span>Travel Beyond Dreams</span>
            <Sparkles size={13} className="text-amber-300 animate-spin-slow" />
            <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#b89047]" />
          </p>
        </div>

        {/* Dynamic Contextual Telemetry Message */}
        <div className="h-7 mb-9 flex items-center justify-center">
          <p className="text-xs sm:text-sm font-light text-slate-300 tracking-wider transition-all duration-500 font-mono">
            {progress < 25 && '✦ 01/04 &bull; Synchronizing Satellite Coordinates...'}
            {progress >= 25 && progress < 50 && '✦ 02/04 &bull; Curating South India Paradise Escapes...'}
            {progress >= 50 && progress < 75 && '✦ 03/04 &bull; Verifying Sacred Pilgrimage Sanctuaries...'}
            {progress >= 75 && progress < 95 && '✦ 04/04 &bull; Preparing Luxury Chauffeur Fleet...'}
            {progress >= 95 && '✦ Welcome to Glady’s Heaven • Departure Confirmed!'}
          </p>
        </div>

        {/* High-Precision Chrono Progress Bar */}
        <div className="w-72 sm:w-96 flex flex-col items-center gap-2.5">
          <div className="relative w-full h-[3px] rounded-full bg-white/10 overflow-visible">
            {/* Glowing active bar */}
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#b89047] transition-all duration-75 ease-linear relative"
              style={{ width: `${progress}%` }}
            >
              {/* Leading illuminated head */}
              <span className="absolute -top-[3px] -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_10px_#e5c278] ring-2 ring-white/40" />
            </div>
          </div>

          <div className="w-full flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
            <span className="flex items-center gap-1.5">
              <Compass size={12} className="text-emerald-400" />
              <span>INITIALIZING SYSTEM</span>
            </span>
            <span className="text-amber-300 font-bold tracking-wider">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Coordinates & Watermark */}
      <div className="absolute bottom-6 left-8 right-8 z-20 flex items-center justify-between text-[10px] text-slate-500 font-mono hidden sm:flex">
        <span>LAT: 9.9312° N &bull; LON: 76.2673° E [KERALA]</span>
        <span>LUXURY CONCIERGE &bull; 24/7 SUPPORT</span>
      </div>
    </div>
  );
}
