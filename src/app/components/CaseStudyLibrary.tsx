'use client';
import React, { useState, useEffect } from 'react';

type Platform = 'All Platforms' | 'TikTok Ads' | 'Shopee Ads' | 'CPAS Shopee' | 'CPAS Lazada' | 'Meta Ads';
type Tag = 'All' | 'Fashion' | 'Skin Care' | 'Personal Care' | 'Kids' | 'Herbal' | 'Service';

interface CaseStudy {
  id: string;
  title: string;
  platform: Platform;
  tag: Tag;
  badge?: string;
  // Key metrics shown on card
  metricLabel: string;
  metricValue: string;
  subMetricLabel?: string;
  subMetricValue?: string;
  // Before/After
  before?: string;
  after?: string;
  beforeLabel?: string;
  afterLabel?: string;
  // Modal details
  masalahAwal: string;
  strategiSingkat: string;
  achievementDetails: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  comparisonRows: {
    metric: string;
    before: string;
    after: string;
  }[];
}

const ALL_CASE_STUDIES: CaseStudy[] = [
  // ── TIKTOK ADS ──────────────────────────────────────────────
  {
    id: 'tt-1',
    title: 'Fashion Muslim Abaya',
    platform: 'TikTok Ads',
    tag: 'Fashion',
    metricLabel: 'ROI',
    metricValue: '8.69x',
    subMetricLabel: 'Revenue',
    subMetricValue: '2.7 M',
    before: '300 Juta',
    after: '2.7 Miliar',
    beforeLabel: 'Revenue Sebelum',
    afterLabel: 'Revenue Sesudah',
    masalahAwal: 'Brand fashion muslim abaya menghadapi stagnasi revenue di angka 300 juta. CTR iklan rendah karena creative tidak menyentuh pain point audiens muslimah. Spend besar namun konversi tidak sebanding dengan investasi iklan.',
    strategiSingkat: 'Riset mendalam terhadap audiens muslimah usia 22–38 tahun. Membangun creative brief berbasis storytelling autentik dengan UGC creator lokal. Optimasi bidding menggunakan value-based optimization untuk memaksimalkan average order value.',
    comparisonRows: [
      { metric: 'Revenue', before: 'Rp 300 Juta', after: 'Rp 2.7 Miliar' },
      { metric: 'ROI', before: '-', after: '8.69x' },
    ],
    achievementDetails: [
      { label: 'Revenue Akhir', value: 'Rp 2.7 Miliar', highlight: true },
      { label: 'ROI', value: '8.69x', highlight: true },
      { label: 'Platform', value: 'TikTok Ads' },
      { label: 'Kategori', value: 'Fashion Muslim Abaya' },
    ],
  },
  {
    id: 'tt-2',
    title: 'Fashion Streetwear',
    platform: 'TikTok Ads',
    tag: 'Fashion',
    badge: '⭐ Best ROI',
    metricLabel: 'ROI',
    metricValue: '92.28x',
    subMetricLabel: 'Revenue',
    subMetricValue: '1.06 M',
    before: 'New Ads (0)',
    after: '1.06 Miliar',
    beforeLabel: 'Revenue Sebelum',
    afterLabel: 'Revenue Sesudah',
    masalahAwal: 'Brand streetwear baru tanpa awareness sama sekali. Tidak ada data historis, tidak ada audiens yang sudah terbentuk, dan kompetisi di segmen streetwear lokal sangat ketat dengan pemain yang sudah established.',
    strategiSingkat: 'Strategi launch berbasis hype-building dengan pre-launch teaser campaign selama 2 minggu. Kolaborasi dengan micro-influencer streetwear lokal untuk social proof awal. Funnel didesain dari awareness hingga purchase dalam satu ekosistem TikTok.',
    comparisonRows: [
      { metric: 'Revenue', before: 'Rp 0 (New Ads)', after: 'Rp 1.06 Miliar' },
      { metric: 'ROI', before: '-', after: '92.28x' },
    ],
    achievementDetails: [
      { label: 'Revenue Akhir', value: 'Rp 1.06 Miliar', highlight: true },
      { label: 'ROI', value: '92.28x', highlight: true },
      { label: 'Platform', value: 'TikTok Ads' },
      { label: 'Kategori', value: 'Fashion Streetwear' },
    ],
  },
  {
    id: 'tt-3',
    title: 'Body Care',
    platform: 'TikTok Ads',
    tag: 'Personal Care',
    badge: '🚀 Best Growth',
    metricLabel: 'ROI',
    metricValue: '9.66x',
    subMetricLabel: 'Revenue',
    subMetricValue: '5.8 M',
    before: '272 Juta',
    after: '5.8 Miliar',
    beforeLabel: 'Revenue Sebelum',
    afterLabel: 'Revenue Sesudah',
    masalahAwal: 'Brand body care menghadapi tantangan konversi rendah meskipun sudah aktif beriklan. Cost per purchase tinggi dan creative fatigue terjadi sangat cepat karena tidak ada sistem rotasi konten yang terstruktur.',
    strategiSingkat: 'Implementasi framework creative testing dengan 3 angle berbeda per minggu, dikombinasikan dengan audience segmentation berbasis lookalike dari data purchaser. Budget dialokasikan secara dinamis ke ad set dengan ROAS tertinggi setiap 3 hari.',
    comparisonRows: [
      { metric: 'Revenue', before: 'Rp 272 Juta', after: 'Rp 5.8 Miliar' },
      { metric: 'ROI', before: '-', after: '9.66x' },
    ],
    achievementDetails: [
      { label: 'Revenue Akhir', value: 'Rp 5.8 Miliar', highlight: true },
      { label: 'ROI', value: '9.66x', highlight: true },
      { label: 'Platform', value: 'TikTok Ads' },
      { label: 'Kategori', value: 'Body Care' },
    ],
  },
  {
    id: 'tt-4',
    title: 'Slime Anak',
    platform: 'TikTok Ads',
    tag: 'Kids',
    metricLabel: 'ROI',
    metricValue: '23.81x',
    subMetricLabel: 'Revenue',
    subMetricValue: '871 Juta',
    before: '477 Juta',
    after: '871 Juta',
    beforeLabel: 'Revenue Sebelum',
    afterLabel: 'Revenue Sesudah',
    masalahAwal: 'Produk slime anak mengalami penurunan tren dan kesulitan mempertahankan momentum penjualan. Iklan yang berjalan tidak menargetkan segmen orang tua yang tepat sehingga cost per purchase membengkak.',
    strategiSingkat: 'Restrukturisasi targeting ke segmen orang tua usia 25–40 tahun dengan interest anak dan mainan edukatif. Creative berfokus pada konten unboxing dan reaksi anak yang autentik. Scaling budget secara bertahap setelah menemukan winning ad set.',
    comparisonRows: [
      { metric: 'Revenue', before: 'Rp 477 Juta', after: 'Rp 871 Juta' },
      { metric: 'ROI', before: '-', after: '23.81x' },
    ],
    achievementDetails: [
      { label: 'Revenue Akhir', value: 'Rp 871 Juta', highlight: true },
      { label: 'ROI', value: '23.81x', highlight: true },
      { label: 'Platform', value: 'TikTok Ads' },
      { label: 'Kategori', value: 'Slime Anak' },
    ],
  },
  {
    id: 'tt-5',
    title: 'Eyelash',
    platform: 'TikTok Ads',
    tag: 'Personal Care',
    metricLabel: 'ROI',
    metricValue: '7.06x',
    subMetricLabel: 'Revenue',
    subMetricValue: '42.5 Juta',
    before: 'New Store (0)',
    after: '42.5 Juta',
    beforeLabel: 'Revenue Sebelum',
    afterLabel: 'Revenue Sesudah',
    masalahAwal: 'Toko eyelash baru tanpa rekam jejak penjualan. Tidak ada review produk, tidak ada social proof, dan persaingan di kategori kecantikan TikTok sangat tinggi dengan brand yang sudah memiliki basis pelanggan kuat.',
    strategiSingkat: 'Strategi launch dengan seeding produk ke beauty micro-creator untuk membangun social proof awal. Iklan dijalankan dengan format before-after yang kuat untuk menunjukkan hasil nyata. Optimasi landing page toko untuk meningkatkan conversion rate.',
    comparisonRows: [
      { metric: 'Revenue', before: 'Rp 0 (New Store)', after: 'Rp 42.5 Juta' },
      { metric: 'ROI', before: '-', after: '7.06x' },
    ],
    achievementDetails: [
      { label: 'Revenue Akhir', value: 'Rp 42.5 Juta', highlight: true },
      { label: 'ROI', value: '7.06x', highlight: true },
      { label: 'Platform', value: 'TikTok Ads' },
      { label: 'Kategori', value: 'Eyelash' },
    ],
  },
  {
    id: 'tt-6',
    title: 'FnB',
    platform: 'TikTok Ads',
    tag: 'Service',
    metricLabel: 'ROI',
    metricValue: '13.01x',
    subMetricLabel: 'Revenue',
    subMetricValue: '369 Juta',
    before: 'New Ads',
    after: '369 Juta',
    beforeLabel: 'Revenue Sebelum',
    afterLabel: 'Revenue Sesudah',
    masalahAwal: 'Brand FnB belum pernah menjalankan iklan berbayar sebelumnya. Bergantung sepenuhnya pada organic reach yang mulai stagnan. Tidak ada data audience dan tidak ada creative yang teruji untuk platform TikTok.',
    strategiSingkat: 'Memulai dengan fase testing intensif untuk memahami karakter audiens FnB di TikTok. Creative berfokus pada konten behind-the-scenes dan food presentation yang menggugah selera. Optimasi bidding secara bertahap setelah menemukan pola iklan yang efisien.',
    comparisonRows: [
      { metric: 'Revenue', before: 'New Ads', after: 'Rp 369 Juta' },
      { metric: 'ROI', before: '-', after: '13.01x' },
    ],
    achievementDetails: [
      { label: 'Revenue Akhir', value: 'Rp 369 Juta', highlight: true },
      { label: 'ROI', value: '13.01x', highlight: true },
      { label: 'Platform', value: 'TikTok Ads' },
      { label: 'Kategori', value: 'FnB' },
    ],
  },
  {
    id: 'tt-7',
    title: 'Fashion Anak',
    platform: 'TikTok Ads',
    tag: 'Kids',
    metricLabel: 'ROI',
    metricValue: '13.14x',
    subMetricLabel: 'Revenue',
    subMetricValue: '247 Juta',
    before: '48 Juta',
    after: '247 Juta',
    beforeLabel: 'Revenue Sebelum',
    afterLabel: 'Revenue Sesudah',
    masalahAwal: 'Brand fashion anak stagnan di revenue 48 juta dengan iklan yang tidak terstruktur. Targeting terlalu luas sehingga anggaran iklan terbuang pada audiens yang tidak relevan. Creative tidak menonjolkan keunggulan produk secara efektif.',
    strategiSingkat: 'Restrukturisasi targeting ke segmen ibu muda usia 22–35 tahun. Creative berfokus pada konten anak memakai produk dengan ekspresi bahagia yang autentik. Implementasi retargeting untuk pengunjung toko yang belum melakukan pembelian.',
    comparisonRows: [
      { metric: 'Revenue', before: 'Rp 48 Juta', after: 'Rp 247 Juta' },
      { metric: 'ROI', before: '-', after: '13.14x' },
    ],
    achievementDetails: [
      { label: 'Revenue Akhir', value: 'Rp 247 Juta', highlight: true },
      { label: 'ROI', value: '13.14x', highlight: true },
      { label: 'Platform', value: 'TikTok Ads' },
      { label: 'Kategori', value: 'Fashion Anak' },
    ],
  },
  {
    id: 'tt-8',
    title: 'Beauty (Softlens)',
    platform: 'TikTok Ads',
    tag: 'Personal Care',
    metricLabel: 'ROI',
    metricValue: '10.22x',
    subMetricLabel: 'Revenue',
    subMetricValue: '1.62 M',
    before: '603 Juta',
    after: '1.62 Miliar',
    beforeLabel: 'Revenue Sebelum',
    afterLabel: 'Revenue Sesudah',
    masalahAwal: 'Brand softlens menghadapi plateau di revenue 603 juta. Iklan berjalan namun tidak ada strategi scaling yang jelas. Creative mulai mengalami fatigue dan cost per purchase terus meningkat setiap bulannya.',
    strategiSingkat: 'Audit menyeluruh terhadap struktur kampanye yang ada. Rotasi creative secara sistematis dengan 5 variasi baru per minggu. Implementasi CBO (Campaign Budget Optimization) untuk distribusi budget yang lebih efisien antar ad set.',
    comparisonRows: [
      { metric: 'Revenue', before: 'Rp 603 Juta', after: 'Rp 1.62 Miliar' },
      { metric: 'ROI', before: '-', after: '10.22x' },
    ],
    achievementDetails: [
      { label: 'Revenue Akhir', value: 'Rp 1.62 Miliar', highlight: true },
      { label: 'ROI', value: '10.22x', highlight: true },
      { label: 'Platform', value: 'TikTok Ads' },
      { label: 'Kategori', value: 'Beauty (Softlens)' },
    ],
  },

  // ── SHOPEE ADS ───────────────────────────────────────────────
  {
    id: 'sp-1',
    title: 'Slime Anak',
    platform: 'Shopee Ads',
    tag: 'Kids',
    metricLabel: 'ROAS',
    metricValue: '20.46',
    subMetricLabel: 'Revenue',
    subMetricValue: '838 Juta',
    before: 'ROAS 11.83',
    after: 'ROAS 20.46',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Toko slime anak di Shopee sudah berjalan namun ROAS stagnan di angka 11.83. Struktur kampanye tidak optimal dan keyword bidding tidak terorganisir dengan baik sehingga budget terbuang pada traffic yang tidak konversi.',
    strategiSingkat: 'Restrukturisasi kampanye Shopee Ads dengan segmentasi keyword yang lebih presisi. Optimasi listing produk untuk meningkatkan organic ranking. Implementasi strategi flash sale yang tersinkronisasi dengan paid traffic untuk memaksimalkan konversi.',
    comparisonRows: [
      { metric: 'ROAS', before: '11.83', after: '20.46' },
      { metric: 'Revenue', before: '-', after: 'Rp 838 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 838 Juta', highlight: true },
      { label: 'ROAS Akhir', value: '20.46', highlight: true },
      { label: 'ROAS Awal', value: '11.83' },
      { label: 'Platform', value: 'Shopee Ads' },
    ],
  },
  {
    id: 'sp-2',
    title: 'Skincare',
    platform: 'Shopee Ads',
    tag: 'Skin Care',
    badge: '🚀 Best Growth',
    metricLabel: 'ROAS',
    metricValue: '66.64',
    subMetricLabel: 'Revenue',
    subMetricValue: '900 Juta',
    before: 'ROAS 26.98',
    after: 'ROAS 66.64',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Toko skincare di Shopee memiliki ROAS 26.98 yang sudah cukup baik namun masih jauh dari potensi maksimalnya. Struktur kampanye belum dioptimasi sepenuhnya dan ada peluang besar di segmen keyword yang belum dimanfaatkan.',
    strategiSingkat: 'Deep audit terhadap seluruh struktur kampanye dan keyword performance. Ekspansi ke keyword long-tail dengan kompetisi lebih rendah namun intent tinggi. Optimasi bid strategy dengan target ROAS yang agresif namun realistis berdasarkan data historis.',
    comparisonRows: [
      { metric: 'ROAS', before: '26.98', after: '66.64' },
      { metric: 'Revenue', before: '-', after: 'Rp 900 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 900 Juta', highlight: true },
      { label: 'ROAS Akhir', value: '66.64', highlight: true },
      { label: 'ROAS Awal', value: '26.98' },
      { label: 'Platform', value: 'Shopee Ads' },
    ],
  },
  {
    id: 'sp-3',
    title: 'Fashion Pria',
    platform: 'Shopee Ads',
    tag: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '12.18',
    subMetricLabel: 'Revenue',
    subMetricValue: '301 Juta',
    before: '-',
    after: 'ROAS 12.18',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Toko fashion pria di Shopee belum memiliki strategi iklan yang terstruktur. Penjualan bergantung pada organic traffic yang tidak stabil. Tidak ada data kampanye yang bisa dijadikan baseline untuk optimasi.',
    strategiSingkat: 'Setup kampanye Shopee Ads dari nol dengan struktur yang terorganisir. Riset keyword komprehensif untuk kategori fashion pria. Implementasi auto-bid dengan monitoring harian untuk menemukan sweet spot antara volume dan efisiensi.',
    comparisonRows: [
      { metric: 'ROAS', before: '-', after: '12.18' },
      { metric: 'Revenue', before: '-', after: 'Rp 301 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 301 Juta', highlight: true },
      { label: 'ROAS', value: '12.18', highlight: true },
      { label: 'Platform', value: 'Shopee Ads' },
      { label: 'Kategori', value: 'Fashion Pria' },
    ],
  },
  {
    id: 'sp-4',
    title: 'Fashion Pria Dewasa',
    platform: 'Shopee Ads',
    tag: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '10.34',
    subMetricLabel: 'Revenue',
    subMetricValue: '626 Juta',
    before: '-',
    after: 'ROAS 10.34',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Brand fashion pria dewasa memiliki produk berkualitas namun visibilitas di Shopee rendah. Kompetisi di kategori ini sangat ketat dan tanpa strategi iklan yang tepat, produk sulit ditemukan oleh target audiens yang tepat.',
    strategiSingkat: 'Optimasi listing produk dengan keyword yang relevan untuk meningkatkan organic ranking. Kampanye Shopee Ads difokuskan pada keyword dengan purchase intent tinggi. Strategi bundling produk untuk meningkatkan average order value.',
    comparisonRows: [
      { metric: 'ROAS', before: '-', after: '10.34' },
      { metric: 'Revenue', before: '-', after: 'Rp 626 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 626 Juta', highlight: true },
      { label: 'ROAS', value: '10.34', highlight: true },
      { label: 'Platform', value: 'Shopee Ads' },
      { label: 'Kategori', value: 'Fashion Pria Dewasa' },
    ],
  },
  {
    id: 'sp-5',
    title: 'Hair Care',
    platform: 'Shopee Ads',
    tag: 'Personal Care',
    metricLabel: 'ROAS',
    metricValue: '13.01',
    subMetricLabel: 'Revenue',
    subMetricValue: '246 Juta',
    before: '-',
    after: 'ROAS 13.01',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Produk hair care di Shopee menghadapi persaingan ketat dari brand besar yang mendominasi halaman pertama. Budget iklan terbatas sehingga perlu strategi yang sangat efisien untuk bersaing tanpa membakar anggaran.',
    strategiSingkat: 'Fokus pada keyword niche dengan kompetisi lebih rendah namun relevan dengan produk. Optimasi foto produk dan deskripsi untuk meningkatkan conversion rate organik. Kampanye iklan dijalankan secara selektif pada keyword dengan ROI terbukti.',
    comparisonRows: [
      { metric: 'ROAS', before: '-', after: '13.01' },
      { metric: 'Revenue', before: '-', after: 'Rp 246 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 246 Juta', highlight: true },
      { label: 'ROAS', value: '13.01', highlight: true },
      { label: 'Platform', value: 'Shopee Ads' },
      { label: 'Kategori', value: 'Hair Care' },
    ],
  },

  // ── CPAS SHOPEE ──────────────────────────────────────────────
  {
    id: 'cs-1',
    title: 'Fashion Pria',
    platform: 'CPAS Shopee',
    tag: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '14.31',
    subMetricLabel: 'Revenue',
    subMetricValue: '742 Juta',
    before: '-',
    after: 'ROAS 14.31',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Brand fashion pria ingin memanfaatkan data marketplace untuk retargeting namun tidak memiliki pengetahuan teknis tentang CPAS. Kampanye sebelumnya berjalan tanpa struktur audience yang tepat sehingga budget tidak efisien.',
    strategiSingkat: 'Setup CPAS dengan segmentasi audience berbasis data Shopee: cart abandoner, product viewer, dan past purchaser. Pembuatan creative yang disesuaikan dengan setiap stage funnel. Optimasi bid strategy menggunakan target ROAS dengan threshold realistis.',
    comparisonRows: [
      { metric: 'ROAS', before: '-', after: '14.31' },
      { metric: 'Revenue', before: '-', after: 'Rp 742 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 742 Juta', highlight: true },
      { label: 'ROAS', value: '14.31', highlight: true },
      { label: 'Platform', value: 'CPAS Shopee' },
      { label: 'Kategori', value: 'Fashion Pria' },
    ],
  },
  {
    id: 'cs-2',
    title: 'Hair Care (Shopee)',
    platform: 'CPAS Shopee',
    tag: 'Personal Care',
    metricLabel: 'ROAS',
    metricValue: '7.20',
    subMetricLabel: 'Revenue',
    subMetricValue: '46 Juta',
    before: '-',
    after: 'ROAS 7.20',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Brand hair care ingin mengeksplorasi channel CPAS Shopee untuk menjangkau audiens yang sudah menunjukkan minat pada kategori perawatan rambut. Belum ada pengalaman sebelumnya dengan format iklan CPAS.',
    strategiSingkat: 'Implementasi CPAS Shopee dengan fokus pada retargeting product viewer dan cart abandoner di kategori hair care. Creative disesuaikan dengan stage funnel masing-masing audiens untuk memaksimalkan relevansi iklan.',
    comparisonRows: [
      { metric: 'ROAS', before: '-', after: '7.20' },
      { metric: 'Revenue', before: '-', after: 'Rp 46 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 46 Juta', highlight: true },
      { label: 'ROAS', value: '7.20', highlight: true },
      { label: 'Platform', value: 'CPAS Shopee' },
      { label: 'Kategori', value: 'Hair Care' },
    ],
  },
  {
    id: 'cs-3',
    title: 'Sportswear Wanita',
    platform: 'CPAS Shopee',
    tag: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '17.23',
    subMetricLabel: 'Revenue',
    subMetricValue: '140 Juta',
    before: '-',
    after: 'ROAS 17.23',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Brand sportswear wanita ingin meningkatkan efisiensi iklan dengan memanfaatkan data first-party Shopee. Kampanye iklan konvensional sudah berjalan namun ROAS belum optimal karena targeting masih terlalu broad.',
    strategiSingkat: 'Implementasi CPAS dengan segmentasi presisi berbasis data perilaku belanja di Shopee. Fokus pada audiens yang sudah melihat produk sportswear wanita dalam 30 hari terakhir. Creative disesuaikan dengan tren olahraga dan gaya hidup aktif.',
    comparisonRows: [
      { metric: 'ROAS', before: '-', after: '17.23' },
      { metric: 'Revenue', before: '-', after: 'Rp 140 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 140 Juta', highlight: true },
      { label: 'ROAS', value: '17.23', highlight: true },
      { label: 'Platform', value: 'CPAS Shopee' },
      { label: 'Kategori', value: 'Sportswear Wanita' },
    ],
  },
  {
    id: 'cs-4',
    title: 'Fashion Wanita',
    platform: 'CPAS Shopee',
    tag: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '16.48',
    subMetricLabel: 'Revenue',
    subMetricValue: '59.9 Juta',
    before: '-',
    after: 'ROAS 16.48',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Brand fashion wanita ingin mengoptimalkan pengeluaran iklan dengan menargetkan audiens yang sudah menunjukkan intent pembelian. Iklan konvensional menghasilkan banyak klik namun conversion rate rendah.',
    strategiSingkat: 'Setup CPAS Shopee dengan fokus pada retargeting audiens high-intent: cart abandoner dan product viewer dalam 7 hari terakhir. Creative menggunakan format carousel untuk menampilkan variasi produk yang relevan dengan riwayat browsing audiens.',
    comparisonRows: [
      { metric: 'ROAS', before: '-', after: '16.48' },
      { metric: 'Revenue', before: '-', after: 'Rp 59.9 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 59.9 Juta', highlight: true },
      { label: 'ROAS', value: '16.48', highlight: true },
      { label: 'Platform', value: 'CPAS Shopee' },
      { label: 'Kategori', value: 'Fashion Wanita' },
    ],
  },

  // ── CPAS LAZADA ──────────────────────────────────────────────
  {
    id: 'cl-1',
    title: 'Fashion Pria',
    platform: 'CPAS Lazada',
    tag: 'Fashion',
    metricLabel: 'ROAS',
    metricValue: '14.52',
    subMetricLabel: 'Revenue',
    subMetricValue: '103 Juta',
    before: '-',
    after: 'ROAS 14.52',
    beforeLabel: 'ROAS Sebelum',
    afterLabel: 'ROAS Sesudah',
    masalahAwal: 'Brand fashion pria ingin mengeksplorasi channel CPAS Lazada untuk diversifikasi sumber revenue. Belum ada pengalaman dengan ekosistem iklan Lazada dan tidak ada data historis yang bisa dijadikan acuan.',
    strategiSingkat: 'Setup CPAS Lazada dari nol dengan struktur kampanye yang terorganisir. Segmentasi audience berbasis data Lazada: product viewer, cart abandoner, dan past purchaser. Optimasi bid secara bertahap berdasarkan data performa yang terkumpul.',
    comparisonRows: [
      { metric: 'ROAS', before: '-', after: '14.52' },
      { metric: 'Revenue', before: '-', after: 'Rp 103 Juta' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 103 Juta', highlight: true },
      { label: 'ROAS', value: '14.52', highlight: true },
      { label: 'Platform', value: 'CPAS Lazada' },
      { label: 'Kategori', value: 'Fashion Pria' },
    ],
  },

  // ── META ADS ─────────────────────────────────────────────────
  {
    id: 'ma-1',
    title: 'Minuman Herbal (CTWA)',
    platform: 'Meta Ads',
    tag: 'Herbal',
    metricLabel: 'Total Leads',
    metricValue: '10.355',
    subMetricLabel: 'CPL',
    subMetricValue: 'Rp 12.781',
    before: 'CPL Rp 50.000+',
    after: 'CPL Rp 12.781',
    beforeLabel: 'CPL Sebelum',
    afterLabel: 'CPL Sesudah',
    masalahAwal: 'Brand minuman herbal kesulitan mendapatkan leads berkualitas dengan biaya efisien melalui WhatsApp. CPL sebelumnya di atas Rp 50.000 dengan conversion rate yang sangat rendah. Funnel tidak terstruktur dan follow-up leads tidak sistematis.',
    strategiSingkat: 'Redesign funnel CTWA (Click to WhatsApp) dengan copy iklan yang menyentuh pain point target audiens. A/B testing pada 5 variasi copy dan 3 format visual. Optimasi targeting berbasis lookalike dari data pelanggan existing.',
    comparisonRows: [
      { metric: 'Total Leads', before: '-', after: '10.355 Leads' },
      { metric: 'CPL', before: 'Rp 50.000+', after: 'Rp 12.781' },
      { metric: 'Revenue/CS', before: '-', after: 'Rp 100 Juta' },
    ],
    achievementDetails: [
      { label: 'Total Leads', value: '10.355 Leads', highlight: true },
      { label: 'CPL', value: 'Rp 12.781', highlight: true },
      { label: 'Revenue per CS', value: 'Rp 100 Juta' },
      { label: 'Platform', value: 'Meta Ads (CTWA)' },
    ],
  },
  {
    id: 'ma-2',
    title: 'Susu Herbal (Landing Page)',
    platform: 'Meta Ads',
    tag: 'Herbal',
    metricLabel: 'Closing Rate',
    metricValue: '60%',
    subMetricLabel: 'CPL',
    subMetricValue: 'Rp 60k',
    before: 'CPL Tinggi',
    after: 'CPL Rp 60k',
    beforeLabel: 'CPL Sebelum',
    afterLabel: 'CPL Sesudah',
    masalahAwal: 'Brand susu herbal menggunakan landing page namun CPL masih tinggi dan closing rate rendah. Halaman landing tidak dioptimasi untuk konversi dan copy iklan tidak cukup kuat untuk mendorong audiens mengisi form.',
    strategiSingkat: 'Redesign landing page dengan fokus pada social proof, testimonial, dan benefit yang jelas. Optimasi copy iklan dengan pendekatan problem-agitate-solution. Spend bulanan Rp 360 juta dikelola dengan struktur kampanye yang efisien untuk memaksimalkan volume leads berkualitas.',
    comparisonRows: [
      { metric: 'CPL', before: 'Tinggi', after: 'Rp 60.000' },
      { metric: 'Closing Rate', before: '-', after: '60%' },
      { metric: 'Spend/Bulan', before: '-', after: 'Rp 360 Juta' },
    ],
    achievementDetails: [
      { label: 'CPL', value: 'Rp 60.000', highlight: true },
      { label: 'Closing Rate', value: '60%', highlight: true },
      { label: 'Spend per Bulan', value: 'Rp 360 Juta' },
      { label: 'Platform', value: 'Meta Ads (Landing Page)' },
    ],
  },
  {
    id: 'ma-3',
    title: 'Konveksi (CTWA)',
    platform: 'Meta Ads',
    tag: 'Service',
    metricLabel: 'ROI',
    metricValue: '140x',
    subMetricLabel: 'Revenue',
    subMetricValue: '350 Juta',
    before: 'Spend Rp 2.5 Juta',
    after: 'Revenue Rp 350 Juta',
    beforeLabel: 'Investasi Iklan',
    afterLabel: 'Revenue Dihasilkan',
    masalahAwal: 'Bisnis konveksi belum pernah menggunakan iklan berbayar. Bergantung sepenuhnya pada referral dan organic. Tidak ada sistem untuk mengukur ROI dari setiap rupiah yang diinvestasikan ke marketing.',
    strategiSingkat: 'Setup kampanye CTWA (Click to WhatsApp) yang sangat efisien dengan spend hanya Rp 2.5 juta. Targeting presisi ke segmen yang membutuhkan jasa konveksi: UMKM, event organizer, dan komunitas. CPL Rp 9.343 dengan kualitas leads yang sangat tinggi.',
    comparisonRows: [
      { metric: 'Ad Spend', before: '-', after: 'Rp 2.5 Juta' },
      { metric: 'Revenue', before: '-', after: 'Rp 350 Juta' },
      { metric: 'CPL', before: '-', after: 'Rp 9.343' },
    ],
    achievementDetails: [
      { label: 'Revenue', value: 'Rp 350 Juta', highlight: true },
      { label: 'Ad Spend', value: 'Rp 2.5 Juta', highlight: false },
      { label: 'CPL', value: 'Rp 9.343', highlight: true },
      { label: 'Platform', value: 'Meta Ads (CTWA)' },
    ],
  },
];

const PLATFORM_FILTERS: Platform[] = [
  'All Platforms',
  'TikTok Ads',
  'Shopee Ads',
  'CPAS Shopee',
  'CPAS Lazada',
  'Meta Ads',
];

const TAG_FILTERS: Tag[] = [
  'All',
  'Fashion',
  'Skin Care',
  'Personal Care',
  'Kids',
  'Herbal',
  'Service',
];

function getPlatformColor(platform: Platform): string {
  switch (platform) {
    case 'TikTok Ads': return 'bg-black text-white';
    case 'Shopee Ads': return 'bg-orange-500 text-white';
    case 'CPAS Shopee': return 'bg-orange-700 text-white';
    case 'CPAS Lazada': return 'bg-blue-600 text-white';
    case 'Meta Ads': return 'bg-blue-500 text-white';
    default: return 'bg-gray-700 text-white';
  }
}

// ── Modal ────────────────────────────────────────────────────────────────────
function CaseStudyModal({ cs, onClose }: { cs: CaseStudy; onClose: () => void }) {
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-start justify-between z-10 rounded-t-2xl">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getPlatformColor(cs.platform)}`}>
                {cs.platform}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                {cs.tag}
              </span>
              {cs.badge && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {cs.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{cs.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5 space-y-6">
          {/* Before vs After Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Perbandingan Before vs After</h4>
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">Metrik</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500">Sebelum</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-emerald-600">Sesudah</th>
                  </tr>
                </thead>
                <tbody>
                  {cs.comparisonRows.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="px-4 py-3 text-sm text-gray-600 font-medium">{row.metric}</td>
                      <td className="px-4 py-3 text-sm text-right text-gray-500">{row.before}</td>
                      <td className="px-4 py-3 text-sm text-right font-bold text-emerald-600">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Masalah Awal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Masalah Awal</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{cs.masalahAwal}</p>
          </div>

          {/* Strategi Singkat */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Strategi Singkat</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{cs.strategiSingkat}</p>
          </div>

          {/* Achievement Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Achievement Details</h4>
            <div className="grid grid-cols-2 gap-3">
              {cs.achievementDetails.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-3 border ${
                    item.highlight
                      ? 'bg-emerald-50 border-emerald-200' :'bg-gray-50 border-gray-100'
                  }`}
                >
                  <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                  <p className={`text-base font-bold leading-tight ${item.highlight ? 'text-emerald-600' : 'text-gray-800'}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────────
function CaseStudyCard({ cs, onClick }: { cs: CaseStudy; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      style={{ aspectRatio: '1 / 1' }}
    >
      {/* Badge */}
      {cs.badge && (
        <div className="absolute top-3 right-3 z-10">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-500 text-white shadow-sm">
            {cs.badge}
          </span>
        </div>
      )}

      {/* Platform pill */}
      <div className="absolute top-3 left-3 z-10">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getPlatformColor(cs.platform)}`}>
          {cs.platform}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 pt-12">
        {/* Title + tag */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{cs.tag}</p>
          <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2">{cs.title}</h3>
        </div>

        {/* Metrics */}
        <div className="space-y-2">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">{cs.metricLabel}</p>
            <p className="text-3xl font-extrabold text-emerald-500 leading-none">{cs.metricValue}</p>
          </div>
          {cs.subMetricLabel && (
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-400">{cs.subMetricLabel}:</span>
              <span className="text-sm font-bold text-gray-700">{cs.subMetricValue}</span>
            </div>
          )}

          {/* Before → After */}
          {cs.before && cs.before !== '-' && (
            <div className="flex items-center gap-1.5 pt-1 border-t border-gray-100">
              <span className="text-xs text-gray-400 line-through">{cs.before}</span>
              <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-xs font-semibold text-emerald-600">{cs.after}</span>
            </div>
          )}

          {/* Click hint */}
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-1">
            <span className="text-xs text-emerald-500 font-medium">Lihat Detail</span>
            <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </button>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────
export default function CaseStudyLibrary() {
  const [activePlatform, setActivePlatform] = useState<Platform>('All Platforms');
  const [activeTag, setActiveTag] = useState<Tag>('All');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filtered = ALL_CASE_STUDIES.filter((cs) => {
    const matchPlatform = activePlatform === 'All Platforms' || cs.platform === activePlatform;
    const matchTag = activeTag === 'All' || cs.tag === activeTag;
    return matchPlatform && matchTag;
  });

  return (
    <section id="case-study-library" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-500 mb-3">
            Case Study Library
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            21 Hasil Nyata,
            <br />
            <span className="text-emerald-500">Berbasis Data.</span>
          </h2>
          <p className="text-gray-500 max-w-lg text-base leading-relaxed">
            Setiap angka di bawah ini adalah hasil optimasi yang terukur dan transparan. Klik kartu untuk melihat detail lengkap strategi dan pencapaian.
          </p>
        </div>

        {/* Level 1 Filter — Platforms */}
        <div className="flex flex-wrap gap-2 mb-4">
          {PLATFORM_FILTERS.map((p) => (
            <button
              key={p}
              onClick={() => setActivePlatform(p)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activePlatform === p
                  ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Level 2 Filter — Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TAG_FILTERS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                activeTag === t
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs text-gray-400 mb-6">
          Menampilkan <span className="font-semibold text-gray-600">{filtered.length}</span> case study
        </p>

        {/* Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((cs) => (
              <CaseStudyCard key={cs.id} cs={cs} onClick={() => setSelectedCase(cs)} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Tidak ada case study untuk filter ini.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCase && (
        <CaseStudyModal cs={selectedCase} onClose={() => setSelectedCase(null)} />
      )}
    </section>
  );
}
