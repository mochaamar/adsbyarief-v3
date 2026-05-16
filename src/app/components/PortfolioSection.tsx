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
  achieve: string;
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
    masalahAwal: 'CPA (Cost per SKU order) tergolong cukup tinggi di angka Rp 54.891 dengan volume pesanan yang masih tertahan (1.231 orders). Toko kesulitan melakukan scale-up budget karena khawatir ROI akan semakin merosot atau boncos jika tidak dioptimasi.',
    strategiSingkat: 'Melakukan creative testing secara intensif untuk menemukan winning video, memperbaiki struktur campaign GMV Max agar alokasi budget lebih efisien, menyeleksi target audiens yang lebih relevan untuk menekan CPA, lalu melakukan scaling budget secara agresif pada campaign yang terbukti menghasilkan ROI tinggi.',
    achieve: 'Berhasil melakukan scale-up budget iklan hingga hampir 5x lipat dengan performa yang justru makin efisien. CPA berhasil ditekan turun hampir setengahnya (dari Rp 54.891 menjadi Rp 28.445). Pertumbuhan Gross Revenue meroket tajam lebih dari 9x lipat (dari Rp 301 Jutaan menjadi Rp 2,7 Miliar) dalam sebulan, diiringi dengan peningkatan pesanan tembus 11.128 orders dan ROI yang stabil di angka fantastis (8.69).',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 67.570.361', after: 'Rp 316.531.893' },
      { label: 'Revenue', before: 'Rp 301.895.688', after: 'Rp 2.750.703.709' },
      { label: 'ROI', before: '4.47', after: '8.69' },
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
    masalahAwal: 'Belum pernah ads dan baru mulai ads ketika saya handle.',
    strategiSingkat: 'Membangun fondasi campaign dari nol dengan memanfaatkan fitur GMV Max untuk mendorong volume penjualan secara maksimal sejak awal. Fokus pada creative testing dengan konten video yang sangat relevan untuk audiens streetwear (seperti outfit ideas atau mix-and-match) guna memancing interaksi organik tinggi. Menggunakan strategi broad targeting di awal untuk memberikan keleluasaan pada algoritma TikTok mencari pembeli dengan Cost per Action (CPA) paling murah.',
    achieve: 'Berhasil mencetak omset fantastis menembus Rp 1 Miliar (tepatnya Rp 1.063.649.482) pada bulan pertama menjalankan iklan dari nol. Tingkat efisiensi campaign sangat luar biasa, di mana dengan ad spend hanya sekitar Rp 11,5 Jutaan mampu menghasilkan ROI sebesar 92.28. CPA (Cost per SKU order) berhasil ditekan di angka yang sangat murah, yaitu Rp 501 per pesanan, dan mendatangkan total 23.008 pesanan masuk.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 0', after: 'Rp 11.526.056' },
      { label: 'Revenue', before: 'Rp 0', after: 'Rp 1.063.649.482' },
      { label: 'ROI', before: '0.00', after: '92.28' },
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
    masalahAwal: 'ROI stuck di kisaran 5 x, toko kesulitan melakukan scaling budget secara besar-besaran karena khawatir performa akan menurun dan CPA membengkak.',
    strategiSingkat: 'Melakukan perombakan total pada creative video dengan menonjolkan angle yang spesifik untuk produk body care (seperti before-after, tekstur produk, dan honest review), memaksimalkan fase learning pada campaign GMV Max, serta melakukan scaling budget secara agresif dan berkala pada winning campaign sembari menekan Cost per Action (CPA).',
    achieve: 'Berhasil melakukan scaling ad spend secara masif hingga lebih dari 11x lipat (dari Rp 51 Jutaan ke Rp 605 Jutaan) dengan performa yang justru semakin luar biasa. Gross Revenue meroket tajam menembus Rp 5,8 Miliar (naik 21x lipat dari sebelumnya Rp 272 Jutaan) hanya dalam waktu satu bulan. Selain itu, CPA berhasil ditekan turun setengahnya (dari Rp 10.844 menjadi Rp 5.892), mendatangkan total 102.748 pesanan, dan berhasil menggandakan ROI menjadi 9.66.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 51.520.378', after: 'Rp 605.360.644' },
      { label: 'Revenue', before: 'Rp 272.133.024', after: 'Rp 5.850.762.529' },
      { label: 'ROI', before: '5.28', after: '9.66' },
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
    masalahAwal: 'ROI masih di bawah 12x (tepatnya 10.99 pada bulan September), sedangkan target minimal yang ditetapkan ada di 14x.',
    strategiSingkat: 'Melakukan efisiensi budget dengan mematikan campaign yang boncos atau kurang optimal. Fokus pada penyegaran creative video yang lebih eye-catching untuk target audiens anak-anak dan orang tua (misalnya: visual warna-warni, efek suara/ASMR slime, dan review seru). Selain itu, melakukan optimasi targeting pada GMV Max agar Cost per Action (CPA) bisa ditekan serendah mungkin untuk mendongkrak ROI.',
    achieve: 'Berhasil melampaui target ROI secara signifikan hingga menyentuh angka fantastis 23.81 (jauh di atas target 14x). Sangat luar biasa karena efisiensi budget berhasil dilakukan (ad spend turun dari Rp 43 Jutaan menjadi Rp 36 Jutaan), namun Gross Revenue justru meroket hampir 2x lipat menembus Rp 871 Jutaan. CPA berhasil dipangkas lebih dari setengahnya (dari Rp 1.931 turun drastis menjadi Rp 976 per pesanan), dengan lonjakan volume pesanan mencapai 37.510 orders.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 43.438.356', after: 'Rp 36.608.443' },
      { label: 'Revenue', before: 'Rp 477.474.523', after: 'Rp 871.785.418' },
      { label: 'ROI', before: '10.99', after: '23.81' },
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
    masalahAwal: 'Toko baru dan belum pernah iklan secara proper/optimal. Klien menetapkan target awal ROI di angka 3x.',
    strategiSingkat: 'Karena toko masih sangat baru, fokus utama ada pada creative testing dengan angle video yang kuat untuk produk kecantikan (seperti before-after pemakaian eyelash, tutorial pemasangan, atau review ketahanan). Menggunakan campaign GMV Max dari awal untuk memaksimalkan machine learning TikTok dalam mencari audiens dengan intensi beli tinggi, lalu mulai melakukan scaling budget secara terukur setelah memvalidasi bahwa konversi mulai masuk dan ROI stabil di atas target.',
    achieve: 'Peluncuran iklan pertama sukses besar dan berhasil melampaui target dari klien. Dengan modal iklan Rp 6 Jutaan, campaign mampu mencetak omset (Gross Revenue) hingga Rp 42,5 Juta di bulan pertamanya beriklan. Target ROI 3x terlampaui jauh hingga menyentuh angka 7.06, sekaligus sukses mendatangkan volume pesanan sebanyak 463 orders dengan Cost per Action (CPA) di Rp 13.033 per pesanan.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 263', after: 'Rp 6.034.050' },
      { label: 'Revenue', before: 'Rp 86.630', after: 'Rp 42.572.583' },
      { label: 'ROI', before: '0', after: '7.06' },
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
    masalahAwal: 'Belum pernah beriklan (ads) sebelumnya dan baru mulai ads saat di-handle oleh saya, dengan klien menetapkan target ROI di angka 10x.',
    strategiSingkat: 'Membangun campaign dari nol menggunakan objektif GMV Max untuk mempercepat penetrasi pasar dan mendorong konversi maksimal. Fokus pada pengujian creative video yang menggugah selera (appetizing) dengan menonjolkan visual kepedasan dan efek suara ASMR (crunchy) untuk memicu impulse buying pada audiens. Melakukan broad targeting pada fase awal untuk memberikan ruang pada algoritma mencari audiens paling relevan dengan Cost per Action (CPA) termurah, lalu melakukan scaling budget pada creative yang terbukti menghasilkan penjualan (winning creative).',
    achieve: 'Peluncuran campaign iklan pertama sukses besar dan langsung melebihi ekspektasi. Hanya dalam waktu kurang dari satu bulan beriklan (19 April - 14 Mei 2026), berhasil mencetak omset (Gross Revenue) hingga Rp 369,4 Juta. Target ROI 10x berhasil dilampaui dengan nyaman hingga menyentuh angka 13.01. Selain itu, campaign ini sukses mendatangkan volume pesanan yang masif, yaitu 6.151 orders, dengan CPA yang sangat efisien di angka Rp 4.616 per pesanan.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 0', after: 'Rp 28.393.378' },
      { label: 'Revenue', before: 'Rp 0', after: 'Rp 369.499.024' },
      { label: 'ROI', before: '0.00', after: '13.01' },
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
    masalahAwal: 'target menjaga roas di atas 10 dengan kenaikan revenue.',
    strategiSingkat: 'Melakukan scaling up budget secara terukur pada winning campaign GMV Max. Langkah ini dibarengi dengan penyegaran creative video (menonjolkan angle kenyamanan bahan pakaian atau inspirasi OOTD anak) agar Cost per Action (CPA) tidak ikut membengkak saat budget diperbesar.',
    achieve: 'Sukses melakukan scale-up dengan hasil maksimal! Ad spend dinaikkan hingga 4x lipat (dari Rp 4,7 Juta menjadi Rp 18,8 Juta), dan omset berhasil melesat tajam 5x lipat menembus Rp 247,7 Juta. Target awal tercapai sempurna karena ROI tidak drop, melainkan justru meningkat dari 10.40 menjadi 13.14.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 4.705.140', after: 'Rp 18.846.922' },
      { label: 'Revenue', before: 'Rp 48.919.709', after: 'Rp 247.710.691' },
      { label: 'ROI', before: '10.40', after: '13.14' },
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
    masalahAwal: 'target omset 1 miliar dengan roi di atas 10x.',
    strategiSingkat: 'Melakukan scaling budget secara agresif pada campaign GMV Max yang potensial. Untuk mengimbangi budget yang diperbesar, dilakukan injeksi variasi creative video secara berkala (seperti try-on warna softlens untuk berbagai skin tone atau makeup look) guna memperluas jangkauan audiens sekaligus menjaga stabilitas CPA (Cost per Action).',
    achieve: 'Target omset dan efisiensi sukses terlampaui! Berhasil menembus target 1 Miliar dengan meroketkan omset dari Rp 603 Jutaan menjadi Rp 1,62 Miliar. Walaupun pengeluaran iklan di-scale up hampir 4x lipat (dari Rp 41 Juta ke Rp 158 Juta), performa tetap terkendali dengan ROI yang berhasil dijaga di angka 10.22 (sesuai target di atas 10x) dan mendatangkan total pesanan masif sebanyak 15.953 orders.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 41.606.537', after: 'Rp 158.672.240' },
      { label: 'Revenue', before: 'Rp 603.327.175', after: 'Rp 1.621.879.338' },
      { label: 'ROI', before: '14.50', after: '10.22' },
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
    masalahAwal: 'ROAS masih dibawah 12x (tepatnya 11.83 pada bulan Desember), padahal target minimal di 14x.',
    strategiSingkat: 'Melakukan audit dan restrukturisasi keyword (kata kunci) secara menyeluruh pada Iklan Pencarian. Mematikan keyword broad yang terbukti memakan biaya tinggi (boncos) tanpa konversi yang memadai. Mengalihkan dan memfokuskan budget pada keyword exact (spesifik) dengan intent pembelian tinggi yang relevan dengan produk slime anak. Selain itu, melakukan optimasi harga bid (bid adjustment) secara berkala untuk menjaga efisiensi Iklan Produk Serupa.',
    achieve: 'Berhasil melakukan efisiensi pengeluaran iklan sekaligus memaksimalkan penjualan. Biaya iklan berhasil ditekan turun dari Rp 56,7 Juta menjadi Rp 41 Juta, namun omset dari iklan justru meningkat signifikan dari Rp 670,9 Juta menjadi Rp 838,5 Juta. Target ROAS berhasil terlampaui jauh, meroket dari 11.83 menjadi 20.46. Peningkatan performa ini juga dibarengi dengan kenaikan volume pesanan dari 22 ribu orders menjadi 25,1 ribu orders.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 56.700.000', after: 'Rp 41.000.000' },
      { label: 'Revenue', before: 'Rp 670.900.000', after: 'Rp 838.500.000' },
      { label: 'ROAS', before: '11.83', after: '20.46' },
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
    masalahAwal: 'target menjaga ROAS di atas 20 x',
    strategiSingkat: 'Mengubah keyword boncos dari broad ke exact match pada Iklan Pencarian untuk mengincar pembeli potensial, serta optimasi bid Iklan Produk Serupa untuk merebut trafik kompetitor tanpa menambah budget harian.',
    achieve: 'Efisiensi maksimal; dengan budget yang hampir sama (Rp 13 Jutaan), omset melesat 2,5x lipat dari Rp 360 Juta menjadi Rp 900,8 Juta. ROAS naik tajam menembus 66,64 (jauh melampaui target 20x), dan total pesanan naik dari 2.1k menjadi 5.1k orders.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: 'Rp 13.300.000', after: 'Rp 13.500.000' },
      { label: 'Revenue', before: 'Rp 360.000.000', after: 'Rp 900.800.000' },
      { label: 'ROAS', before: '26.98', after: '66.64' },
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
    masalahAwal: 'target roas diatas 10x',
    strategiSingkat: 'Melakukan seleksi keyword ketat (fokus pada exact match) di Iklan Pencarian untuk menjaring audiens berintensi beli tinggi, serta mengoptimalkan bid pada Iklan Produk Serupa untuk merebut trafik dari toko kompetitor secara efisien.',
    achieve: 'Target sukses terlampaui! Dengan pengeluaran iklan sebesar Rp 24,8 Juta, campaign berhasil mencetak omset hingga Rp 301,6 Juta. ROAS sangat sehat dan stabil di angka 12,18 (melebihi target 10x), serta sukses mendatangkan 1.300 pesanan masuk.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 24.800.000' },
      { label: 'Revenue', before: '-', after: 'Rp 301.600.000' },
      { label: 'ROAS', before: '-', after: '12.18' },
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
    masalahAwal: 'target roas diatas 10x',
    strategiSingkat: 'Memfokuskan budget pada kata kunci spesifik (exact match) di Iklan Pencarian yang relevan dengan produk pria dewasa, serta optimasi bid pada Iklan Produk Serupa untuk merebut trafik dari kompetitor secara efektif.',
    achieve: 'Target sukses terlampaui! Dengan total pengeluaran iklan Rp 60,5 Juta, kampanye ini berhasil meraup omset hingga Rp 626 Juta. ROAS berhasil diamankan pada angka 10,34 (memenuhi target di atas 10x), dan sukses mendatangkan total 2.600 pesanan (2.6k orders).',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 60.500.000' },
      { label: 'Revenue', before: '-', after: 'Rp 626.000.000' },
      { label: 'ROAS', before: '-', after: '10.34' },
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
    masalahAwal: 'target roas diatas 10x',
    strategiSingkat: 'Mengoptimalkan Iklan Pencarian dengan fokus pada kata kunci spesifik (exact match) yang relevan untuk memangkas klik tidak berkualitas (menghindari boncos), dipadukan dengan optimasi bid pada Iklan Produk Serupa guna mengamankan trafik dari audiens kompetitor.',
    achieve: 'Target sukses terlampaui! Dengan alokasi iklan Rp 19 Juta, campaign ini berhasil meraup omset hingga Rp 246,8 Juta. ROAS berhasil menembus angka 13,01 (dengan nyaman melampaui target 10x) dan sukses mendatangkan total pesanan sebanyak 1.300 (1.3k orders).',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 19.000.000' },
      { label: 'Revenue', before: '-', after: 'Rp 246.800.000' },
      { label: 'ROAS', before: '-', after: '13.01' },
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
    masalahAwal: 'target roas diatas 10x',
    strategiSingkat: 'Memaksimalkan Dynamic Product Ads (DPA) untuk retargeting pengunjung toko dan mengonversi puluhan ribu audiens (tepatnya 25.447 audiens) yang sudah masuk ke tahap Add to Cart (ATC), dikombinasikan dengan broad targeting untuk terus mendatangkan pembeli baru.',
    achieve: 'Target terlampaui dengan sukses! Dengan alokasi ad spend sebesar Rp 51.853.014, campaign ini berhasil mencetak omset masif hingga Rp 742.012.386. ROAS rata-rata sangat stabil di angka 14.31 (jauh di atas target 10x) dan berhasil mendatangkan 3.330 konversi pesanan.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 51.853.014' },
      { label: 'Revenue', before: '-', after: 'Rp 742.012.386' },
      { label: 'ROAS', before: '-', after: '14.31' },
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
    masalahAwal: 'target roas diatas 5x',
    strategiSingkat: 'Mengoptimalkan Dynamic Product Ads (DPA) dengan fokus pada taktik retargeting untuk menjangkau kembali audiens berpotensi tinggi, khususnya 7.429 audiens di tahap Content Views dan 1.299 audiens Add to Cart (ATC), guna mendorong penyelesaian transaksi.',
    achieve: 'Target efisiensi berhasil terlampaui! ROAS rata-rata mencapai 7.20 (di atas target 5x). Dengan ad spend sebesar Rp 6,4 Jutaan, campaign ini sukses mencetak omset hingga Rp 46,7 Jutaan dan mendatangkan 262 pesanan, dengan Cost per Purchase (CPP) yang efisien di angka Rp 24.762.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 6.487.628' },
      { label: 'Revenue', before: '-', after: 'Rp 46.713.716' },
      { label: 'ROI', before: '-', after: '7.20' },
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
    masalahAwal: 'target roas diatas 15x',
    strategiSingkat: 'Mengoptimalkan Dynamic Product Ads (DPA) dengan fokus retargeting secara agresif pada audiens berintensi beli tinggi, khususnya pada 3.826 audiens yang sudah berada di tahap Add to Cart (ATC), untuk segera menyelesaikan pembayaran (checkout).',
    achieve: 'Target efisiensi sukses besar dan terlampaui! ROAS rata-rata menyentuh angka 17.23 (berhasil melampaui target 15x). Dengan alokasi pengeluaran iklan Rp 8,1 Jutaan, kampanye ini berhasil meraup omset hingga Rp 140,9 Jutaan serta mencetak 580 total pesanan dengan Cost Per Purchase (CPP) yang sangat efisien di angka Rp 14.111.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 8.184.114' },
      { label: 'Revenue', before: '-', after: 'Rp 140.984.520' },
      { label: 'ROI', before: '-', after: '17.23' },
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
    masalahAwal: 'baru mulai untuk CPAS dan target roas di atas 10x',
    strategiSingkat: 'Menggunakan Dynamic Product Ads (DPA) untuk mengoptimalkan katalog produk secara otomatis, dikombinasikan dengan strategi retargeting pengunjung toko dan broad targeting untuk menjaring konversi pembeli baru dengan biaya termurah.',
    achieve: 'Target terlampaui sejak bulan pertama berjalan! Dengan budget Rp 3,6 Jutaan, campaign sukses mencetak omset hampir Rp 60 Juta. ROAS rata-rata mencapai angka fantastis 16.48 (jauh di atas target 10x) dan berhasil mendatangkan 301 pesanan.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 3.635.473' },
      { label: 'Revenue', before: '-', after: 'Rp 59.903.717' },
      { label: 'ROAS', before: '-', after: '16.48' },
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
    masalahAwal: 'target roas diatas 10x',
    strategiSingkat: 'Memanfaatkan fitur Dynamic Product Ads (DPA) terintegrasi Lazada untuk memfokuskan budget pada retargeting. Taktik ini menyasar audiens berpotensi tinggi, khususnya ratusan ribu audiens yang sudah ada di tahap Content Views dan ribuan audiens Add to Cart (ATC), agar segera menyelesaikan pembayaran.',
    achieve: 'Target efisiensi berhasil terlampaui! Dengan pengeluaran iklan yang hemat sebesar Rp 7,1 Jutaan, campaign sukses mencetak omset hingga Rp 103,2 Jutaan. ROAS stabil di angka 14.52 (aman di atas target 10x) dan berhasil mendatangkan 470 konversi pesanan dengan Cost per Purchase (CPP) di kisaran Rp 15 ribuan saja.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 7.108.168' },
      { label: 'Revenue', before: '-', after: 'Rp 103.206.878' },
      { label: 'ROAS', before: '-', after: '14.52' },
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
    masalahAwal: 'target Cost Per Lead dibawah 15 ribu , spend harian di 1,5 juta , CR 20%',
    strategiSingkat: 'Fokus optimasi targeting dan creative CTWA untuk menyaring lead berkualitas tinggi, serta mengatur pacing budget harian di Rp 1,5 juta agar CPL tidak membengkak dan target Conversion Rate (CR) 20% lebih mudah dieksekusi CS.',
    achieve: 'CPL sukses ditekan di angka Rp 12.781 (aman di bawah target 15 ribu) dengan total 10.355 leads. Kualitas lead sangat tertarget, terbukti dari pencapaian omset Rp 100 Juta yang berhasil di-closing hanya dengan mengandalkan 1 CS.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 119.230.977' },
      { label: 'Revenue', before: '-', after: 'Rp 100.000.000' },
      { label: 'CPL', before: '-', after: 'Rp 12.781' },
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
    masalahAwal: 'objektif lead target CPL maks Rp90.000',
    strategiSingkat: 'Melakukan testing konten dan audiens secara intensif. Menguji berbagai kombinasi creative iklan dan targeting untuk menemukan formula winning campaign yang mampu menyuplai lead dengan performa terbaik dan biaya termurah.',
    achieve: 'Target efisiensi berhasil dicapai! Cost per Result (CPR/CPL) sukses ditekan di angka Rp 60.000 (jauh lebih murah dari batas maksimal Rp 90.000). Campaign mampu menyerap budget skala besar (Rp 360 Juta/bulan) secara stabil dengan kualitas lead yang sangat tertarget, dibuktikan dari tingginya closing rate yang mencapai 60% dengan rasio pembelian 1,5.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 360.000.000 (daily Rp 12.000.000)' },
      { label: 'Revenue', before: '-', after: 'Rp 486.000.000' },
      { label: 'CPL', before: '-', after: 'Rp 60.000' },
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
    masalahAwal: 'objektif lead target CPL maks Rp 15.000 sekaligus butuh membangun branding bisnis di media digital.',
    strategiSingkat: 'Melakukan testing audiens, memproduksi konten visual (foto dan video) yang relevan, mengoptimalkan copywriting iklan, dan aktif mengelola fanpage untuk meningkatkan interaksi.',
    achieve: 'Target efisiensi berhasil! CPL (CPR) sukses ditekan ke angka Rp 9.343 (aman di bawah target maksimal). Dengan spend yang sangat efisien sebesar Rp 2,5 Juta, campaign ini berhasil menyumbang omzet hingga Rp 350 Juta.',
    beforeAfterRows: [
      { label: 'Ad Spend', before: '-', after: 'Rp 2.500.000' },
      { label: 'Revenue', before: '-', after: 'Rp 350.000.000' },
      { label: 'CPL', before: '-', after: 'Rp 9.343' },
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
            <p className="text-xs text-gray-400 mt-0.5">{study.platform}</p>
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
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Perbandingan Data</h4>
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-500 text-xs">Metrik</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-500 text-xs">Sebelum Handle</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#22C55E] text-xs">Saat Handle ✓</th>
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

          {/* Achieve */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Achieve</h4>
            <p className="text-sm text-gray-600 leading-relaxed bg-emerald-50 rounded-xl px-4 py-3 border border-emerald-100">
              {study.achieve}
            </p>
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