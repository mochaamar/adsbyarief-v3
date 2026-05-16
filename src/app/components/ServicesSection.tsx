'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const WA_LINK = 'https://wa.me/6285602298057';

const MENTORING_GENERAL_BENEFIT =
  'Fasilitas Umum (Periode 1 Bulan): Sesi privat via Google Meet/Zoom, praktik langsung dengan dashboard bisnis Anda sendiri, rekaman sesi pembelajaran, dan akses tanya-jawab via WhatsApp selama periode program berjalan.';

// ─── Platform Logo Image Components ─────────────────────────────────────────

function TikTokImg({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/assets/images/tiktok-1778948824530.png"
      alt="TikTok"
      width={size}
      height={size}
      className="object-contain"
    />
  );
}

function ShopeeImg({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/assets/images/Shopee.svg-1778948824502.png"
      alt="Shopee"
      width={size}
      height={size}
      className="object-contain"
    />
  );
}

function MetaImg({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/assets/images/Meta_Platforms_Inc._logo.svg-1778948824848.png"
      alt="Meta"
      width={size}
      height={size}
      className="object-contain"
    />
  );
}

function AllChannelImg({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <TikTokImg size={size} />
      <ShopeeImg size={size} />
      <MetaImg size={size} />
    </div>
  );
}

// ─── Mini Sparkline Chart ────────────────────────────────────────────────────

function MiniChart({ color = '#22C55E' }: { color?: string }) {
  const points = [10, 18, 12, 22, 16, 28, 20, 32, 26, 38];
  const w = 80, h = 28;
  const max = Math.max(...points), min = Math.min(...points);
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / (max - min)) * h;
    return `${x},${y}`;
  });
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <polyline
        points={coords.join(' ')}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />
      <polyline
        points={`0,${h} ${coords.join(' ')} ${w},${h}`}
        fill={color}
        opacity="0.12"
      />
    </svg>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────

type ModalData = {
  title: string;
  subtitle: string;
  fee?: string;
  feeLabel?: string;
  investasi?: string;
  generalBenefit?: string;
  detail?: string;
  benefit?: string;
  fasilitas?: string;
};

type CardItem = {
  title: string;
  iconType: 'tiktok' | 'shopee' | 'meta' | 'allchannel' | 'emoji';
  emoji?: string;
  price?: string;
  priceLabel?: string;
  modal: ModalData;
};

type Tab = {
  id: string;
  label: string;
  cards: CardItem[];
};

// ─── Data ────────────────────────────────────────────────────────────────────

