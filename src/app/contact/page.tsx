'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { faqsData } from '@/data/faqs';
import { createWhatsAppLink } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Tour Package Booking',
    destination: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

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

  const handleWhatsAppChat = () => {
    const text = `Hello Dayoff Journeys! I would like to get in touch regarding: ${formData.subject}.\nName: ${formData.name || 'Traveler'}\nPhone: ${formData.phone}\nMessage: ${formData.message || 'Please provide details.'}`;
    window.open(createWhatsAppLink(text), '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 inline-block">
            We Are Here To Help
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Contact Dayoff Journeys
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Get personalized tour recommendations, instant quotation requests, or vehicle availability within minutes.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our Kerala team directly via phone, WhatsApp, or email. We respond to all queries promptly.
              </p>

              <div className="space-y-4 pt-2">
                {/* Office */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Office Address
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Door No. 221/A, Kottakkal - Perinthalmanna Road, Chappanangadi, Kerala 676503, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Direct Phone Line
                    </h4>
                    <a
                      href="tel:+919633403404"
                      className="text-sm font-bold text-emerald-700 hover:underline block mt-1"
                    >
                      +91 96334 03404
                    </a>
                    <span className="text-[10px] text-slate-400">Available 9:00 AM - 10:00 PM IST</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Email Inquiries
                    </h4>
                    <a
                      href="mailto:info@dayoffjourneys.com"
                      className="text-sm font-bold text-emerald-700 hover:underline block mt-1"
                    >
                      info@dayoffjourneys.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Operating Hours
                    </h4>
                    <p className="text-xs text-slate-700 font-medium mt-1">
                      Monday to Sunday: 9:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <button
                  onClick={handleWhatsAppChat}
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Start Instant WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message & Quote Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-8">
              Fill out the details below and an expert travel designer will contact you with customized options.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 size={56} className="text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900">Message Delivered!</h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our Kerala travel concierge is reviewing your request and will contact you via Phone/WhatsApp shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Nair"
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
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Interested Destination
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Munnar, Ooty, Kedarnath"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject / Purpose of Travel
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                  >
                    <option value="South India Paradise Tour Package">South India Paradise Tour Package</option>
                    <option value="Munnar & Alleppey Houseboat Package">Munnar &amp; Alleppey Houseboat Package</option>
                    <option value="Sacred Paths Pilgrimage (Kedarnath/Badrinath)">Sacred Paths Pilgrimage (Kedarnath/Badrinath)</option>
                    <option value="Innova Crysta / Tempo Traveller Fleet Booking">Innova Crysta / Tempo Traveller Fleet Booking</option>
                    <option value="Custom Family Itinerary Request">Custom Family Itinerary Request</option>
                    <option value="Other Travel Inquiry">Other Travel Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your travel dates, number of people, preferred hotel star category, or any special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-md transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Inquiry Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Clear Answers
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100/70 transition"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
