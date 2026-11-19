import React from 'react';
import Image from 'next/image';
import { Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';
import { StarRating } from '@/components/ui/StarRating';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Traveler Reviews"
          title="Loved by Families, Couples & Pilgrims"
          subtitle="Real stories from real travelers who trusted Dayoff Journeys with their precious holidays."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={test.rating} showText={false} />
                  <Quote size={20} className="text-emerald-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;{test.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
                  <Image
                    src={test.avatar}
                    alt={test.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>{test.name}</span>
                    {test.verified && (
                      <CheckCircle2 size={12} className="text-emerald-600 fill-emerald-100" />
                    )}
                  </h4>
                  <p className="text-[10px] text-slate-500">{test.location}</p>
                  <p className="text-[9px] text-emerald-700 font-medium truncate max-w-[170px] mt-0.5">
                    {test.packageName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
