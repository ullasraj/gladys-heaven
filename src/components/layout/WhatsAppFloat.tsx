'use client';

import React from 'react';
import { createWhatsAppLink } from '@/lib/utils';

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={createWhatsAppLink('Hello Dayoff Journeys! I would like to plan a trip with you.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dayoff Journeys on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 transition-all hover:scale-110 active:scale-95 group relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.584 1.961.914 3.011.915h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.768-5.767zm0-1.672c4.103 0 7.44 3.336 7.44 7.439 0 4.103-3.337 7.44-7.44 7.44-1.282 0-2.483-.327-3.541-.937l-4.49 1.176 1.198-4.382c-.7-1.127-1.107-2.457-1.107-3.897 0-4.103 3.337-7.439 7.44-7.439z" />
        </svg>
      </a>
    </div>
  );
}