const tabs: Tab[] = [
  {
    id: 'ads',
    label: 'Ads Management',
    cards: [
      {
        title: 'TikTok Shop Ads',
        iconType: 'tiktok',
        price: 'Rp 3.000.000',
        priceLabel: '/ Bulan',
        modal: {
          title: 'TikTok Shop Ads',
          subtitle: 'Ads Management',
          fee: 'Rp 3.000.000 / Bulan',
          feeLabel: 'Untuk 1 Toko',
          fasilitas:
            'testing dan optimasi. setup ads campaign , refrensi brief konten peak day , analisa performa yang berkaitan dengan ads, brainstrom dengan brand , forcaseting , monthly meeting dan reporting , daily consultation via grup whatsapp',
        },
      },
      {
        title: 'Shopee Ads',
        iconType: 'shopee',
        price: 'Rp 2.000.000',
        priceLabel: '/ Bulan',
        modal: {
          title: 'Shopee Ads',
          subtitle: 'Ads Management',
          fee: 'Rp 2.000.000 / Bulan',
          feeLabel: 'Untuk 1 Toko',
          fasilitas:
            'testing dan optimasi. setup ads campaign , refrensi brief konten peak day , analisa performa yang berkaitan dengan ads, brainstrom dengan brand , forcaseting , monthly meeting dan reporting , daily consultation via grup whatsapp',
        },
      },
      {
        title: 'CPAS Ads',
        iconType: 'meta',
        price: 'Rp 3.500.000',
        priceLabel: '/ Bulan',
        modal: {
          title: 'CPAS Ads',
          subtitle: 'Ads Management',
          fee: 'Rp 3.500.000 / Bulan',
          feeLabel: 'Untuk 1 Toko',
          fasilitas:
            'testing dan optimasi. setup ads campaign , refrensi brief konten peak day , analisa performa yang berkaitan dengan ads, brainstrom dengan brand , forcaseting , monthly meeting dan reporting , daily consultation via grup whatsapp',
        },
      },
      {
        title: 'Meta Ads (Lead Gen)',
        iconType: 'meta',
        price: 'Rp 3.500.000',
        priceLabel: '/ Bulan',
        modal: {
          title: 'Meta Ads (Lead Gen)',
          subtitle: 'Ads Management',
          fee: 'Rp 3.500.000 / Bulan',
          feeLabel: 'Suplai leads untuk 1 brand/produk',
          fasilitas:
            'testing dan optimasi. setup ads campaign , refrensi brief konten peak day , analisa performa yang berkaitan dengan ads, brainstrom dengan brand , forcaseting , monthly meeting dan reporting , daily consultation via grup whatsapp',
        },
      },
      {
        title: 'All Channel',
        iconType: 'allchannel',
        price: 'Rp 11.000.000',
        priceLabel: '/ Bulan',
        modal: {
          title: 'All Channel',
          subtitle: 'Ads Management',
          fee: 'Rp 11.000.000 / Bulan',
          fasilitas:
            'testing dan optimasi. setup ads campaign , refrensi brief konten peak day , analisa performa yang berkaitan dengan ads, brainstrom dengan brand , forcaseting , monthly meeting dan reporting , daily consultation via grup whatsapp',
        },
      },
    ],
  },
  {
    id: 'affiliate',
    label: 'Affiliate Management',
    cards: [
      {
        title: 'Basic Package',
        iconType: 'emoji',
        emoji: '🌱',
        modal: {
          title: 'Basic Package',
          subtitle: 'Affiliate Management',
          fee: 'Rp 2.000.000 / Bulan',
          fasilitas:
            'Rekrut 50 Affiliate aktif sebulan, lengkap dengan scope: Riset affiliate, Kontroling performa affiliate, Komunikasi harian dengan affiliate, pembuatan Presentation deck, Laporan performa bulanan, pembuatan konsep brief / SOW, dan eksekusi program khusus untuk 1 SKU unggulan.',
        },
      },
      {
        title: 'Pro Package',
        iconType: 'emoji',
        emoji: '🚀',
        modal: {
          title: 'Pro Package',
          subtitle: 'Affiliate Management',
          fee: 'Rp 3.000.000 / Bulan',
          fasilitas:
            'Rekrut 70 Affiliate aktif sebulan, lengkap dengan scope: Riset affiliate, Kontroling performa affiliate, Komunikasi harian dengan affiliate, pembuatan Presentation deck, Laporan performa bulanan, pembuatan konsep brief / SOW, dan eksekusi program untuk 2 SKU.',
        },
      },
    ],
  },
  {
    id: 'mentoring',
    label: 'Private Mentoring',
    cards: [
      {
        title: 'TikTok Shop Ads',
        iconType: 'tiktok',
        modal: {
          title: 'TikTok Shop Ads',
          subtitle: 'Private Mentoring',
          investasi: 'Rp 2.500.000',
          generalBenefit: MENTORING_GENERAL_BENEFIT,
          detail:
            'Materi meliputi pemahaman fundamental algoritma TikTok Ads, cara membaca metrik dashboard, setup struktur campaign dasar, dan fase testing awal.',
          benefit:
            'Template - template penunjang performa, checklist harian advertiser, materi ,rekaman sesi, free 1 sesi konsultasi selama 30 menit via zoom.',
        },
      },
      {
        title: 'Shopee Ads',
        iconType: 'shopee',
        modal: {
          title: 'Shopee Ads',
          subtitle: 'Private Mentoring',
          investasi: 'Rp 1.500.000',
          generalBenefit: MENTORING_GENERAL_BENEFIT,
          detail:
            'Materi meliputi pemahaman fundamental shopee, cara membaca metrik dashboard, setup struktur campaign dasar, dan fase testing awal, evaluasi dan optimasi campaign dari ads maupun organic.',
          benefit:
            'Template - template penunjang performa, checklist harian advertiser, materi ,rekaman sesi, free 1 sesi konsultasi selama 30 menit via zoom.',
        },
      },
      {
        title: 'CPAS Ads',
        iconType: 'meta',
        modal: {
          title: 'CPAS Ads',
          subtitle: 'Private Mentoring',
          investasi: 'Rp 2.500.000',
          generalBenefit: MENTORING_GENERAL_BENEFIT,
          detail:
            'Materi meliputi pemahaman fundamental CPAS, cara membaca metrik dashboard, setup struktur campaign dasar, dan fase testing awal, evaluasi dan optimasi campaign dari ads maupun organic.',
          benefit:
            'Template - template penunjang performa, checklist harian advertiser, materi ,rekaman sesi, free 1 sesi konsultasi selama 30 menit via zoom.',
        },
      },
      {
        title: 'Meta Ads',
        iconType: 'meta',
        modal: {
          title: 'Meta Ads',
          subtitle: 'Private Mentoring',
          investasi: 'Rp 1.500.000',
          generalBenefit: MENTORING_GENERAL_BENEFIT,
          detail:
            'Materi meliputi pemahaman fundamental meta ads, cara membaca metrik dashboard, setup struktur campaign dasar, dan fase testing awal, evaluasi dan optimasi campaign dari ads maupun organic.',
          benefit:
            'Template - template penunjang performa, checklist harian advertiser, materi ,rekaman sesi, free 1 sesi konsultasi selama 30 menit via zoom.',
        },
      },
    ],
  },
  {
    id: 'consulting',
    label: 'Strategic Consulting',
    cards: [
      {
        title: 'Deep Dive Audit',
        iconType: 'emoji',
        emoji: '🔍',
        modal: {
          title: 'Deep Dive Audit',
          subtitle: 'Strategic Consulting',
          fee: 'Rp 350.000 / Sesi',
          feeLabel: '90 Menit',
          fasilitas:
            'Sesi konsultasi tatap muka online (Meet/Zoom) untuk membedah total dashboard iklan yang sedang berjalan, mengidentifikasi titik kebocoran budget (bottleneck), merumuskan peta jalan (roadmap) strategi baru, feedback langsung untuk aset creative, dan sesi QnA langsung bersama saya untuk mencari solusi konkrit dari masalah brand Anda.',
        },
      },
    ],
  },
];

