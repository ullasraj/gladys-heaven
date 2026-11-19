'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  Menu,
  X,
  Phone,
  Calendar,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { BookingModal } from '@/components/ui/BookingModal';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tour Packages', href: '/packages' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Sacred Paths', href: '/sacred-paths', highlight: true },
  { name: 'Fleet & Rentals', href: '/fleet' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900 border-b border-slate-100'
            : 'bg-white py-4 text-slate-900 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Compass size={22} className="stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  DAYOFF
                </span>
                <span className="text-xl sm:text-2xl font-light text-emerald-600">
                  JOURNEYS
                </span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 -mt-1">
                Curated Travel &bull; Kerala
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                  }`}
                >
                  {link.highlight && (
                    <Sparkles size={14} className="text-amber-500 fill-amber-400" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919633403404"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 px-3 py-2 border border-slate-200 rounded-xl hover:border-emerald-300 transition"
            >
              <Phone size={14} className="text-emerald-600" />
              <span>+91 96334 03404</span>
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-sm font-bold shadow-md shadow-emerald-600/25 transition-all hover:shadow-lg active:scale-95"
            >
              <Calendar size={16} />
              <span>Plan My Trip</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setModalOpen(true)}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
            >
              Plan Trip
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fade-in">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    {link.highlight && (
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                        Special
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+919633403404"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <Phone size={16} className="text-emerald-600" />
                Call +91 96334 03404
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-emerald-600 text-white text-sm font-bold shadow-md hover:bg-emerald-700 transition"
              >
                Custom Trip Quotation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageTitle="Tailored Holiday Plan"
      />
    </>
  );
}
