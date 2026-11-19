import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  MapPin,
  ShieldCheck,
  HeartHandshake,
  Users,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';

export const metadata = {
  title: "About Us | Glady's Heaven - Travel Beyond Dreams",
  description:
    "Learn about Glady's Heaven. We specialize in bespoke holiday planning, dedicated fleet services, and sacred pilgrimages across India.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 inline-block">
            Our Story &amp; Ethos
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            About Glady&apos;s Heaven
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Born from a deep love for travel and timeless landscapes, we believe your precious days off should be filled with discovery, serenity, and genuine local warmth.
          </p>
        </div>
      </section>

      {/* Story & Roots Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Rooted in God&apos;s Own Country
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              From Kerala&apos;s Emerald Hills to the Snowy Peaks of the Himalayas
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Headquartered at <strong>Horizon Grandeur, Marine Drive in Kochi, Kerala</strong>, Glady&apos;s Heaven was created to redefine holiday planning for discerning travelers. Unlike impersonal mega-booking portals that push automated cookie-cutter packages, we treat every traveler as a guest in our home.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether it is sipping freshly plucked tea overlooking the mist-filled valleys of Munnar, cruising silently along the backwater canals of Alleppey on a private Kettuvallam, or seeking blessings at Kedarnath and Kashi Vishwanath, we coordinate every detail with unswerving dedication.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <div className="border-l-2 border-emerald-600 pl-4">
                <span className="text-2xl font-black text-slate-900 block">1,500+</span>
                <span className="text-xs text-slate-500">Delighted Travelers</span>
              </div>
              <div className="border-l-2 border-emerald-600 pl-4">
                <span className="text-2xl font-black text-slate-900 block">4.9 / 5</span>
                <span className="text-xs text-slate-500">Guest Rating</span>
              </div>
              <div className="border-l-2 border-emerald-600 pl-4">
                <span className="text-2xl font-black text-slate-900 block">100%</span>
                <span className="text-xs text-slate-500">Verified Stays &amp; Fleet</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
              alt="Kerala Backwaters Dayoff Journeys"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
              <span className="font-bold text-sm block">Authentic Kerala Stays</span>
              <span>Traditional Kettuvallam cruising through tranquil Alleppey canals</span>
            </div>
          </div>
        </div>

        {/* Pillars / Values */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              What Sets Dayoff Journeys Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center mb-5">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Personalized Hospitality</h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                You never speak to a generic call center bot. Our dedicated trip managers work one-on-one with you to understand your family’s rhythm and preferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center mb-5">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Safety &amp; Verified Fleet</h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Our drivers are mountain-route veterans with spotless driving records, fluent in regional languages, and dedicated to passenger safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center mb-5">
                <Sparkles size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Transparent &amp; Fair</h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                No surprises or deceptive commission traps. We offer itemized tariffs, clear inclusions, and honest accommodation reviews before you book.
              </p>
            </div>
          </div>
        </div>

        {/* Office Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Visit Our Office
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Glady&apos;s Heaven Office
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Drop in for a cup of freshly brewed tea and let our destination designers walk you through custom route maps and exclusive resort collections.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Level 3, Horizon Grandeur, Marine Drive, Kochi, Kerala 682031, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Compass size={18} className="text-emerald-600 shrink-0" />
                  <span>Open 7 Days a Week: 9:00 AM – 10:00 PM IST</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl text-center space-y-4">
              <h4 className="text-lg font-bold">Have an upcoming holiday in mind?</h4>
              <p className="text-xs text-slate-300">
                Get an instant quote and consultation with no upfront commitment.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition"
              >
                <span>Contact Travel Desk</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
