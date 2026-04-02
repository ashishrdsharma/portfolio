import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,
  FaFigma, FaSearch, FaDatabase, FaWordpress, FaCode, FaChrome
} from 'react-icons/fa';

import {
  SiTailwindcss, SiSass, SiRedux, SiNextdotjs, SiTypescript,
  SiGoogleanalytics, SiGoogleads, SiSemrush, SiJira, SiPostman,
  SiGithub, SiGitlab
} from 'react-icons/si';

import Card from './ui/Card';
import Button from './ui/Button';

// 🔥 TABS
const tabs = ['ALL', 'FRONTEND', 'STYLING', 'TOOLS', 'DIGITAL MARKETING', 'BACKEND'];

// 🔥 MAIN SKILLS
const skillsData = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB', category: 'FRONTEND' },
  { name: 'Angular', icon: <FaAngular />, color: '#DD0031', category: 'FRONTEND' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#fff', category: 'FRONTEND' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', category: 'FRONTEND' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', category: 'FRONTEND' },

  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', category: 'STYLING' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', category: 'STYLING' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38BDF8', category: 'STYLING' },
  { name: 'SASS', icon: <SiSass />, color: '#CC6699', category: 'STYLING' },

  { name: 'Google Analytics', icon: <SiGoogleanalytics />, color: '#E37400', category: 'DIGITAL MARKETING' },
  { name: 'Google Ads', icon: <SiGoogleads />, color: '#4285F4', category: 'DIGITAL MARKETING' },
  { name: 'SEMrush', icon: <SiSemrush />, color: '#FF642D', category: 'DIGITAL MARKETING' },
  { name: 'SEO / SMO', icon: <FaSearch />, color: '#22c55e', category: 'DIGITAL MARKETING' },

  { name: 'MySQL', icon: <FaDatabase />, color: '#00758F', category: 'BACKEND' },
  { name: 'SQL', icon: <FaDatabase />, color: '#f97316', category: 'BACKEND' },
  { name: 'PL/SQL', icon: <FaDatabase />, color: '#dc2626', category: 'BACKEND' },
  { name: 'WordPress', icon: <FaWordpress />, color: '#21759B', category: 'BACKEND' },
];

// 🔥 ADVANCED TOOLS GROUP
const toolsGrouped = {
  'Dev Tools': [
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub />, color: '#fff' },
    { name: 'GitLab', icon: <SiGitlab />, color: '#FC6D26' },
  ],
  'Editors': [
    { name: 'VS Code', icon: <FaCode />, color: '#22c55e' },
    { name: 'Chrome DevTools', icon: <FaChrome />, color: '#4285F4' },
  ],
  'API & Testing': [
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'JIRA', icon: <SiJira />, color: '#0052CC' },
  ],
  'SEO & Analytics': [
    { name: 'Google Analytics', icon: <SiGoogleanalytics />, color: '#E37400' },
    { name: 'Google Ads', icon: <SiGoogleads />, color: '#4285F4' },
    { name: 'SEMrush', icon: <SiSemrush />, color: '#FF642D' },
    { name: 'SEO / SMO', icon: <FaSearch />, color: '#22c55e' },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredSkills =
    activeTab === 'ALL'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="text-white space-y-3">
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
                layoutId="tab-skills"
                className="absolute inset-0 bg-white/10 rounded-full"
              />
            )}
          </Button>
        ))}
      </div>

      {/* 🔥 SKILLS + TOOLS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-4"
        >

          {/* MAIN SKILLS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, i) => (
              <Card key={i} hover="scale" className="p-4">
                <div
                  className="text-3xl mb-3 flex justify-center"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-sm font-semibold text-white text-center">
                  {skill.name}
                </h3>
              </Card>
            ))}
          </div>

          {/* ADVANCED TOOLS */}
          {activeTab === 'TOOLS' && (
            <div className="space-y-4">
              {Object.entries(toolsGrouped).map(([groupName, tools]) => (
                <div key={groupName}>
                  <h4 className="text-lg font-semibold text-white mb-3">{groupName}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tools.map((tool, i) => (
                      <Card key={i} hover="scale" className="p-4">
                        <div
                          className="text-3xl mb-3 flex justify-center"
                          style={{ color: tool.color }}
                        >
                          {tool.icon}
                        </div>
                        <h3 className="text-sm font-semibold text-white text-center">
                          {tool.name}
                        </h3>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </motion.div>
      </AnimatePresence>

    </section>
  );
}