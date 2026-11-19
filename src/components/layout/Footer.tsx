import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Heart,
  MessageCircle,
} from 'lucide-react';
import { createWhatsAppLink } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Compass size={22} className="stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black tracking-tight text-white">DAYOFF</span>
                  <span className="text-2xl font-light text-emerald-400">JOURNEYS</span>
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                  Your Day Off, Perfectly Planned
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Kerala&apos;s premier personalized tour planner. We transform your holidays into authentic, seamless adventures across South India&apos;s misty hills, tranquil backwaters, and India&apos;s most revered Sacred Paths.
            </p>

            {/* Quick Contact Badges */}
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Door No. 221/A, Kottakkal - Perinthalmanna Road, Chappanangadi, Kerala 676503, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Phone size={16} className="text-emerald-400 shrink-0" />
                <a href="tel:+919633403404" className="hover:text-white transition">
                  +91 96334 03404
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail size={16} className="text-emerald-400 shrink-0" />
                <a href="mailto:info@dayoffjourneys.com" className="hover:text-white transition">
                  info@dayoffjourneys.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock size={16} className="text-emerald-400 shrink-0" />
                <span>Operating Hours: Monday – Sunday: 9:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 2: Popular Packages */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Popular Packages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/packages/south-india-paradise"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-emerald-500" />
                  South India Paradise
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/kerala-serenity-backwaters"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-emerald-500" />
                  Munnar &amp; Alleppey Cruise
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/sacred-paths-chardham-kedarnath"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-emerald-500" />
                  Kedarnath &amp; Badrinath Yatra
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/spiritual-south-madurai-rameswaram"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-emerald-500" />
                  Madurai &amp; Rameswaram
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/wayanad-wilderness-trails"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-emerald-500" />
                  Wayanad Nature &amp; Caves
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Top Destinations */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/destinations/munnar" className="hover:text-emerald-400 transition">
                  Munnar Tea Hills
                </Link>
              </li>
              <li>
                <Link href="/destinations/ooty" className="hover:text-emerald-400 transition">
                  Ooty Nilgiris
                </Link>
              </li>
              <li>
                <Link href="/destinations/kodaikanal" className="hover:text-emerald-400 transition">
                  Kodaikanal Lake
                </Link>
              </li>
              <li>
                <Link href="/destinations/alleppey" className="hover:text-emerald-400 transition">
                  Alleppey Backwaters
                </Link>
              </li>
              <li>
                <Link href="/destinations/kedarnath" className="hover:text-emerald-400 transition">
                  Kedarnath Dham
                </Link>
              </li>
              <li>
                <Link href="/destinations/goa" className="hover:text-emerald-400 transition">
                  Goa Coastal Haven
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Trust */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Company &amp; Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About Dayoff Journeys
                </Link>
              </li>
              <li>
                <Link href="/sacred-paths" className="hover:text-emerald-400 transition">
                  India&apos;s Sacred Paths
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-emerald-400 transition">
                  Fleet &amp; Chauffeur Rentals
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Contact &amp; Custom Quote
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600 hover:text-white transition"
              >
                <MessageCircle size={14} />
                WhatsApp Direct Help
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Dayoff Journeys. All rights reserved. Crafted for extraordinary travel.
          </p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck size={14} className="text-emerald-500" />
              Verified Local Tour Operator • Kerala
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> for travelers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
