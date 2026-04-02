import React from 'react';
import { motion } from 'framer-motion';
import CTA from './CTA';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { useTheme } from '../context/ThemeContext';

const AVATARS = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/36.jpg',
  'https://randomuser.me/api/portraits/women/65.jpg',
];

/* BADGE */
function CircularRotatedBadge() {
  return (
    <div className="relative h-full w-full rounded-full border border-white/15 bg-transparent shadow-2xl">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full rotate-[-20deg] text-primary/90"
      >
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          />
        </defs>
        <text fill="currentColor" fontSize="12" fontWeight="800" letterSpacing="2">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            SUCCESS BRAND • HAPPY CLIENT • SUCCESS BRAND • HAPPY CLIENT •
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 17L17 7" />
            <path d="M9 7h8v8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ setActiveTab }) {
  const { theme, toggleTheme, setPrimaryColor } = useTheme();
  
  const PRESET_COLORS = [
    { name: 'Yellow', value: '250 204 21', hex: '#facc15' },
    { name: 'Blue', value: '59 130 246', hex: '#3b82f6' },
    { name: 'Green', value: '34 197 94', hex: '#22c55e' },
    { name: 'Red', value: '239 68 68', hex: '#ef4444' },
    { name: 'Purple', value: '168 85 247', hex: '#a855f7' },
  ];

  return (
    <section id="home" className="relative py-0">

      {/* THEME CONTROLS PANEL */}
      <div className="absolute right-4 top-4 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
        <button
          onClick={() => {
            console.log("Toggling theme from", theme);
            toggleTheme();
          }}
          className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-slate-200 transition-all hover:bg-white/20 hover:text-white"
          title="Toggle Theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <div className="h-6 w-[1px] bg-white/20" />
        <div className="flex items-center gap-2">
          {PRESET_COLORS.map((c) => (
            <button
              key={c.name}
              onClick={() => {
                console.log("Setting primary color to:", c.value);
                setPrimaryColor(c.value);
              }}
              className="relative h-6 w-6 rounded-full border-2 border-white/20 transition-transform hover:scale-110 active:scale-95 flex items-center justify-center group"
              style={{ backgroundColor: c.hex }}
              title={c.name}
            >
              <span className="opacity-0 group-focus:opacity-100 group-active:opacity-100 w-2 h-2 bg-white rounded-full transition-opacity"></span>
            </button>
          ))}
        </div>
      </div>

      {/* BG EFFECT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-2xl opacity-40" />
      </div>

      {/* ✅ WIDTH FIXED */}
      <div className="max-w-[1100px] mx-auto px-4 pt-16">

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-sm text-slate-300"
        >
          👋 Hi, I'm<span className="text-primary font-semibold"> Ashish,</span><span>Frontend Developer</span>
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl max-w-[900px]"
        >
          I build fast, high-converting websites{' '}
          <span className="text-primary">for startups & businesses</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 max-w-[700px] text-sm text-slate-300 leading-relaxed"
        >
          A passionate frontend developer dedicated to building end-to-end digital products that are scalable, sustainable, and performance-driven. With expertise in modern frontend technologies and digital marketing practices like SEO and SMO, I focus on creating seamless user experiences while driving visibility, engagement, and real business growth.
        </motion.p>

        {/* TRUST BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <Badge variant="outline">✔ 3+ Years Experience</Badge>
          <Badge variant="outline">✔ React / Angular / Next.js</Badge>
          <Badge variant="outline">✔ 10+ Projects Delivered</Badge>
          <Badge variant="outline">✔ SEO + Performance Optimized</Badge>
        </motion.div>

        {/* BADGE + REVIEWS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-6 flex items-center gap-4 flex-wrap sm:gap-20"
        >

          {/* Floating Badge */}
          <motion.div
            // animate={{ y: [0, -8, 0] }}
            animate={{ rotate: 360 }}
            // transition={{ repeat: Infinity, duration: 3 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="h-[100px] w-[100px] shrink-0"
          >
            <CircularRotatedBadge />
          </motion.div>

          {/* Reviews */}
          <div className="flex items-center gap-4 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-xl hover:scale-105 transition">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="h-9 w-9 rounded-full border-2 border-[#0b1215]"
                />
              ))}
            </div>

            <div className="flex flex-col leading-tight">
              <span className="inline-block w-fit rounded-full bg-primary px-3 py-[2px] text-xs font-bold text-black">
                2K+
              </span>
              <span className="text-xs text-slate-300 mt-1">
                Positive Reviews
              </span>
              <span className="text-[10px] text-primary">
                (4.90 Rating)
              </span>
            </div>
          </div>

        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-6 pb-10"
        >
          <CTA />
        </motion.div>

      </div>
    </section>
  );
}