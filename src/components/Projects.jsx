import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaAngular, FaMobile, FaDesktop, FaSearch } from 'react-icons/fa';
import CTA from './CTA';
import Card from './ui/Card';

const tabs = ['ALL', 'WEB', 'MOBILE', 'FULLSTACK', 'DIGITAL MARKETING'];

const projects = [
  {
    icon: <FaReact />,
    title: 'SaaS Marketing Platform',
    stack: 'React, Tailwind, Node',
    description: 'Modern UI for marketing campaign management.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    category: 'WEB',
  },
  {
    icon: <FaAngular />,
    title: 'Analytics Dashboard',
    stack: 'Angular, NgRx, Chart.js',
    description: 'Data-heavy dashboard with performance tuning.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    category: 'WEB',
  },
  {
    icon: <FaDesktop />,
    title: 'E-commerce UI Redesign',
    stack: 'React, Next.js, Stripe',
    description: 'Mobile-first shopping experience with quick checkout.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    category: 'FULLSTACK',
  },
  {
    icon: <FaMobile />,
    title: 'Support Ticket System',
    stack: 'Angular, Firebase, Tailwind',
    description: 'Real-time support dashboard and ticket tracking.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    category: 'MOBILE',
  },
  {
    icon: <FaSearch />,
    title: 'SEO Campaign Dashboard',
    stack: 'React, Google Analytics, SEMrush',
    description: 'Comprehensive SEO tracking and campaign management platform.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    category: 'DIGITAL MARKETING',
  },
  {
    icon: <FaSearch />,
    title: 'Social Media Analytics Tool',
    stack: 'Vue.js, Social APIs, Chart.js',
    description: 'Multi-platform social media performance analytics and reporting.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80',
    category: 'DIGITAL MARKETING',
  },
  {
    icon: <FaSearch />,
    title: 'PPC Campaign Manager',
    stack: 'React, Google Ads API, Node.js',
    description: 'Automated PPC campaign optimization and budget management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    category: 'DIGITAL MARKETING',
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filtered =
    activeTab === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="text-white space-y-3">
      {/* 🔥 TABS */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide bg-white/5 rounded-xl p-1 sm:gap-0 sm:overflow-hidden sm:p-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="min-w-max px-4 py-2.5 text-xs sm:text-sm flex-1 sm:flex-1 relative z-10 min-h-[40px]"
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-project"
                className="absolute inset-0 bg-white/10 rounded"
              />
            )}
          </button>
        ))}
      </div>

      {/* 🔥 PROJECTS + CTA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-4"
        >

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <Card key={i} hover="both" className="p-4">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    View Project
                  </span>
                </div>

                <div className="text-2xl mb-2 text-yellow-400">
                  {item.icon}
                </div>

                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  {item.stack}
                </p>

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
