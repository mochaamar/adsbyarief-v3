import React from 'react';

const WA_LINK = 'https://wa.me/6285602298057';

const services = [
  {
    id: 'ads-handling',
    title: 'Ads Handling',
    subtitle: 'Kelola iklan Anda bersama saya',
    description: 'Daily monitoring, optimasi rutin, dan monthly reporting transparan untuk semua platform.',
    packages: [
      { name: 'Shopee Ads', price: 'Rp 2 Juta', period: '/bulan' },
      { name: 'TikTok Ads', price: 'Rp 3 Juta', period: '/bulan' },
      { name: 'Meta / CPAS', price: 'Rp 3.5 Juta', period: '/bulan' },
      { name: 'Omni-channel', price: 'Rp 11 Juta', period: '/bulan' },
    ],
    benefits: ['Daily Monitoring', 'Monthly Reporting', 'Creative Brief', 'Budget Optimization'],
    highlight: false,
    badge: null,
  },
  {
    id: 'affiliate',
    title: 'Affiliate Management',
    subtitle: 'Bangun army affiliate Anda',
    description: 'Rekrut, kelola, dan optimalkan 50–70 affiliate aktif per bulan untuk brand Anda.',
    packages: [
      { name: 'Basic', price: 'Rp 2 Juta', period: '/bulan' },
      { name: 'Pro', price: 'Rp 3 Juta', period: '/bulan' },
    ],
    benefits: ['50–70 Affiliates/Bulan', 'Seleksi & Onboarding', 'Performance Tracking', 'Brief Konten'],
    highlight: false,
    badge: null,
  },
  {
    id: 'mentoring',
    title: 'Private Mentoring',
    subtitle: 'Belajar langsung dari praktisi',
    description: 'Sesi 1-on-1 dengan materi yang disesuaikan level dan kebutuhan bisnis Anda.',
    packages: [
      { name: 'Intermediate', price: 'Hubungi', period: 'Organic & Fundamental' },
      { name: 'Advance', price: 'Hubungi', period: 'Scaling & Data' },
    ],
    benefits: ['1-on-1 Session', 'Custom Curriculum', 'Real Case Studies', 'Follow-up Support'],
    highlight: true,
    badge: 'Populer',
  },
  {
    id: 'consulting',
    title: 'Strategic Consulting',
    subtitle: 'Deep dive audit bisnis Anda',
    description: 'Sesi konsultasi 90 menit untuk audit mendalam dan penyusunan strategi iklan yang tepat.',
    packages: [
      { name: 'Deep Dive Audit', price: 'Rp 350.000', period: '/ 90 Menit' },
    ],
    benefits: ['Audit Akun Iklan', 'Market Analysis', 'Roadmap Strategi', 'Action Plan'],
    highlight: false,
    badge: 'Entry Point',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute left-0 bottom-0 w-80 h-80 pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Layanan & Investasi</span>
          <h2 className="text-section-heading text-foreground mt-2">
            Pilih Kolaborasi
            <br />
            <span className="text-accent">Yang Tepat untuk Anda</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services?.map((service) => (
            <div
              key={service?.id}
              className={`relative flex flex-col rounded-2xl border p-6 card-hover transition-all ${
                service?.highlight
                  ? 'border-accent/50 bg-foreground text-primary-foreground shadow-xl shadow-accent/10'
                  : 'border-border bg-muted'
              }`}
            >
              {service?.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`text-xs font-700 px-3 py-1 rounded-full ${
                    service?.highlight
                      ? 'bg-accent text-white' :'bg-foreground text-primary-foreground'
                  }`}>
                    {service?.badge}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className={`font-800 text-lg mb-1 ${service?.highlight ? 'text-white' : 'text-foreground'}`}>
                  {service?.title}
                </h3>
                <p className={`text-xs font-600 ${service?.highlight ? 'text-accent' : 'text-accent'}`}>
                  {service?.subtitle}
                </p>
                <p className={`text-sm mt-2 leading-relaxed ${service?.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {service?.description}
                </p>
              </div>

              {/* Packages */}
              <div className={`rounded-xl p-3 mb-4 space-y-2 ${service?.highlight ? 'bg-white/10' : 'bg-background'}`}>
                {service?.packages?.map((pkg) => (
                  <div key={pkg?.name} className="flex items-center justify-between">
                    <span className={`text-xs font-600 ${service?.highlight ? 'text-white/80' : 'text-foreground'}`}>
                      {pkg?.name}
                    </span>
                    <div className="text-right">
                      <span className={`text-sm font-800 ${service?.highlight ? 'text-accent' : 'text-accent'}`}>
                        {pkg?.price}
                      </span>
                      <span className={`text-xs ml-1 ${service?.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                        {pkg?.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <ul className="space-y-2 mb-6 flex-grow">
                {service?.benefits?.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-xs">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-accent shrink-0">
                      <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={service?.highlight ? 'text-white/80' : 'text-muted-foreground'}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 rounded-xl text-sm font-700 transition-all duration-200 ${
                  service?.highlight
                    ? 'bg-accent text-white hover:bg-green-400' :'bg-foreground text-primary-foreground hover:bg-foreground/80'
                }`}
              >
                Tanya via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}