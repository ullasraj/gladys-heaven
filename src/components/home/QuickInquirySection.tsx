'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  User,
  MapPin,
  Calendar,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { createWhatsAppLink } from '@/lib/utils';

export function QuickInquirySection() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [destination, setDestination] = useState('Munnar, Kerala');
  const [travelDates, setTravelDates] = useState('');
  const [message, setMessage] = useState('');

  const handleStartWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim() || 'Traveler';
    const text = `Hello Glady's Heaven! I would like to plan my vacation with you.\nName: ${fullName}\nDestination: ${destination}\nTravel Dates: ${travelDates || 'Flexible'}\nNotes: ${message || 'Please send customized package details.'}`;
    window.open(createWhatsAppLink(text), '_blank');
  };

  return (
    <section id="booking-section" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Available Badge with Dual Pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#e6f4ea] text-[#1b4332] text-xs font-semibold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <span>Available Now &bull; Instant Response</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] leading-[1.15] tracking-tight">
              Ready for your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#b89047]">
                Dream Vacation?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Let us handle the planning while you pack your bags. We&apos;re just a message away from starting your next adventure.
            </p>

            {/* Contact Quick Cards with hover lift & glow */}
            <div className="space-y-4 pt-4">
              {/* Phone Card */}
              <a
                href="tel:+919847012345"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#f9fafb] border border-gray-100 hover:border-[#1b4332]/40 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e6f4ea] text-[#1b4332] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#1b4332] group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block">
                    Call Us Anytime
                  </span>
                  <span className="text-sm font-bold text-[#111827] group-hover:text-[#1b4332] transition-colors">
                    +91 98470 12345
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:contact@gladysheaven.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#f9fafb] border border-gray-100 hover:border-[#1b4332]/40 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e6f4ea] text-[#1b4332] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#1b4332] group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block">
                    Send an Email
                  </span>
                  <span className="text-sm font-bold text-[#111827] group-hover:text-[#1b4332] transition-colors">
                    contact@gladysheaven.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column ("Send a Request" Card - 7 cols) with soft shadow & interactive focus */}
          <div className="lg:col-span-7">
            <div className="group/form bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              {/* Animated Watermark Chat Icon */}
              <div className="absolute -top-6 -right-6 text-gray-100/80 group-hover/form:text-emerald-50 transition-colors duration-500 pointer-events-none transform group-hover/form:rotate-6 transition-transform">
                <MessageSquare size={150} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2">
                  <span>Send a Request</span>
                  <Sparkles size={18} className="text-[#b89047]" />
                </h3>

                <form onSubmit={handleStartWhatsApp} className="space-y-4">
                  {/* First & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        First Name
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                        <input
                          type="text"
                          required
                          placeholder="John"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Last Name
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                        <input
                          type="text"
                          required
                          placeholder="Doe"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Destination
                    </label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none transition-all duration-200 cursor-pointer"
                      >
                        <option value="Munnar, Kerala">Munnar, Kerala</option>
                        <option value="Kodaikanal, Tamil Nadu">Kodaikanal, Tamil Nadu</option>
                        <option value="Ooty, Tamil Nadu">Ooty, Tamil Nadu</option>
                        <option value="Alleppey Backwaters, Kerala">Alleppey Backwaters, Kerala</option>
                        <option value="Wayanad, Kerala">Wayanad, Kerala</option>
                        <option value="South India Paradise (Munnar + Ooty + Kodai)">
                          South India Paradise (Munnar + Ooty + Kodai)
                        </option>
                        <option value="Kedarnath & Chardham (Sacred Paths)">
                          Kedarnath &amp; Chardham (Sacred Paths)
                        </option>
                        <option value="Kashi Vishwanath, Varanasi">Kashi Vishwanath, Varanasi</option>
                        <option value="Madurai & Rameswaram">Madurai &amp; Rameswaram</option>
                        <option value="Goa Beaches & Heritage">Goa Beaches &amp; Heritage</option>
                        <option value="Custom Multiple Destinations">Custom Multiple Destinations</option>
                      </select>
                    </div>
                  </div>

                  {/* Travel Dates */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Travel Dates
                    </label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Pick a date range (e.g. Next Month / Oct 15 - 20)"
                        value={travelDates}
                        onChange={(e) => setTravelDates(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us more about your preferences (e.g. number of people, accommodation style, etc.)..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button with Hover Bounce & Scale */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.584 1.961.914 3.011.915h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.768-5.767zm0-1.672c4.103 0 7.44 3.336 7.44 7.439 0 4.103-3.337 7.44-7.44 7.44-1.282 0-2.483-.327-3.541-.937l-4.49 1.176 1.198-4.382c-.7-1.127-1.107-2.457-1.107-3.897 0-4.103 3.337-7.439 7.44-7.439z" />
                      </svg>
                      <span>Start Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
