'use client';

import React, { useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Audit & Strategi Awal',
    description:
      'Melakukan bedah total terhadap data iklan lama, performa toko, kualitas aset kreatif, serta analisis kompetitor. Dari sini, saya akan menyusun custom roadmap strategi yang paling relevan dengan kondisi brand Anda saat ini termasuk media plan untuk ads.',
  },
  {
    number: '02',
    title: 'Take Over Account & Kick-Off',
    description:
      'Proses penyelarasan akses (Dashboard, BM, Pixel, dsb) secara aman dan profesional. Kita akan melakukan sesi kick-off singkat untuk menyamakan target, menentukan produk utama yang akan difokuskan, dan mencocokkan ritme kerja.',
  },
  {
    number: '03',
    title: 'Intensive Testing',
    description:
      'Memasuki fase krusial di mana iklan mulai dijalankan secara terukur. Fokus di tahap ini adalah melakukan testing secara intensif untuk memahami karakter audiens baru, melihat respons pasar terhadap penawaran, dan menemukan pola iklan yang paling efisien.',
  },
  {
    number: '04',
    title: 'Optimization & Scaling',
    description:
      'Setelah data dan pola berhasil ditemukan, budget iklan tidak langsung dinaikkan asal-asalan. Saya akan melakukan optimasi bid, menyaring audiens berkinerja tinggi, lalu melakukan scaling budget secara agresif namun tetap aman dan terukur.',
  },
  {
    number: '05',
    title: 'Evaluation & Reporting',
    description:
      'Transparansi adalah kunci kemitraan kita. Setiap pergerakan data akan dilaporkan secara berkala (harian/mingguan) dan dievaluasi total secara bulanan melalui dashboard interaktif, memastikan Anda selalu tahu ke mana setiap rupiah budget iklan berputar.',
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #22C55E 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0F172A 0%, transparent 50%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: '#22C55E' }}
          >
            How It Works
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: '#0F172A' }}
          >
            Workflow
          </h2>
          <div
            className="w-12 h-0.5 mx-auto mt-5"
            style={{ backgroundColor: '#22C55E' }}
          />
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Step Numbers Row */}
          <div className="relative flex items-start">
            {/* Connecting Line */}
            <div
              className="absolute top-8 left-[10%] right-[10%] h-px"
              style={{
                background:
                  'linear-gradient(to right, transparent, #E2E8F0 10%, #E2E8F0 90%, transparent)',
              }}
            />

            {steps?.map((step, i) => (
              <div
                key={step?.number}
                className="flex-1 flex flex-col items-center relative cursor-pointer group"
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Number Circle */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: activeStep === i ? '#22C55E' : '#FFFFFF',
                    border: `2px solid ${activeStep === i ? '#22C55E' : '#E2E8F0'}`,
                    boxShadow:
                      activeStep === i
                        ? '0 0 0 6px rgba(34,197,94,0.12)'
                        : '0 1px 4px rgba(15,23,42,0.06)',
                  }}
                >
                  <span
                    className="text-sm font-bold tracking-wide transition-colors duration-300"
                    style={{
                      color: activeStep === i ? '#FFFFFF' : '#22C55E',
                    }}
                  >
                    {step?.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="text-center px-3">
                  <h3
                    className="text-sm font-bold mb-3 leading-snug transition-colors duration-300"
                    style={{
                      color: activeStep === i ? '#22C55E' : '#0F172A',
                    }}
                  >
                    {step?.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed transition-all duration-300"
                    style={{
                      color: '#64748B',
                      maxHeight: activeStep === i ? '200px' : '80px',
                      overflow: 'hidden',
                    }}
                  >
                    {step?.description}
                  </p>
                </div>

                {/* Active indicator dot */}
                {activeStep === i && (
                  <div
                    className="absolute top-[30px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#22C55E' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent, #E2E8F0 5%, #E2E8F0 95%, transparent)',
            }}
          />

          <div className="flex flex-col gap-0">
            {steps?.map((step, i) => (
              <div key={step?.number} className="flex gap-6 pb-10 last:pb-0 relative">
                {/* Number Circle */}
                <div className="relative z-10 shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #22C55E',
                      boxShadow: '0 0 0 4px rgba(34,197,94,0.08)',
                    }}
                  >
                    <span
                      className="text-xs font-bold tracking-wide"
                      style={{ color: '#22C55E' }}
                    >
                      {step?.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 flex-1">
                  <h3
                    className="text-base font-bold mb-2 leading-snug"
                    style={{ color: '#0F172A' }}
                  >
                    {step?.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                    {step?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ backgroundColor: '#F1F5F9' }} />
          <div className="flex gap-1.5">
            {steps?.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: i === 0 ? '#22C55E' : '#CBD5E1' }}
              />
            ))}
          </div>
          <div className="flex-1 h-px" style={{ backgroundColor: '#F1F5F9' }} />
        </div>
      </div>
    </section>
  );
}