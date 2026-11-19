import React from 'react';
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '@/lib/utils';

export function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left items */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-emerald-400" />
            <span>Horizon Grandeur, Marine Drive, Kochi, Kerala</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-emerald-400" />
            <span>Mon - Sun: 9:00 AM - 10:00 PM</span>
          </div>
        </div>

        {/* Right items */}
        <div className="flex items-center space-x-5">
          <a
            href="tel:+919847012345"
            className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors"
          >
            <Phone size={13} className="text-emerald-400" />
            <span className="font-semibold">+91 98470 12345</span>
          </a>
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
          >
            <MessageCircle size={13} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
