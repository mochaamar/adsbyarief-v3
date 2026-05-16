import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import PortfolioSection from './components/PortfolioSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero — Massive editorial typography + WhatsApp CTA */}
        <HeroSection />

        {/* 2. Trust Bar — Animated metric counters */}
        <TrustBar />

        {/* 3. Portfolio & Case Studies — 21 case studies with dual filters */}
        <PortfolioSection />

        {/* 4. Process — 5-step horizontal timeline */}
        <ProcessSection />

        {/* 5. Services — 4 service tier cards */}
        <ServicesSection />

        {/* 6. Testimonials — 5 client quotes */}
        <TestimonialsSection />

        {/* 7. FAQ — Accordion */}
        <FAQSection />

        {/* 8. Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}