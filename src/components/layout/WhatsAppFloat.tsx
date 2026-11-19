'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppLink } from '@/lib/utils';

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-800 text-xs px-3.5 py-2 rounded-xl shadow-xl border border-slate-200 flex items-center gap-2 max-w-xs animate-bounce">
          <span>Need quick tour pricing or advice? <strong>Chat with us!</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={createWhatsAppLink('Hello Dayoff Journeys! I would like to plan a trip with you.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dayoff Journeys on WhatsApp"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/35 transition-all hover:scale-110 active:scale-95 group relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full"></span>
        <MessageCircle size={30} className="fill-white/20" />
      </a>
    </div>
  );
}
