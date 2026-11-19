'use client';

import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { createWhatsAppLink } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function QuickInquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Munnar & South India Paradise',
    travelDate: '',
    travelers: '2 Adults',
    budget: 'Standard (3 Star Comfort)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello Dayoff Journeys! I would like to get a quote for a custom trip.\nName: ${formData.name || 'Traveler'}\nDestination: ${formData.destination}\nTravel Date: ${formData.travelDate || 'Flexible'}\nTravelers: ${formData.travelers}\nNotes: ${formData.message || 'Please send customized package details.'}`;
    window.open(createWhatsAppLink(text), '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
              Free Itinerary Planning
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to Escape? Plan Your Custom Vacation in 2 Minutes.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tell us your destination dreams and travel style. Our Kerala holiday specialists will craft a customized itinerary with transparent pricing within a few hours.
            </p>

            <div className="pt-2 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Obligation, 100% Free</h4>
                  <p className="text-xs text-slate-400">Receive an itemized quote with no hidden booking fees.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct WhatsApp &amp; Phone Line</h4>
                  <p className="text-xs text-slate-400">Call our Chappanangadi office anytime at +91 96334 03404.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 size={56} className="text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900">Quotation Request Sent!</h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you! Our travel planner is preparing your customized itinerary and will get back to you at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition"
                  >
                    <MessageCircle size={18} />
                    Continue on WhatsApp
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200 transition"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 96334 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                    >
                      <option value="South India Paradise (Munnar, Ooty, Kodai)">
                        South India Paradise (Munnar, Ooty, Kodai)
                      </option>
                      <option value="Munnar & Alleppey Backwaters">Munnar &amp; Alleppey Backwaters</option>
                      <option value="Kedarnath & Chardham Sacred Path">Kedarnath &amp; Chardham Sacred Path</option>
                      <option value="Wayanad Rainforests & Waterfalls">Wayanad Rainforests &amp; Waterfalls</option>
                      <option value="Madurai & Rameswaram Temple Trail">Madurai &amp; Rameswaram Temple Trail</option>
                      <option value="Goa Beaches & Heritage">Goa Beaches &amp; Heritage</option>
                      <option value="Custom Multiple Destinations">Custom Multiple Destinations</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Travelers Count
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                    >
                      <option value="1 Solo Traveler">1 Solo Traveler</option>
                      <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                      <option value="3-4 Family Members">3-4 Family Members</option>
                      <option value="5-8 Group">5-8 Group</option>
                      <option value="9+ Big Group">9+ Big Group</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Hotel Category
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                    >
                      <option value="Budget Friendly">Budget Friendly</option>
                      <option value="Standard (3 Star Comfort)">Standard (3 Star Comfort)</option>
                      <option value="Deluxe (4 Star Resorts)">Deluxe (4 Star Resorts)</option>
                      <option value="Luxury (5 Star / Heritage)">Luxury (5 Star / Heritage)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Interested in Innova Crysta, candle-light dinner on houseboat, pickup from Coimbatore..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-md transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Submitting...' : 'Request Free Detailed Itinerary'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-3.5 px-5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-sm transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} className="text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
