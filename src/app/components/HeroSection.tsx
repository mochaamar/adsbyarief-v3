import React from 'react';
import AppImage from '@/components/ui/AppImage';

const WA_LINK = 'https://wa.me/6285602298057';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20 pb-12">
      {/* Dot grid background */}
      <div className="absolute inset-0 grid-dot-bg opacity-60 pointer-events-none" />
      {/* Noise overlay */}
      <div className="noise-overlay" />
      {/* Beam border bottom */}
      <div className="beam-border-h" />
      {/* Accent blob */}
      <div
        className="absolute top-20 right-0 w-72 h-72 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)', filter: 'blur(60px)' }} />
      
      <div
        className="absolute bottom-10 left-10 w-48 h-48 rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)', filter: 'blur(40px)' }} />
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* LEFT: Main content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Eyebrow label */}
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center gap-2 section-label"
                style={{ animation: 'fadeUp 0.6s ease forwards' }}>
                
                <span
                  className="inline-block w-2 h-2 rounded-full bg-accent"
                  style={{ animation: 'pulse-glow 2s infinite' }} />
                
                Performance Marketer & Growth Partner
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-hero-display text-foreground"
              style={{ animation: 'fadeUp 0.7s 0.1s ease both' }}>
              
              Akselerasi
              <br />
              <span className="text-accent">Pertumbuhan</span>
              <br />
              Brand Anda
              <br />
              <span className="relative inline-block">
                Berbasis Data.
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent rounded-full opacity-60" />
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-400"
              style={{ animation: 'fadeUp 0.7s 0.2s ease both' }}>
              
              Halo, saya{' '}
              <strong className="text-foreground font-700">Arief</strong>.
              Performance Marketer yang membantu brand memaksimalkan potensi
              pertumbuhan melalui strategi iklan yang terukur dan transparan.
            </p>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4 items-start"
              style={{ animation: 'fadeUp 0.7s 0.3s ease both' }}>
              
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="wh-btn text-base">
                
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Audit Toko Gratis via WhatsApp
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-base font-600 text-foreground hover:text-accent transition-colors py-3">
                
                Lihat Case Study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Stats panel */}
          <div
            className="lg:col-span-5 flex flex-col gap-4"
            style={{ animation: 'fadeUp 0.8s 0.35s ease both' }}>
            
            {/* Profile card */}
            <div className="relative bg-muted border border-border rounded-2xl p-6 overflow-hidden">
              <div className="beam-border-v" />
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent/30 shrink-0">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1630034b4-1772971826914.png"
                    alt="Arief, performance marketer Indonesia dengan background profesional"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover" />
                  
                </div>
                <div>
                  <p className="font-700 text-foreground text-base">Arief</p>
                  <p className="text-sm text-muted-foreground">Performance Marketer</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" style={{ animation: 'pulse-glow 2s infinite' }} />
                    <span className="text-xs text-accent font-600">Available for new clients</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                { label: 'ROI Tertinggi', value: '92.28x', sub: 'Streetwear Launch' },
                { label: 'Total Leads', value: '10.355', sub: 'Meta Lead Gen' },
                { label: 'Revenue Dikelola', value: '10M+', sub: 'Across platforms' },
                { label: 'Pengalaman', value: '3+ Tahun', sub: 'Performance Ads' }]?.
                map((stat) =>
                <div key={stat?.label} className="bg-background rounded-xl p-3 border border-border">
                    <p className="text-xl font-800 text-accent leading-none">{stat?.value}</p>
                    <p className="text-xs font-600 text-foreground mt-1">{stat?.label}</p>
                    <p className="text-xs text-muted-foreground">{stat?.sub}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Platform tags */}
            <div className="flex flex-wrap gap-2">
              {['TikTok Ads', 'Shopee Ads', 'Meta Ads', 'CPAS', 'Affiliate Mgmt']?.map((platform) =>
              <span
                key={platform}
                className="tag-pill text-accent border-accent/40 bg-accent/5">
                
                  {platform}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}