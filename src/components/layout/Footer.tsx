import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const galleryPhotos = [
  {
    title: 'Ooty',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Munnar',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Kodaikanal',
    image: 'https://images.unsplash.com/photo-1628108426027-3806e30eb120?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Tea Gardens',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Pine Forest',
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Ooty Lake',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80',
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-gray-100">
          {/* Column 1: Reach Us & Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 flex items-center justify-center p-0.5">
                <Image
                  src="/images/logo.jpg"
                  alt="Glady's Heaven Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-extrabold text-[#0f1e36]">
                  Glady&apos;s <span className="text-[#b89047]">Heaven</span>
                </span>
                <span className="text-[9px] font-semibold tracking-wider text-[#b89047] uppercase leading-none">
                  Travel Beyond Dreams
                </span>
              </div>
            </Link>

            <div className="space-y-3 text-sm pt-2">
              <a
                href="mailto:contact@gladysheaven.com"
                className="flex items-center gap-3 text-gray-600 hover:text-[#1b4332] transition group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#e6f4ea] group-hover:text-[#1b4332] transition">
                  <Mail size={15} />
                </div>
                <span>contact@gladysheaven.com</span>
              </a>

              <a
                href="tel:+919847012345"
                className="flex items-center gap-3 text-gray-600 hover:text-[#1b4332] transition group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#e6f4ea] group-hover:text-[#1b4332] transition">
                  <Phone size={15} />
                </div>
                <span>+91 98470 12345</span>
              </a>

              <div className="flex items-start gap-3 text-gray-600 group">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0 mt-0.5">
                  <MapPin size={15} />
                </div>
                <span className="leading-relaxed">
                  Level 3, Horizon Grandeur<br />
                  Marine Drive, Kochi<br />
                  Kerala 682031
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-base font-bold text-[#111827] mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#1b4332] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#1b4332] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#1b4332] transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div>
            <h4 className="text-base font-bold text-[#111827] mb-4">Destinations</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/destinations" className="text-gray-600 hover:text-[#1b4332] transition">
                  Trending Now
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-600 hover:text-[#1b4332] transition">
                  Spiritual Journeys
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-600 hover:text-[#1b4332] transition">
                  Explore All
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-base font-bold text-[#111827] mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#1b4332] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Instagram Gallery Row */}
        <div className="py-12 border-b border-gray-100">
          <div className="text-center mb-6">
            <h4 className="text-base font-bold text-[#111827]">
              Follow Our Adventures{' '}
              <a
                href="https://www.instagram.com/gladysheaven/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1b4332] hover:underline"
              >
                @GladysHeaven
              </a>
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryPhotos.map((photo, i) => (
              <a
                key={i}
                href="https://www.instagram.com/dayoffjourneys/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-32 rounded-2xl overflow-hidden group shadow-sm block"
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <svg className="w-6 h-6 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Glady&apos;s Heaven. All rights reserved.</p>

          <p>
            Designed &amp; Developed by{' '}
            <span className="text-[#2d6a4f] font-semibold">
              Ullas Raj
            </span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/919847012345"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-gray-600 transition"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.584 1.961.914 3.011.915h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.768-5.767zm0-1.672c4.103 0 7.44 3.336 7.44 7.439 0 4.103-3.337 7.44-7.44 7.44-1.282 0-2.483-.327-3.541-.937l-4.49 1.176 1.198-4.382c-.7-1.127-1.107-2.457-1.107-3.897 0-4.103 3.337-7.439 7.44-7.439z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/share/16ptNx69XY/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-gray-600 transition"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/dayoffjourneys/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white flex items-center justify-center text-gray-600 transition"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
