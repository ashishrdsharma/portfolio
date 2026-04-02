import React from 'react';
import { motion } from 'framer-motion';
import CTA from './CTA';
import Badge from './ui/Badge';

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
        className="absolute inset-0 h-full w-full rotate-[-20deg] text-yellow-400/90"
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
            className="h-4 w-4 text-yellow-400"
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
  return (
    <section id="home" className="relative py-0">

      {/* BG EFFECT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-2xl opacity-40" />
      </div>

      {/* ✅ WIDTH FIXED */}
      <div className="max-w-[1100px] mx-auto px-4">

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-sm text-slate-300"
        >
          👋 Hi, I'm<span className="text-yellow-400 font-semibold"> Ashish,</span><span>Frontend Developer</span>
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl max-w-[900px]"
        >
          I build fast, high-converting websites{' '}
          <span className="text-yellow-400">for startups & businesses</span>
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

        {/* CTA BUTTONS */}
        {/* <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-8 flex items-center gap-4 flex-wrap"
        >
          <button
            onClick={() => setActiveTab && setActiveTab('contact')}
            className="px-6 py-3 rounded-full bg-yellow-400 text-black font-bold text-sm hover:scale-105 transition shadow-lg"
          >
            Hire Me 🚀
          </button>

          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </motion.div> */}

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
              <span className="inline-block w-fit rounded-full bg-yellow-400 px-3 py-[2px] text-xs font-bold text-black">
                2K+
              </span>
              <span className="text-xs text-slate-300 mt-1">
                Positive Reviews
              </span>
              <span className="text-[10px] text-yellow-400">
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