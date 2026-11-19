import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  count?: number;
  showText?: boolean;
  size?: number;
}

export function StarRating({ rating, count, showText = true, size = 16 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center text-amber-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={`${
              star <= Math.round(rating)
                ? 'fill-amber-400 text-amber-400'
                : 'text-slate-300'
            }`}
          />
        ))}
      </div>
      {showText && (
        <span className="text-xs font-semibold text-slate-700">
          {rating.toFixed(1)}
          {count && <span className="text-slate-500 font-normal"> ({count})</span>}
        </span>
      )}
    </div>
  );
}
