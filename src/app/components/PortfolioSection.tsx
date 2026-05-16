'use client';
import React, { useState, useEffect } from 'react';

type Platform = 'All Platforms' | 'TikTok Ads' | 'Shopee Ads' | 'CPAS Shopee' | 'CPAS Lazada' | 'Meta Ads';
type Category = 'All' | 'Fashion' | 'Skin Care' | 'Body Care' | 'Personal Beauty' | 'Food and Beverage' | 'Kids' | 'Herbal' | 'Service';

interface CaseStudy {
  id: string;
  title: string;
  platform: Platform;
  category: Category;
  badge?: string;
  metricLabel: string;
  metricValue: string;
  metricSub?: string;
  before?: string;
  after?: string;
  roi?: string;
  roiLabel?: string;
  masalahAwal: string;
  strategiSingkat: string;
  achievements: { label: string; value: string }[];
  beforeAfterRows: { label: string; before: string; after: string }[];
}

const caseStudies: CaseStudy[] = [
  // TIKTOK ADS
  {
    id: 'tt-1',
    title: 'Fashion Muslim Abaya',
    platform: 'TikTok Ads',
    category: 'Fashion',
    metricLabel: 'Revenue',
    metricValue: '2.7 M',
    metricSub: 'ROI 8.69x',
    before: '300 Juta',
    after: '2.7 Miliar',
    roi: '8.69x',
    masalahAwal: 'Brand abaya menghadapi stagnasi penjualan dengan iklan yang tidak terstruktur dan creative fatigue tinggi. Audiens tidak tersegmentasi dengan baik sehingga biaya per konversi membengkak.',
    strategiSingkat: 'Restrukturisasi campaign dengan segmentasi audiens berbasis interest fashion muslim dan lookalike purchaser. Rotasi creative mingguan dengan 3 angle berbeda: lifestyle, testimoni, dan product showcase.',
    achievements: [
      { label: 'Revenue', value: '2.7 Miliar' },
      { label: 'ROI', value: '8.69x' },
      { label: 'Growth', value: '800%+' },
    ],
    beforeAfterRows: [
      { label: 'Revenue', before: '300 Juta', after: '2.7 Miliar' },
      { label: 'ROI', before: 'Tidak Terukur', after: '8.69x' },
    ],
  },
  {
    id: 'tt-2',
    title: 'Fashion Streetwear',
    platform: 'TikTok Ads',
    category: 'Fashion',
    badge: 'New Launch',
    metricLabel: 'Revenue',
    metricValue: '1.06 M',
    metricSub: 'ROI 92.28x',
    before: '0 (New Ads)',
    after: '1.06 Miliar',
    roi: '92.28x',
    masalahAwal: 'Brand streetwear baru tanpa riwayat iklan sama sekali. Tidak ada data audiens, tidak ada pixel yang matang, dan kompetisi kategori sangat ketat di TikTok.',
    strategiSingkat: 'Membangun struktur campaign dari nol dengan fase awareness → consideration → conversion. Memanfaatkan TikTok Spark Ads dari konten organik yang viral untuk menekan biaya akuisisi.',
    achievements: [
      { label: 'Revenue', value: '1.06 Miliar' },
      { label: 'ROI', value: '92.28x' },
      { label: 'Starting Point', value: 'Rp 0' },
    ],
    beforeAfterRows: [
      { label: 'Revenue', before: 'Rp 0 (New)', after: '1.06 Miliar' },
      { label: 'ROI', before: '-', after: '92.28x' },
    ],
  },
  {
    id: 'tt-3',
    title: 'Body Care',
    platform: 'TikTok Ads',
    category: 'Body Care',
    badge: 'Best Growth',
    metricLabel: 'Revenue',
    metricValue: '5.8 M',
    metricSub: 'ROI 9.66x',
    before: '272 Juta',
    after: '5.8 Miliar',
    roi: '9.66x',
    masalahAwal: 'Brand body care dengan spend yang sudah cukup besar namun ROI stagnan. Creative fatigue terjadi cepat dan tidak ada sistem pengujian yang terstruktur.',
    strategiSingkat: 'Framework creative testing 3 angle/minggu, audience segmentation berbasis lookalike purchaser, dan alokasi budget dinamis ke ad set ROAS tertinggi setiap 3 hari.',
    achievements: [
      { label: 'Revenue', value: '5.8 Miliar' },
      { label: 'ROI', value: '9.66x' },
      { label: 'Revenue Growth', value: '2,032%' },
    ],
    beforeAfterRows: [
      { label: 'Revenue', before: '272 Juta', after: '5.8 Miliar' },
      { label: 'ROI', before: 'Rendah', after: '9.66x' },
    ],
  },
  {
    id: 'tt-4',
    title: 'Slime Anak',
    platform: 'TikTok Ads',
    category: 'Kids',
    metricLabel: 'Revenue',
    metricValue: '871 Juta',
    metricSub: 'ROI 23.81x',
    before: '477 Juta',
    after: '871 Juta',
    roi: '23.81x',
    masalahAwal: 'Produk slime anak dengan musim penjualan yang fluktuatif. Iklan berjalan tanpa optimasi berkelanjutan sehingga ROI tidak konsisten.',
    strategiSingkat: 'Optimasi campaign berbasis data musiman dengan creative yang menonjolkan fun factor dan unboxing experience. Retargeting agresif ke cart abandoner.',
    achievements: [
      { label: 'Revenue', value: '871 Juta' },
      { label: 'ROI', value: '23.81x' },
      { label: 'Revenue Growth', value: '83%' },
    ],
    beforeAfterRows: [
      { label: 'Revenue', before: '477 Juta', after: '871 Juta' },
      { label: 'ROI', before: 'Tidak Stabil', after: '23.81x' },
    ],
  },
  {
    id: 'tt-5',
    title: 'Eyelash',
    platform: 'TikTok Ads',
    category: 'Personal Beauty',
    badge: 'New Store',
    metricLabel: 'Revenue',
    metricValue: '42.5 Juta',
    metricSub: 'ROI 7.06x',
    before: '0 (New Store)',
    after: '42.5 Juta',
    roi: '7.06x',
    masalahAwal: 'Toko baru tanpa riwayat penjualan dan reputasi. Tidak ada social proof dan kompetisi produk kecantikan di TikTok sangat tinggi.',
    strategiSingkat: 'Membangun kepercayaan dengan UGC content dan testimoni awal. Campaign dijalankan dengan budget kecil namun highly targeted ke beauty enthusiast.',
    achievements: [
      { label: 'Revenue', value: '42.5 Juta' },
      { label: 'ROI', value: '7.06x' },
      { label: 'Starting Point', value: 'Toko Baru' },
    ],
    beforeAfterRows: [
      { label: 'Revenue', before: 'Rp 0 (New)', after: '42.5 Juta' },
      { label: 'ROI', before: '-', after: '7.06x' },
    ],
  },
  {
    id: 'tt-6',
    title: 'Food and Beverage',
    platform: 'TikTok Ads',
    category: 'Food and Beverage',
    badge: 'New Ads',
    metricLabel: 'Revenue',
    metricValue: '369 Juta',
    metricSub: 'ROI 13.01x',
    before: '0 (New Ads)',
    after: '369 Juta',
    roi: '13.01x',
    masalahAwal: 'Brand FnB yang belum pernah beriklan secara digital. Produk belum dikenal dan tidak ada data audiens yang bisa dimanfaatkan.',
    strategiSingkat: 'Kampanye awareness-first dengan konten video yang menonjolkan taste appeal dan lifestyle. Diikuti retargeting ke viewer 75% untuk konversi.',
    achievements: [
      { label: 'Revenue', value: '369 Juta' },
      { label: 'ROI', value: '13.01x' },
      { label: 'Starting Point', value: 'New Ads' },
    ],
    beforeAfterRows: [
      { label: 'Revenue', before: 'Rp 0 (New)', after: '369 Juta' },
      { label: 'ROI', before: '-', after: '13.01x' },
    ],
  },
  {
    id: 'tt-7',
    title: 'Fashion Anak',
    platform: 'TikTok Ads',
    category: 'Fashion',
    metricLabel: 'Revenue',
    metricValue: '247 Juta',
    metricSub: 'ROI 13.14x',
    before: '48 Juta',
    after: '247 Juta',
    roi: '13.14x',
    masalahAwal: 'Brand fashion anak dengan penjualan stagnan. Iklan berjalan namun tidak ada strategi scaling yang jelas dan creative tidak diperbarui secara berkala.',
    strategiSingkat: 'Refresh creative dengan angle parenting dan lifestyle keluarga. Scaling budget bertahap setelah menemukan winning ad set dengan ROAS konsisten di atas 10x.',
    achievements: [
      { label: 'Revenue', value: '247 Juta' },
      { label: 'ROI', value: '13.14x' },
      { label: 'Revenue Growth', value: '415%' },
    ],
    beforeAfterRows: [
      { label: 'Revenue', before: '48 Juta', after: '247 Juta' },
      { label: 'ROI', before: 'Rendah', after: '13.14x' },
    ],
  },
  {
    id: 'tt-8',
    title: 'Beauty (Softlens)',
    platform: 'TikTok Ads',
    category: 'Personal Beauty',
    metricLabel: 'Revenue',
    metricValue: '1.62 M',
    metricSub: 'ROI 10.22x',
    before: '603 Juta',
    after: '1.62 Miliar',
    roi: '10.22x',
    masalahAwal: 'Brand softlens dengan spend besar namun ROI tidak optimal. Audiens terlalu luas dan tidak ada diferensiasi creative antara cold dan warm audience.',
    strategiSingkat: 'Segmentasi funnel ketat: cold audience dengan awareness creative, warm audience dengan product demo, dan hot audience dengan penawaran eksklusif. Optimasi bid strategy per segmen.',
    achievements: [
      { label: 'Revenue', value: '1.62 Miliar' },
      { label: 'ROI', value: '10.22x' },
      { label: 'Revenue Growth', value: '169%' },
    ],
    beforeAfterRows: [
      { label: 'Revenue', before: '603 Juta', after: '1.62 Miliar' },
      { label: 'ROI', before: 'Sub-optimal', after: '10.22x' },
    ],
  },
  // SHOPEE ADS
  {
    id: 'sh-1',
    title: 'Slime Anak',
    platform: 'Shopee Ads',
    category: 'Kids',
    metricLabel: 'ROAS',
    metricValue: '20.46',
    metricSub: 'Revenue 838 Juta',
    before: 'ROAS 11.83',
    after: 'ROAS 20.46',
    roi: '20.46',
    roiLabel: 'ROAS',
    masalahAwal: 'ROAS Shopee Ads stagnan di angka 11.83 meskipun budget sudah cukup besar. Tidak ada optimasi keyword dan bidding strategy yang terstruktur.',
    strategiSingkat: 'Audit menyeluruh keyword performance, eliminasi keyword tidak relevan, dan optimasi bid berbasis conversion rate. Penambahan produk bundle untuk meningkatkan AOV.',
    achievements: [
      { label: 'ROAS', value: '20.46' },
      { label: 'Revenue', value: '838 Juta' },
      { label: 'ROAS Growth', value: '+73%' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: '11.83', after: '20.46' },
      { label: 'Revenue', before: 'Lebih Rendah', after: '838 Juta' },
    ],
  },
  {
    id: 'sh-2',
    title: 'Skincare',
    platform: 'Shopee Ads',
    category: 'Skin Care',
    badge: 'Best Growth',
    metricLabel: 'ROAS',
    metricValue: '66.64',
    metricSub: 'Revenue 900 Juta',
    before: 'ROAS 26.98',
    after: 'ROAS 66.64',
    roi: '66.64',
    roiLabel: 'ROAS',
    masalahAwal: 'Brand skincare dengan ROAS yang sudah baik namun belum dioptimalkan secara maksimal. Potensi scaling belum dieksplor karena takut ROAS turun.',
    strategiSingkat: 'Analisis mendalam keyword dengan volume tinggi dan konversi tinggi. Strategi scaling bertahap dengan monitoring ketat setiap 48 jam untuk memastikan ROAS tetap optimal.',
    achievements: [
      { label: 'ROAS', value: '66.64' },
      { label: 'Revenue', value: '900 Juta' },
      { label: 'ROAS Growth', value: '+147%' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: '26.98', after: '66.64' },
      { label: 'Revenue', before: 'Lebih Rendah', after: '900 Juta' },
    ],
  },
  {
    id: 'sh-3',
    title: 'Fashion Pria',
    platform: 'Shopee Ads',
    category: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '12.18',
    metricSub: 'Revenue 301 Juta',
    roi: '12.18',
    roiLabel: 'ROAS',
    masalahAwal: 'Brand fashion pria dengan performa Shopee Ads yang belum teroptimasi. Keyword bidding tidak efisien dan banyak spend terbuang ke keyword tidak relevan.',
    strategiSingkat: 'Restrukturisasi campaign dengan keyword research mendalam, negative keyword list, dan bid optimization berbasis data historis.',
    achievements: [
      { label: 'ROAS', value: '12.18' },
      { label: 'Revenue', value: '301 Juta' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: 'Sub-optimal', after: '12.18' },
      { label: 'Revenue', before: '-', after: '301 Juta' },
    ],
  },
  {
    id: 'sh-4',
    title: 'Fashion Pria Dewasa',
    platform: 'Shopee Ads',
    category: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '10.34',
    metricSub: 'Revenue 626 Juta',
    roi: '10.34',
    roiLabel: 'ROAS',
    masalahAwal: 'Segmen fashion pria dewasa dengan kompetisi tinggi. Iklan berjalan namun tidak ada diferensiasi strategi antara produk premium dan entry-level.',
    strategiSingkat: 'Segmentasi campaign berdasarkan price tier produk. Produk premium dengan keyword branded, produk entry-level dengan keyword generic volume tinggi.',
    achievements: [
      { label: 'ROAS', value: '10.34' },
      { label: 'Revenue', value: '626 Juta' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: 'Tidak Optimal', after: '10.34' },
      { label: 'Revenue', before: '-', after: '626 Juta' },
    ],
  },
  {
    id: 'sh-5',
    title: 'Hair Care',
    platform: 'Shopee Ads',
    category: 'Body Care',
    metricLabel: 'ROAS',
    metricValue: '13.01',
    metricSub: 'Revenue 246 Juta',
    roi: '13.01',
    roiLabel: 'ROAS',
    masalahAwal: 'Brand hair care dengan performa iklan yang fluktuatif. Tidak ada strategi keyword yang konsisten dan bid sering terlalu tinggi untuk keyword kompetitif.',
    strategiSingkat: 'Audit keyword dan restrukturisasi bid strategy. Fokus pada long-tail keyword dengan intent tinggi dan kompetisi lebih rendah untuk efisiensi budget.',
    achievements: [
      { label: 'ROAS', value: '13.01' },
      { label: 'Revenue', value: '246 Juta' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: 'Fluktuatif', after: '13.01' },
      { label: 'Revenue', before: '-', after: '246 Juta' },
    ],
  },
  // CPAS SHOPEE
  {
    id: 'cs-1',
    title: 'Fashion Pria',
    platform: 'CPAS Shopee',
    category: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '14.31',
    metricSub: 'Revenue 742 Juta',
    roi: '14.31',
    roiLabel: 'ROAS',
    masalahAwal: 'Brand fashion pria belum memanfaatkan CPAS Shopee secara optimal. Iklan tidak terhubung langsung ke toko Shopee sehingga tracking konversi tidak akurat.',
    strategiSingkat: 'Setup CPAS Shopee dengan integrasi penuh ke katalog produk. Optimasi audience targeting berbasis data pembeli Shopee dan lookalike dari customer existing.',
    achievements: [
      { label: 'ROAS', value: '14.31' },
      { label: 'Revenue', value: '742 Juta' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: 'Belum Optimal', after: '14.31' },
      { label: 'Revenue', before: '-', after: '742 Juta' },
    ],
  },
  {
    id: 'cs-2',
    title: 'Hair Care (Shopee)',
    platform: 'CPAS Shopee',
    category: 'Body Care',
    metricLabel: 'ROAS',
    metricValue: '7.20',
    metricSub: 'Revenue 46 Juta',
    roi: '7.20',
    roiLabel: 'ROAS',
    masalahAwal: 'Brand hair care baru di CPAS Shopee dengan data yang terbatas. Perlu membangun baseline performa sebelum bisa melakukan scaling.',
    strategiSingkat: 'Fase learning intensif dengan budget terkontrol untuk mengumpulkan data konversi. Optimasi bertahap setelah data cukup untuk pengambilan keputusan.',
    achievements: [
      { label: 'ROAS', value: '7.20' },
      { label: 'Revenue', value: '46 Juta' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: 'Fase Awal', after: '7.20' },
      { label: 'Revenue', before: '-', after: '46 Juta' },
    ],
  },
  {
    id: 'cs-3',
    title: 'Sportswear Wanita',
    platform: 'CPAS Shopee',
    category: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '17.23',
    metricSub: 'Revenue 140 Juta',
    roi: '17.23',
    roiLabel: 'ROAS',
    masalahAwal: 'Brand sportswear wanita dengan potensi besar namun belum dieksplor melalui CPAS. Audiens yang tepat belum teridentifikasi dengan baik.',
    strategiSingkat: 'Targeting berbasis interest olahraga dan fitness dikombinasikan dengan data pembeli Shopee kategori pakaian olahraga. Creative menonjolkan aktivitas dan lifestyle aktif.',
    achievements: [
      { label: 'ROAS', value: '17.23' },
      { label: 'Revenue', value: '140 Juta' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: 'Belum Dioptimasi', after: '17.23' },
      { label: 'Revenue', before: '-', after: '140 Juta' },
    ],
  },
  {
    id: 'cs-4',
    title: 'Fashion Wanita',
    platform: 'CPAS Shopee',
    category: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '16.48',
    metricSub: 'Revenue 59.9 Juta',
    roi: '16.48',
    roiLabel: 'ROAS',
    masalahAwal: 'Brand fashion wanita dengan kompetisi tinggi di Shopee. Perlu strategi CPAS yang tepat untuk bersaing dengan brand besar yang memiliki budget lebih besar.',
    strategiSingkat: 'Fokus pada niche audience yang spesifik daripada bersaing di keyword generic. Memanfaatkan data behavioral Shopee untuk menemukan pembeli dengan intent tinggi.',
    achievements: [
      { label: 'ROAS', value: '16.48' },
      { label: 'Revenue', value: '59.9 Juta' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: 'Tidak Efisien', after: '16.48' },
      { label: 'Revenue', before: '-', after: '59.9 Juta' },
    ],
  },
  // CPAS LAZADA
  {
    id: 'cl-1',
    title: 'Fashion Pria',
    platform: 'CPAS Lazada',
    category: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '14.52',
    metricSub: 'Revenue 103 Juta',
    roi: '14.52',
    roiLabel: 'ROAS',
    masalahAwal: 'Brand fashion pria yang ingin mengekspansi ke Lazada melalui CPAS. Tidak ada pengalaman sebelumnya dengan platform Lazada dan ekosistem iklannya.',
    strategiSingkat: 'Setup CPAS Lazada dari nol dengan integrasi katalog produk dan pixel tracking. Strategi audience mirroring dari data Shopee yang sudah matang.',
    achievements: [
      { label: 'ROAS', value: '14.52' },
      { label: 'Revenue', value: '103 Juta' },
    ],
    beforeAfterRows: [
      { label: 'ROAS', before: 'New Platform', after: '14.52' },
      { label: 'Revenue', before: '-', after: '103 Juta' },
    ],
  },
  // META ADS
  {
    id: 'mt-1',
    title: 'Minuman Herbal (CTWA)',
    platform: 'Meta Ads',
    category: 'Herbal',
    metricLabel: 'Leads',
    metricValue: '10.355',
    metricSub: 'CPL Rp 12.781',
    roi: '100 Juta/CS',
    roiLabel: 'Revenue/CS',
    masalahAwal: 'Brand minuman herbal dengan model bisnis B2C via WhatsApp. Tidak ada sistem lead generation yang terstruktur dan CPL sangat tinggi dari iklan sebelumnya.',
    strategiSingkat: 'Implementasi Click-to-WhatsApp (CTWA) campaign dengan creative yang menonjolkan manfaat kesehatan dan social proof. Optimasi audience berbasis data customer existing.',
    achievements: [
      { label: 'Total Leads', value: '10.355' },
      { label: 'CPL', value: 'Rp 12.781' },
      { label: 'Revenue/CS', value: '100 Juta' },
    ],
    beforeAfterRows: [
      { label: 'Leads', before: 'Tidak Terstruktur', after: '10.355 Leads' },
      { label: 'CPL', before: 'Sangat Tinggi', after: 'Rp 12.781' },
      { label: 'Revenue/CS', before: '-', after: '100 Juta' },
    ],
  },
  {
    id: 'mt-2',
    title: 'Susu Herbal (Landing Page)',
    platform: 'Meta Ads',
    category: 'Herbal',
    metricLabel: 'Closing Rate',
    metricValue: '60%',
    metricSub: 'CPL Rp 60k',
    roi: '360 Juta/bln',
    roiLabel: 'Monthly Spend',
    masalahAwal: 'Brand susu herbal dengan landing page yang tidak dioptimasi. Conversion rate rendah dan CPL tinggi karena traffic tidak berkualitas.',
    strategiSingkat: 'Optimasi landing page dengan copywriting berbasis pain point dan social proof kuat. A/B testing headline dan CTA untuk meningkatkan conversion rate secara signifikan.',
    achievements: [
      { label: 'CPL', value: 'Rp 60.000' },
      { label: 'Closing Rate', value: '60%' },
      { label: 'Monthly Spend', value: '360 Juta' },
    ],
    beforeAfterRows: [
      { label: 'CPL', before: 'Sangat Tinggi', after: 'Rp 60.000' },
      { label: 'Closing Rate', before: 'Rendah', after: '60%' },
      { label: 'Monthly Spend', before: '-', after: '360 Juta' },
    ],
  },
  {
    id: 'mt-3',
    title: 'Konveksi (CTWA)',
    platform: 'Meta Ads',
    category: 'Service',
    metricLabel: 'Revenue',
    metricValue: '350 Juta',
    metricSub: 'Spend 2.5 Juta',
    before: '2.5 Juta (Spend)',
    after: '350 Juta (Revenue)',
    roi: '140x',
    masalahAwal: 'Bisnis konveksi yang mengandalkan referral dan belum pernah beriklan digital. Tidak ada sistem akuisisi pelanggan baru yang skalabel.',
    strategiSingkat: 'CTWA campaign dengan targeting B2B: pemilik brand, reseller, dan event organizer. Creative menonjolkan kualitas produksi dan kapasitas produksi besar.',
    achievements: [
      { label: 'Spend', value: '2.5 Juta' },
      { label: 'Revenue', value: '350 Juta' },
      { label: 'CPL', value: 'Rp 9.343' },
    ],
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: '2.5 Juta' },
      { label: 'Revenue', before: 'Dari Referral', after: '350 Juta' },
      { label: 'CPL', before: 'Tidak Ada', after: 'Rp 9.343' },
    ],
  },
];

