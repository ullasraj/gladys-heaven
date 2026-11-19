'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do you offer customizable tour packages?',
    answer:
      'Yes! We specialize in tailor-made itineraries. Whether you are looking for a honeymoon trip, a family vacation, or a spiritual journey, we can customize the entire plan to suit your preferences and budget.',
  },
  {
    question: 'What destinations do you cover in South India?',
    answer:
      'We cover all major tourist and spiritual destinations in South India, including Ooty, Munnar, Kodaikanal, Rameswaram, Madurai, Kanyakumari, Wayanad, and Coorg. We also arrange trips to Goa and other tailored locations.',
  },
  {
    question: 'Does the package include accommodation and food?',
    answer:
      'Our standard packages include premium accommodation and transportation. We can include meal plans (Breakfast/Dinner) upon request. We also provide curated lists of the best local restaurants for you to explore.',
  },
  {
    question: 'How does the driver and transportation service work?',
    answer:
      'We provide experienced, verified drivers who act as your local guide. You will have a private vehicle for the entire duration of your trip, ensuring comfort, safety, and flexibility to stop wherever you like.',
  },
  {
    question: 'How do I confirm my booking?',
    answer:
      'You can start by filling out the form above or chatting with us on WhatsApp. Once we finalize your itinerary, a small advance payment confirms your booking, with the balance payable during the trip.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 bg-[#f9fafb] border-t border-gray-100 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#e6f4ea] text-[#1b4332] text-xs font-semibold uppercase tracking-wider mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-normal">
            Quick answers to common questions about your holiday
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-xs hover:shadow-md ${
                  isOpen
                    ? 'border-[#1b4332]/40 shadow-sm ring-1 ring-[#1b4332]/10'
                    : 'border-gray-200/80 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition cursor-pointer select-none"
                >
                  <span
                    className={`font-bold text-sm sm:text-base transition-colors duration-200 ${
                      isOpen ? 'text-[#1b4332]' : 'text-[#111827]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#e6f4ea] text-[#1b4332] rotate-180'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/80 animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
