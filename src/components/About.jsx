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

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// import {
//   FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,
//   FaFigma, FaSearch, FaDatabase, FaWordpress, FaCode, FaChrome
// } from 'react-icons/fa';

// import {
//   SiTailwindcss, SiSass, SiRedux, SiNextdotjs, SiTypescript,
//   SiGoogleanalytics, SiGoogleads, SiSemrush, SiJira, SiPostman,
//   SiGithub, SiGitlab
// } from 'react-icons/si';

// import Card from './ui/Card';

// // 🔥 TABS
// const tabs = ['ALL', 'FRONTEND', 'STYLING', 'TOOLS', 'DIGITAL MARKETING', 'BACKEND'];

// // 🔥 MAIN SKILLS
// const skillsData = [
//   { name: 'React', icon: <FaReact />, color: '#61DAFB', category: 'FRONTEND' },
//   { name: 'Angular', icon: <FaAngular />, color: '#DD0031', category: 'FRONTEND' },
//   { name: 'Next.js', icon: <SiNextdotjs />, color: '#fff', category: 'FRONTEND' },
//   { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', category: 'FRONTEND' },
//   { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', category: 'FRONTEND' },

//   { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', category: 'STYLING' },
//   { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', category: 'STYLING' },
//   { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38BDF8', category: 'STYLING' },
//   { name: 'SASS', icon: <SiSass />, color: '#CC6699', category: 'STYLING' },

//   { name: 'Google Analytics', icon: <SiGoogleanalytics />, color: '#E37400', category: 'DIGITAL MARKETING' },
//   { name: 'Google Ads', icon: <SiGoogleads />, color: '#4285F4', category: 'DIGITAL MARKETING' },
//   { name: 'SEMrush', icon: <SiSemrush />, color: '#FF642D', category: 'DIGITAL MARKETING' },
//   { name: 'SEO / SMO', icon: <FaSearch />, color: '#22c55e', category: 'DIGITAL MARKETING' },

//   { name: 'MySQL', icon: <FaDatabase />, color: '#00758F', category: 'BACKEND' },
//   { name: 'SQL', icon: <FaDatabase />, color: '#f97316', category: 'BACKEND' },
//   { name: 'PL/SQL', icon: <FaDatabase />, color: '#dc2626', category: 'BACKEND' },
//   { name: 'WordPress', icon: <FaWordpress />, color: '#21759B', category: 'BACKEND' },
// ];

// // 🔥 ADVANCED TOOLS GROUP
// const toolsGrouped = {
//   'Dev Tools': [
//     { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
//     { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
//     { name: 'GitHub', icon: <SiGithub />, color: '#fff' },
//     { name: 'GitLab', icon: <SiGitlab />, color: '#FC6D26' },
//   ],
//   'Editors': [
//     { name: 'VS Code', icon: <FaCode />, color: '#22c55e' },
//     { name: 'Chrome DevTools', icon: <FaChrome />, color: '#4285F4' },
//   ],
//   'API & Testing': [
//     { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
//     { name: 'JIRA', icon: <SiJira />, color: '#0052CC' },
//   ],
//   'SEO & Analytics': [
//     { name: 'Google Analytics', icon: <SiGoogleanalytics />, color: '#E37400' },
//     { name: 'Google Ads', icon: <SiGoogleads />, color: '#4285F4' },
//     { name: 'SEMrush', icon: <SiSemrush />, color: '#FF642D' },
//     { name: 'SEO / SMO', icon: <FaSearch />, color: '#22c55e' },
//   ],
// };

// export default function About() {
//   const [activeTab, setActiveTab] = useState('ALL');

//   const filtered =
//     activeTab === 'ALL'
//       ? skillsData
//       : skillsData.filter((s) => s.category === activeTab);

//   return (
//     <section className="text-white space-y-3">
//       {/* 🔥 ABOUT */}
//       <Card className="p-4 md:p-5">
//           <h2 className="text-xl md:text-2xl font-semibold">About</h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mt-2 max-w-[950px] text-sm text-slate-300 leading-relaxed"
//           >
//             Frontend Developer with 3+ years of experience building scalable web applications, SPAs, and eCommerce solutions. Skilled in Angular, React, Next.js, TypeScript, and JavaScript, with strong expertise in API integration, performance optimization, and responsive UI development. Passionate about writing clean, maintainable code and delivering impactful user experiences.
//           </motion.p>
//         </Card>

//         {/* 🔥 SKILLS CARD */}
//         {/* <Card className="overflow-hidden min-h-[280px] p-0">
//           <div className="flex relative bg-black/30">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className="flex-1 py-3 text-xs relative z-10"
//               >
//                 {tab}
//                 {activeTab === tab && (
//                   <motion.div
//                     layoutId="tab"
//                     className="absolute inset-0 bg-white/10 rounded"
//                   />
//                 )}
//               </button>
//             ))}
//           </div>

//           <div className="p-4">
//             {activeTab !== 'TOOLS' && (
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeTab}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4"
//                 >
//                   {filtered.map((skill, i) => (
//                     <div
//                       key={i}
//                       className="group relative w-12 h-12 flex items-center justify-center rounded-lg border border-white/10 bg-black/30 transition hover:scale-110"
//                       style={{ color: skill.color }}
//                     >
//                       <div className="text-xl group-hover:drop-shadow-[0_0_15px_currentColor]">
//                         {skill.icon}
//                       </div>
//                       <div className="absolute -top-8 opacity-0 group-hover:opacity-100 text-xs bg-black px-2 py-1 rounded">
//                         {skill.name}
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </AnimatePresence>
//             )}
//             {activeTab === 'TOOLS' && (
//               <div className="grid md:grid-cols-2 gap-4">
//                 {Object.entries(toolsGrouped).map(([group, tools]) => (
//                   <div key={group}>
//                     <h3 className="text-xs text-slate-400 mb-3">{group}</h3>

//                     <div className="flex flex-wrap gap-3">
//                       {tools.map((tool, i) => (
//                         <div
//                           key={i}
//                           className="group relative w-12 h-12 flex items-center justify-center rounded-lg border border-white/10 bg-black/30 hover:scale-110 transition"
//                           style={{ color: tool.color }}
//                         >
//                           <div className="text-xl group-hover:drop-shadow-[0_0_15px_currentColor]">
//                             {tool.icon}
//                           </div>

//                           <div className="absolute -top-8 opacity-0 group-hover:opacity-100 text-xs bg-black px-2 py-1 rounded">
//                             {tool.name}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//           </div>
//         </Card> */}

//     </section>
//   );
// }

