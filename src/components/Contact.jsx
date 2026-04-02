import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiDownload,
  FiSend,
  FiMapPin,
  FiPhone
} from "react-icons/fi";

import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaGithub,
} from 'react-icons/fa6';

import { SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <Card className="p-6 text-center">
        <div className="space-y-5">

          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
            Let's build something great together
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 max-w-[700px] mx-auto text-center text-sm text-slate-300 leading-relaxed"
          >
            A modern, scalable frontend enhances your brand presence and drives real business growth. <br />
            It transforms visitors into customers through seamless, engaging, and high-performance user experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 max-w-[700px] mx-auto text-center text-sm text-slate-300 leading-relaxed"
          >
            I’m active across multiple platforms and typically respond within 24 hours. I can help you with frontend development (React, Angular, Next.js), performance optimization, API integration, and digital marketing strategies including SEO and analytics to grow your product effectively.
          </motion.p>

          {/* 🔥 CONTACT INFO */}
          <div className="flex flex-col items-center gap-3 text-sm text-slate-300max-w-[600px] mx-auto text-left">

            <div className="flex items-center gap-2">
              <FiMapPin className="text-primary" />
              <span>
                A-24, First Floor, Joshi Colony, Mandawali I.P. Ext, India - 110092
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FiPhone className="text-primary" />

              <a href="tel:919151600297" className="hover:text-primary">
                +91 9151600297
              </a>

              <span className="text-slate-500">|</span>

              <a href="tel:919953103691" className="hover:text-primary">
                +91 9953103691
              </a>
            </div>

            <div className="flex items-start gap-2">
              <FiMail className="text-primary mt-[2px]" />
              <a href="mailto:ashishrdsharma@gmail.com" className="hover:text-primary">
                ashishrdsharma@gmail.com
              </a>
            </div>

          </div>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex flex-wrap justify-center gap-4">

            <a href="https://www.linkedin.com/in/ashishrdsharma" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all duration-300">
              <FaLinkedin size={16} />
            </a>

            <a href="https://github.com/ashishrdsharma" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all duration-300">
              <FaGithub size={16} />
            </a>

            <a href="https://instagram.com/ashishrdsharma" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all duration-300">
              <FaInstagram size={16} />
            </a>

            <a href="https://facebook.com/ashishrdsharma" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all duration-300">
              <FaFacebook size={16} />
            </a>

            <a href="https://www.youtube.com/@ashishrdsharma" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all duration-300">
              <FaYoutube size={16} />
            </a>

            <a href="https://x.com/ashishrdsharma" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all duration-300">
              <FaXTwitter size={16} />
            </a>

            {/* ✅ WhatsApp Added */}
            <a href="https://wa.me/919151600297" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all duration-300">
              <SiWhatsapp size={16} />
            </a>

          </div>

        </div>
      </Card>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">

        {/* Hire Me */}
        <Button
          variant="ghost"
          onClick={() => window.location.href = "mailto:ashishrdsharma@gmail.com"}
          className="group flex flex-col items-center justify-center gap-2 p-4 h-auto rounded-2xl border border-white/15"
        >
          <FiSend className="text-lg group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold">Hire Me</span>
        </Button>

        {/* Email */}
        <Button
          as="a"
          variant="ghost"
          href="mailto:ashishrdsharma@gmail.com"
          className="group flex flex-col items-center justify-center gap-2 p-4 h-auto rounded-2xl border border-white/15"
        >
          <FiMail className="text-lg group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold">Email</span>
        </Button>

        {/* WhatsApp */}
        <Button
          as="a"
          variant="ghost"
          href="https://wa.me/919151600297"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center gap-2 p-4 h-auto rounded-2xl border border-white/15"
        >
          <SiWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </Button>

        {/* Download CV */}
        <Button
          as="a"
          variant="ghost"
          href="/Ashish_Resume.pdf"
          download
          className="group flex flex-col items-center justify-center gap-2 p-4 h-auto rounded-2xl border border-white/15"
        >
          <FiDownload className="text-lg group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold">Download CV</span>
        </Button>

      </div>
    </section>
  );
}