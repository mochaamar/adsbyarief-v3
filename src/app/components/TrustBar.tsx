'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Metric {
  value: string;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
}

const metrics: Metric[] = [
  {
    value: '50',
    prefix: '',
    suffix: '+',
    label: 'Brand Partner',
    description: 'Puluhan brand dipercayakan',
  },
  {
    value: '92',
    prefix: 'ROI ',
    suffix: 'x',
    label: 'Return on Investment',
    description: 'Tertinggi di kategori streetwear',
  },
  {
    value: '10',
    prefix: 'Rp ',
    suffix: 'M+',
    label: 'Revenue Dikelola',
    description: 'Lintas platform iklan',
  },
  {
    value: '3',
    prefix: '',
    suffix: '+',
    label: 'Tahun Pengalaman',
    description: 'Proven scale-up strategy',
  },
];

function CountUpNumber({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="metric-number">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="relative py-16 bg-foreground overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="beam-border-h" style={{ background: 'rgba(255,255,255,0.05)' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="flex flex-col items-center text-center px-4 md:px-8 py-4"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CountUpNumber
                target={parseInt(metric.value)}
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
              <p className="text-sm font-700 text-white mt-2">{metric.label}</p>
              <p className="text-xs text-white/50 mt-1">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}