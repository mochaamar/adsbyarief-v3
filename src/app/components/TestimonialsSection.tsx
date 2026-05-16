import React from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  id: 1,
  name: 'Budi Santoso',
  role: 'Owner, Toko Body Care Jakarta',
  quote:
  'Arief sangat transparan dalam menyajikan data. Setiap rupiah yang kami keluarkan untuk iklan bisa dilacak hasilnya. Dalam 3 bulan, revenue kami naik 4x lipat dengan spend yang efisien.',
  platform: 'TikTok Ads',
  roi: '9.66x ROI',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1003bd3e5-1772971827253.png",
  avatarAlt: 'Pria Indonesia usia 35 tahun berpenampilan profesional dengan kemeja putih'
},
{
  id: 2,
  name: 'Siti Rahayu',
  role: 'Marketing Manager, Brand Fashion Muslim',
  quote:
  'Komunikasi Arief sangat responsif. Bahkan di luar jam kerja, laporan dan update selalu diberikan tepat waktu. Scale-up ROI yang kami capai melebihi ekspektasi kami.',
  platform: 'TikTok Ads',
  roi: '8.69x ROI',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14e813e64-1772288853436.png",
  avatarAlt: 'Wanita Indonesia berpenampilan profesional dengan hijab berwarna netral pada latar terang'
},
{
  id: 3,
  name: 'Rian Hidayat',
  role: 'Founder, Streetwear Brand Bandung',
  quote:
  'Untuk brand baru, ROI 92x itu luar biasa. Arief paham betul cara testing yang efisien sehingga budget tidak terbuang percuma. Strategi launch-nya sangat solid.',
  platform: 'TikTok Ads',
  roi: '92.28x ROI',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0d40564-1763293591452.png",
  avatarAlt: 'Pria muda Indonesia berpenampilan kasual dengan ekspresi percaya diri pada latar netral'
},
{
  id: 4,
  name: 'Dewi Kusuma',
  role: 'Owner, Brand Skincare Surabaya',
  quote:
  'Shopee Ads yang dikelola Arief memberikan hasil konsisten setiap bulan. Laporan bulanannya sangat detail dan mudah dipahami. Saya bisa fokus ke produksi karena ads sudah ditangani dengan baik.',
  platform: 'Shopee Ads',
  roi: '66.64x ROI',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1189b0c6b-1763296107547.png",
  avatarAlt: 'Wanita Indonesia usia 30 tahun berpenampilan profesional dengan senyum percaya diri'
},
{
  id: 5,
  name: 'Hendra Wijaya',
  role: 'CEO, Fashion Pria Yogyakarta',
  quote:
  'CPAS strategy yang diterapkan Arief benar-benar berbeda. Tidak hanya soal angka, tapi juga edukasi strategi yang membuat tim internal kami makin paham tentang performance marketing.',
  platform: 'CPAS',
  roi: '14.31x ROI',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15209ed8a-1772295357333.png",
  avatarAlt: 'Pria Indonesia usia 40 tahun dengan penampilan eksekutif pada latar abu-abu terang'
}];


export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div
        className="absolute right-0 top-0 w-96 h-96 pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)', filter: 'blur(80px)' }} />
      

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Testimoni Klien</span>
          <h2 className="text-section-heading text-foreground mt-2">
            Mereka Sudah
            <br />
            <span className="text-accent">Merasakan Hasilnya.</span>
          </h2>
        </div>

        {/* Grid: 3 top + 2 bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {testimonials.slice(0, 3).map((t) =>
          <TestimonialCard key={t.id} data={t} />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {testimonials.slice(3, 5).map((t) =>
          <TestimonialCard key={t.id} data={t} />
          )}
        </div>
      </div>
    </section>);

}

function TestimonialCard({ data }: {data: typeof testimonials[0];}) {
  return (
    <div className="bg-background rounded-2xl p-6 border border-border card-hover flex flex-col gap-4">
      {/* Quote mark */}
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="text-accent/30 shrink-0">
        <path d="M0 20V12C0 5.333 3.333 1.333 10 0l1.6 2.4C8.533 3.467 6.8 5.2 6.4 7.6H12V20H0zm16 0V12c0-6.667 3.333-10.667 10-12l1.6 2.4c-3.067 1.067-4.8 2.8-5.2 5.2H28V20H16z" fill="currentColor" />
      </svg>

      <p className="text-sm text-foreground leading-relaxed flex-grow">{data.quote}</p>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-border shrink-0">
            <AppImage
              src={data.avatar}
              alt={data.avatarAlt}
              width={40}
              height={40}
              className="w-full h-full object-cover" />
            
          </div>
          <div>
            <p className="text-sm font-700 text-foreground">{data.name}</p>
            <p className="text-xs text-muted-foreground">{data.role}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-700 text-accent block">{data.roi}</span>
          <span className="text-xs text-muted-foreground">{data.platform}</span>
        </div>
      </div>
    </div>);

}