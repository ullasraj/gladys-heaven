'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section className="py-20 bg-[#f9fafb] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-normal">
            Quick answers to common questions
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition hover:bg-gray-50/70"
                >
                  <span className="font-bold text-sm sm:text-base text-[#111827]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#1b4332]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-fade-in">
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
