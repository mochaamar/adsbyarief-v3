'use client';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'Apakah budget iklan pasti aman?',
    a: 'Budget iklan dikelola dengan pendekatan testing terstruktur untuk memahami respons pasar terlebih dahulu. Kami mulai dengan budget testing yang terkontrol sebelum melakukan scaling, sehingga setiap keputusan berdasarkan data nyata, bukan asumsi. Tidak ada jaminan hasil instan, namun proses kami meminimalkan risiko pemborosan budget.',
  },
  {
    q: 'Siapa yang menyiapkan budget dan aset kreatif?',
    a: 'Budget iklan sepenuhnya disiapkan oleh klien dan langsung masuk ke akun iklan masing-masing (tidak melalui saya). Untuk aset kreatif seperti foto produk dan video, klien yang menyiapkan. Saya akan memberikan creative brief berbasis data yang detail — angle, hook, format, dan referensi — sehingga tim konten Anda tahu persis apa yang perlu dibuat.',
  },
  {
    q: 'Tim apa yang harus disiapkan dari sisi klien?',
    a: 'Untuk hasil optimal, idealnya klien memiliki: (1) Tim Konten untuk memproduksi materi iklan sesuai brief, (2) Tim Affiliate untuk mengelola creator dan affiliate jika menggunakan layanan affiliate, (3) Admin CS untuk menangani lonjakan order dan pertanyaan customer, (4) Tim Social Media untuk menjaga engagement organik. Saya akan berkoordinasi langsung dengan tim-tim tersebut.',
  },
  {
    q: 'Berapa lama kontrak kerja sama?',
    a: 'Minimum engagement adalah 3 bulan untuk layanan Ads Handling. Ini diperlukan karena fase testing biasanya berlangsung di bulan pertama, optimasi di bulan kedua, dan scaling di bulan ketiga. Kontrak lebih pendek dari itu berisiko tidak memberikan hasil optimal karena proses belum sempurna berjalan.',
  },
  {
    q: 'Apakah saya bisa memulai dengan budget kecil?',
    a: 'Ya, sangat bisa. Bahkan dianjurkan untuk memulai dengan budget testing yang terukur. Untuk TikTok Ads misalnya, budget Rp 50–100 ribu per hari sudah cukup untuk fase testing awal. Yang terpenting adalah konsistensi dan kesediaan untuk mengikuti proses, bukan besar kecilnya budget di awal.',
  },
  {
    q: 'Bagaimana sistem pelaporan bekerja?',
    a: 'Setiap klien mendapatkan laporan bulanan komprehensif yang mencakup: total spend vs revenue, ROAS per campaign, top performing creative, audience insight, dan rekomendasi untuk bulan berikutnya. Selain itu, update progress juga diberikan secara berkala melalui WhatsApp sehingga Anda selalu tahu kondisi terkini kampanye.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-background relative">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="text-section-heading text-foreground mt-2">
            Pertanyaan yang
            <br />
            <span className="text-accent">Sering Ditanyakan</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs?.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'border-accent/40 shadow-sm shadow-accent/10' : 'border-border'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className={`font-700 text-base transition-colors ${openIndex === i ? 'text-accent' : 'text-foreground'}`}>
                  {faq?.q}
                </span>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? 'border-accent bg-accent text-white rotate-45' :'border-border text-muted-foreground'
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
              </button>

              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq?.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}