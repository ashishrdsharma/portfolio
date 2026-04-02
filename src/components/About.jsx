import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';
import CTA from './CTA';

export default function About() {
  return (
    <section className="text-white space-y-4">

      {/* 🔥 ABOUT CARD */}
      <Card className="p-4 md:p-5">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl font-semibold"
        >
          About
        </motion.h2>

        {/* Content */}
        <div className="mt-3 max-w-[950px] text-sm text-slate-300 leading-relaxed space-y-4">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Frontend Developer with 3+ years of experience building scalable web applications, single-page applications (SPAs), and modern eCommerce solutions. Proficient in Angular, React, and Next.js, with strong expertise in TypeScript and JavaScript. Skilled in developing responsive, high-performance user interfaces, integrating RESTful APIs, and optimizing applications for speed and scalability.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Alongside frontend development, I have a strong understanding of digital marketing concepts including SEO, performance analytics, and conversion-focused design. This allows me to build applications that are not only technically strong but also aligned with business growth and user engagement.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I have hands-on experience working in collaborative environments and contributing to end-to-end product development—from requirement analysis to deployment. I focus on writing clean, maintainable code and following modern development practices.
          </motion.p>

        </div>

      </Card>

      {/* ✅ CTA OUTSIDE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-2"
      >
        <CTA />
      </motion.div>

    </section>
  );
}
