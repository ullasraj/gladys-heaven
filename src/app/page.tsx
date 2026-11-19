import React from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedPackages } from '@/components/home/FeaturedPackages';
import { DestinationsGrid } from '@/components/home/DestinationsGrid';
import { SacredPathsHighlight } from '@/components/home/SacredPathsHighlight';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FleetShowcase } from '@/components/home/FleetShowcase';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Testimonials } from '@/components/home/Testimonials';
import { QuickInquirySection } from '@/components/home/QuickInquirySection';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedPackages />
        <DestinationsGrid />
        <SacredPathsHighlight />
        <WhyChooseUs />
        <FleetShowcase />
        <HowItWorks />
        <Testimonials />
        <QuickInquirySection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