const PLATFORMS: Platform[] = ['All Platforms', 'TikTok Ads', 'Shopee Ads', 'CPAS Shopee', 'CPAS Lazada', 'Meta Ads'];
const CATEGORIES: Category[] = ['All', 'Fashion', 'Skin Care', 'Body Care', 'Personal Beauty', 'Food and Beverage', 'Kids', 'Herbal', 'Service'];

const platformColors: Record<string, string> = {
  'TikTok Ads': 'bg-black text-white',
  'Shopee Ads': 'bg-orange-500 text-white',
  'CPAS Shopee': 'bg-orange-600 text-white',
  'CPAS Lazada': 'bg-blue-600 text-white',
  'Meta Ads': 'bg-blue-500 text-white',
};

function MetricCard({ study, onClick }: { study: CaseStudy; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left w-full aspect-square flex flex-col justify-between p-5 relative overflow-hidden"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${platformColors[study.platform] || 'bg-gray-200 text-gray-700'}`}>
          {study.platform}
        </span>
        {study.badge && (
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
            {study.badge}
          </span>
        )}
      </div>

      {/* Center metric */}
      <div className="flex-1 flex flex-col justify-center py-3">
        <p className="text-xs text-gray-400 font-medium mb-1">{study.metricLabel}</p>
        <p className="text-2xl sm:text-3xl font-black text-[#22C55E] leading-tight tracking-tight">
          {study.metricValue}
        </p>
        {study.metricSub && (
          <p className="text-xs font-semibold text-[#22C55E] mt-1 opacity-80">{study.metricSub}</p>
        )}
      </div>

      {/* Bottom */}
      <div>
        <p className="text-sm font-bold text-[#0F172A] leading-snug">{study.title}</p>
        <p className="text-xs text-gray-400 mt-1">{study.category}</p>
      </div>

      {/* Hover overlay hint */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-0 group-hover:opacity-[0.03] transition-opacity rounded-2xl pointer-events-none" />
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-7 h-7 rounded-full bg-[#22C55E] flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function Modal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-100 px-6 py-5 flex items-start justify-between z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${platformColors[study.platform] || 'bg-gray-200 text-gray-700'}`}>
                {study.platform}
              </span>
              <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-500">
                {study.category}
              </span>
            </div>
            <h3 className="text-xl font-black text-[#0F172A]">{study.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="ml-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Before vs After Table */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Perbandingan Before vs After</h4>
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-500 text-xs">Metrik</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-500 text-xs">Before</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#22C55E] text-xs">After ✓</th>
                  </tr>
                </thead>
                <tbody>
                  {study.beforeAfterRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-4 py-3 font-medium text-[#0F172A]">{row.label}</td>
                      <td className="px-4 py-3 text-gray-400">{row.before}</td>
                      <td className="px-4 py-3 font-bold text-[#22C55E]">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Masalah Awal */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Masalah Awal</h4>
            <p className="text-sm text-gray-600 leading-relaxed bg-red-50 rounded-xl px-4 py-3 border border-red-100">
              {study.masalahAwal}
            </p>
          </div>

          {/* Strategi Singkat */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Strategi Singkat</h4>
            <p className="text-sm text-gray-600 leading-relaxed bg-blue-50 rounded-xl px-4 py-3 border border-blue-100">
              {study.strategiSingkat}
            </p>
          </div>

          {/* Achievement Details */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Achievement Details</h4>
            <div className="grid grid-cols-3 gap-3">
              {study.achievements.map((a, i) => (
                <div key={i} className="bg-emerald-50 rounded-2xl p-4 text-center border border-emerald-100">
                  <p className="text-lg font-black text-[#22C55E] leading-tight">{a.value}</p>
                  <p className="text-[10px] text-gray-500 font-medium mt-1">{a.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activePlatform, setActivePlatform] = useState<Platform>('All Platforms');
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filtered = caseStudies.filter(s => {
    const platformMatch = activePlatform === 'All Platforms' || s.platform === activePlatform;
    const categoryMatch = activeCategory === 'All' || s.category === activeCategory;
    return platformMatch && categoryMatch;
  });

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-[#22C55E] uppercase mb-3">
            Portofolio & Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4">
            Hasil Nyata, Data Transparan
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            21 case study lintas platform dengan angka yang bisa diverifikasi. Setiap keputusan berbasis data, setiap hasil bisa dipertanggungjawabkan.
          </p>
        </div>

        {/* Level 1: Platform Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {PLATFORMS.map(p => (
            <button
              key={p}
              onClick={() => { setActivePlatform(p); setActiveCategory('All'); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activePlatform === p
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-[#0F172A]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Level 2: Category Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === c
                  ? 'bg-[#22C55E] text-white shadow-sm'
                  : 'bg-white text-gray-400 border border-gray-200 hover:border-[#22C55E] hover:text-[#22C55E]'
              }`}
            >
              {c === 'All' ? 'All Categories' : c}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-xs text-gray-400 mb-6 font-medium">
          Menampilkan <span className="text-[#22C55E] font-bold">{filtered.length}</span> case study
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map(study => (
              <MetricCard key={study.id} study={study} onClick={() => setSelectedStudy(study)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm">Tidak ada case study untuk filter ini.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedStudy && (
        <Modal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
      )}
    </section>
  );
}