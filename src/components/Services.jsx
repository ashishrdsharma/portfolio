import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaAngular, FaSearch, FaBug, FaLaptopCode } from 'react-icons/fa';
import CTA from './CTA';
import Card from './ui/Card';
import Button from './ui/Button';

const tabs = ['ALL', 'FRONTEND', 'FREELANCING', 'DIGITAL MARKETING'];

const services = [
  {
    icon: <FaReact />,
    title: 'Modern Web Applications',
    description: 'Build scalable and high-performance web apps using React, Angular, and Next.js.',
    category: 'FRONTEND',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Landing Page Development',
    description: 'Conversion-focused landing pages to boost leads and engagement.',
    category: 'FRONTEND',
  },
  {
    icon: <FaAngular />,
    title: 'Admin Panel / Dashboard',
    description: 'Custom dashboards with smooth UX and data visualization.',
    category: 'FRONTEND',
  },

  {
    icon: <FaBug />,
    title: 'Bug Fixing & Optimization',
    description: 'Fix bugs and improve performance in React & Angular apps.',
    category: 'FREELANCING',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, and performance monitoring.',
    category: 'FREELANCING',
  },
  {
    icon: <FaReact />,
    title: 'API Integration',
    description: 'Seamless REST API and third-party integrations.',
    category: 'FREELANCING',
  },

  {
    icon: <FaSearch />,
    title: 'SEO Optimization',
    description: 'Improve rankings and increase organic traffic.',
    category: 'DIGITAL MARKETING',
  },
  {
    icon: <FaSearch />,
    title: 'Analytics & Audit',
    description: 'Track performance and optimize conversions.',
    category: 'DIGITAL MARKETING',
  },
  {
    icon: <FaSearch />,
    title: 'Keyword Strategy',
    description: 'Target the right audience with smart keyword planning.',
    category: 'DIGITAL MARKETING',
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filtered =
    activeTab === 'ALL'
      ? services
      : services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="text-white space-y-3">
      {/* 🔥 TABS */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide bg-white/5 rounded-xl p-1 sm:gap-0 sm:overflow-hidden sm:p-0">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "primary" : "ghost"}
            onClick={() => setActiveTab(tab)}
            className="min-w-max px-4 py-2.5 text-xs sm:text-sm flex-1 sm:flex-1 relative z-10 min-h-[40px] border-transparent"
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-service"
                className="absolute inset-0 bg-white/10 rounded-full"
              />
            )}
          </Button>
        ))}
      </div>

      {/* 🔥 SERVICES + CTA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-4"
        >

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <Card key={i} hover="both" className="p-4">
                <div className="text-3xl mb-3 text-primary">
                  {item.icon}
                </div>

                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* 🔥 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CTA />
          </motion.div>

        </motion.div>
      </AnimatePresence>

    </section>
  );
}