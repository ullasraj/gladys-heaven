import React from 'react';
import { SplashScreen } from '@/components/ui/SplashScreen';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { DestinationsGrid } from '@/components/home/DestinationsGrid';
import { HowItWorks } from '@/components/home/HowItWorks';
import { PremiumExperienceBanner } from '@/components/home/PremiumExperienceBanner';
import { QuickInquirySection } from '@/components/home/QuickInquirySection';
import { FAQSection } from '@/components/home/FAQSection';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Super Animated 10-Second Splash Screen */}
      <SplashScreen />

      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DestinationsGrid />
        <HowItWorks />
        <PremiumExperienceBanner />
        <QuickInquirySection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
