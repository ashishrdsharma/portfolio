import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import React, { useState } from 'react';

export default function App() {
  const tabs = [
    { key: 'home', label: 'Home', icon: 'home' },
    { key: 'about', label: 'About', icon: 'about' },
    { key: 'skills', label: 'Skills', icon: 'skills' },
    { key: 'education', label: 'Education', icon: 'education' },
    { key: 'experience', label: 'Experience', icon: 'experience' },
    { key: 'services', label: 'Services', icon: 'services' },
    { key: 'projects', label: 'Projects', icon: 'projects' },
    { key: 'contact', label: 'Contact', icon: 'contact' },
  ];

  const [activeTab, setActiveTab] = useState('home');
  return (
    <div className="relative h-full flex flex-col overflow-hidden text-white font-sans">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(36,120,92,0.35),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(6,20,23,0.9),transparent_50%),linear-gradient(180deg,#061012_0%,#07161a_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_10px)] opacity-30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.12)_0%,transparent_55%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.08)_0%,transparent_45%)]" />

      {/* MAIN LAYOUT */}
      <div className="flex w-full h-full overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          items={tabs}
        />

        {/* Profile Card */}
        <div className="hidden lg:block w-[280px] flex-shrink-0 p-3 pt-3 overflow-hidden">
          <ProfileCard />
        </div>

        {/* Content */}
        <main className="flex-1 overflow-hidden pb-16 sm:pb-0">
          <div className="h-full px-4 py-5 overflow-hidden sm:px-6">
            <div className="max-w-5xl h-full overflow-y-auto scrollbar-hide">
              {activeTab === 'home' && <Hero />}
              {activeTab === 'services' && <Services />}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'about' && <About />}
              {activeTab === 'skills' && <Skills />}
              {activeTab === 'education' && <Education />}
              {activeTab === 'experience' && <Experience />}
              {activeTab === 'contact' && <Contact />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}