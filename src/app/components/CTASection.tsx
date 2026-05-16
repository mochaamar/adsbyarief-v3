import React from 'react';

const WA_LINK = 'https://wa.me/6285602298057';

export default function CTASection() {
  return (
    <section className="relative py-24 bg-foreground overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="beam-border-h" />
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
        {/* Slot indicator */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" style={{ animation: 'pulse-glow 2s infinite' }} />
          <span className="text-xs font-700 text-white/70 tracking-wider uppercase">HANYA 2 SLOT BRAND TERSISA</span>
        </div>

        <h2 className="text-section-heading text-white mb-5">
          Ciptakan{' '}
          <span className="text-accent">Pertumbuhan Brand</span>
          {' '}Dari Sekarang!
        </h2>

        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
          Saya memaksimalkan setiap langkah optimasi berdasarkan data nyata demi mencapai skala bisnis yang lebih tinggi secara bertahap. Segera amankan posisi Anda, hanya tersisa 2 slot brand untuk bulan ini.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="wh-btn text-base px-8 py-4"
            style={{ fontSize: '1rem' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Coba Audit Toko Gratis
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-base font-600 text-white/60 hover:text-white transition-colors py-4"
          >
            Cek Kasus Brand Kamu -&gt;
          </a>
        </div>

        {/* Social proof mini bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-white/40 font-600 uppercase tracking-wider">
          {['✓ TRANSPARAN DATA', '✓ DAILY MONITORING', '✓ KOMUNIKASI RESPONSIF']?.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}