// ─── Card Icon Renderer ──────────────────────────────────────────────────────

function CardIcon({ card, size = 44 }: { card: CardItem; size?: number }) {
  if (card.iconType === 'emoji') {
    return <span style={{ fontSize: size * 0.75 }}>{card.emoji}</span>;
  }
  if (card.iconType === 'tiktok') return <TikTokImg size={size} />;
  if (card.iconType === 'shopee') return <ShopeeImg size={size} />;
  if (card.iconType === 'meta') return <MetaImg size={size} />;
  if (card.iconType === 'allchannel') return <AllChannelImg size={Math.round(size * 0.7)} />;
  return null;
}

// ─── WhatsApp Button ─────────────────────────────────────────────────────────

function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
      style={{ backgroundColor: '#22C55E' }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Tanya via WhatsApp
    </a>
  );
}

// ─── Modal ───────────────────────────────────────────────────────────────────

function ServiceModal({ card, onClose }: { card: CardItem; onClose: () => void }) {
  const m = card.modal;
  const isMentoring = !!m.investasi;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.78)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-white/10 overflow-y-auto shadow-2xl"
        style={{ maxHeight: '90vh', background: 'linear-gradient(160deg, #0F172A 0%, #1E293B 100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="h-1 w-full rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #22C55E, #16A34A)' }} />

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 shrink-0">
              <CardIcon card={card} size={28} />
            </div>
            <div>
              <p className="text-xs font-semibold mb-0.5" style={{ color: '#22C55E' }}>{m.subtitle}</p>
              <h3 className="text-lg font-bold text-white leading-tight">{m.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white transition-colors shrink-0"
            aria-label="Tutup"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          {/* General Benefit (Mentoring only) */}
          {m.generalBenefit && (
            <div className="rounded-xl p-4 border border-emerald-500/20" style={{ background: 'rgba(34,197,94,0.08)' }}>
              <p className="text-xs font-bold mb-1.5" style={{ color: '#22C55E' }}>📋 Fasilitas Umum</p>
              <p className="text-sm text-slate-300 leading-relaxed">{m.generalBenefit}</p>
            </div>
          )}

          {/* Price / Investasi */}
          {isMentoring ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400">Investasi:</span>
              <span className="text-2xl font-extrabold" style={{ color: '#22C55E' }}>{m.investasi}</span>
            </div>
          ) : (
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-2xl font-extrabold" style={{ color: '#22C55E' }}>{m.fee}</span>
              {m.feeLabel && (
                <span className="text-sm text-slate-400">({m.feeLabel})</span>
              )}
            </div>
          )}

          {/* Detail Materi */}
          {m.detail && (
            <div>
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Detail Materi</p>
              <p className="text-sm text-slate-400 leading-relaxed">{m.detail}</p>
            </div>
          )}

          {/* Benefit */}
          {m.benefit && (
            <div>
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Benefit</p>
              <p className="text-sm text-slate-400 leading-relaxed">{m.benefit}</p>
            </div>
          )}

          {/* Detail Fasilitas */}
          {m.fasilitas && (
            <div>
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Detail Fasilitas</p>
              <p className="text-sm text-slate-400 leading-relaxed">{m.fasilitas}</p>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="px-6 pb-6">
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}

// ─── Ads Management Card (rich dark card) ────────────────────────────────────

function AdsCard({ card, onClick }: { card: CardItem; onClick: () => void }) {
  const isAllChannel = card.iconType === 'allchannel';
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col rounded-2xl border border-white/10 overflow-hidden text-left transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 cursor-pointer w-full"
      style={{ background: 'linear-gradient(160deg, #0F172A 0%, #1E293B 100%)' }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #22C55E, #16A34A)' }} />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Icon */}
        <div className={`flex items-center ${isAllChannel ? 'justify-start' : 'justify-start'}`}>
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
            <CardIcon card={card} size={isAllChannel ? 28 : 36} />
          </div>
        </div>

        {/* Title */}
        <div>
          <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
            {card.title}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">Ads Management</p>
        </div>

        {/* Mini chart */}
        <div className="flex items-end gap-2">
          <MiniChart color="#22C55E" />
          <span className="text-xs text-emerald-400 font-semibold mb-0.5">↑ ROI</span>
        </div>

        {/* Price */}
        {card.price && (
          <div className="mt-auto">
            <p className="text-xs text-slate-500 mb-0.5">Mulai dari</p>
            <p className="text-sm font-extrabold leading-tight" style={{ color: '#22C55E' }}>
              {card.price}
              <span className="text-xs font-normal text-slate-400 ml-1">{card.priceLabel}</span>
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 pb-4 flex items-center justify-between border-t border-white/5 pt-3 gap-2">
        <span className="text-xs text-slate-400 group-hover:text-emerald-400 transition-colors">Lihat Detail →</span>
        <span
          className="text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: '#22C55E' }}
        >
          Diskusi Gratis
        </span>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 30%, rgba(34,197,94,0.07) 0%, transparent 70%)' }}
      />
    </button>
  );
}

// ─── Generic Card (Affiliate, Mentoring, Consulting) ─────────────────────────

function GenericCard({ card, onClick }: { card: CardItem; onClick: () => void }) {
  const isMentoring = card.modal.investasi !== undefined;
  const displayPrice = isMentoring ? card.modal.investasi : card.modal.fee;

  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col rounded-2xl border border-white/10 overflow-hidden text-left transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 cursor-pointer w-full"
      style={{ background: 'linear-gradient(160deg, #0F172A 0%, #1E293B 100%)' }}
    >
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #22C55E, #16A34A)' }} />
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
          <CardIcon card={card} size={card.iconType === 'allchannel' ? 28 : 36} />
        </div>
        <div>
          <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
            {card.title}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">{card.modal.subtitle}</p>
        </div>
        {displayPrice && (
          <div className="mt-auto">
            <p className="text-xs text-slate-500 mb-0.5">{isMentoring ? 'Investasi' : 'Mulai dari'}</p>
            <p className="text-sm font-extrabold" style={{ color: '#22C55E' }}>{displayPrice}</p>
          </div>
        )}
      </div>
      <div className="px-5 pb-4 flex items-center justify-between border-t border-white/5 pt-3 gap-2">
        <span className="text-xs text-slate-400 group-hover:text-emerald-400 transition-colors">Lihat Detail →</span>
        <span
          className="text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: '#22C55E' }}
        >
          Diskusi Gratis
        </span>
      </div>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 30%, rgba(34,197,94,0.07) 0%, transparent 70%)' }}
      />
    </button>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>('ads');
  const [openCard, setOpenCard] = useState<CardItem | null>(null);

  const currentTab = tabs.find((t) => t.id === activeTab)!;
  const isAdsTab = activeTab === 'ads';

  const gridClass = () => {
    const count = currentTab.cards.length;
    if (count === 1) return 'grid-cols-1 max-w-xs mx-auto';
    if (count === 2) return 'grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto';
    if (count === 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
  };

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute left-0 bottom-0 w-80 h-80 pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute right-0 top-1/4 w-64 h-64 pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">Layanan &amp; Investasi</span>
          <h2 className="text-section-heading text-foreground mt-2">
            Pilih Kolaborasi
            <br />
            <span className="text-accent">Yang Tepat untuk Anda</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto">
            Klik tab untuk melihat layanan, lalu klik kartu untuk detail lengkap &amp; harga.
          </p>
        </div>

        {/* Level 1: Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border ${
                activeTab === tab.id
                  ? 'text-white border-transparent shadow-lg shadow-emerald-500/20'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:border-emerald-500/40 hover:text-white'
              }`}
              style={activeTab === tab.id ? { backgroundColor: '#22C55E' } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Level 2: Cards */}
        <div className={`grid gap-5 ${isAdsTab ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : gridClass()}`}>
          {currentTab.cards.map((card) =>
            isAdsTab ? (
              <AdsCard key={card.title} card={card} onClick={() => setOpenCard(card)} />
            ) : (
              <GenericCard key={card.title} card={card} onClick={() => setOpenCard(card)} />
            )
          )}
        </div>
      </div>

      {/* Level 3: Modal */}
      {openCard && (
        <ServiceModal card={openCard} onClose={() => setOpenCard(null)} />
      )}
    </section>
  );
}