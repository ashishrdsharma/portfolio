import React, { useMemo } from 'react';
import {
  FiHome,
  FiUser,
  FiSettings,
  FiGrid,
  FiPhone,
  FiBriefcase,
} from 'react-icons/fi';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

export default function Sidebar({ activeTab, onChangeTab, items }) {

  const defaultItems = [
    { tab: 'home', label: 'Home', Icon: FiHome },
    { tab: 'about', label: 'About', Icon: FiUser },
    { tab: 'skills', label: 'Skills', Icon: FaCode },
    { tab: 'education', label: 'Education', Icon: FaGraduationCap },
    { tab: 'experience', label: 'Experience', Icon: FiBriefcase },
    { tab: 'services', label: 'Services', Icon: FiSettings },
    { tab: 'projects', label: 'Projects', Icon: FiGrid },
    { tab: 'contact', label: 'Contact', Icon: FiPhone },
  ];

  const iconLookup = {
    home: FiHome,
    about: FiUser,
    skills: FaCode,
    education: FaGraduationCap,
    experience: FiBriefcase,
    services: FiSettings,
    projects: FiGrid,
    contact: FiPhone,
  };

  const sidebarItems = useMemo(() => {
    if (!items) return defaultItems;
    return items.map((item) => ({
      tab: item.key,
      label: item.label,
      Icon: item.Icon ?? iconLookup[item.key],
    }));
  }, [items]);

  return (
    <aside className="fixed bottom-0 left-0 right-0 z-20 flex w-full bg-slate-900/95 backdrop-blur-xl border-t border-white/10 sm:sticky sm:top-4 sm:z-20 sm:flex sm:w-full sm:max-w-[80px] sm:flex-col sm:gap-4 sm:p-4 sm:bg-transparent sm:border-0 lg:bg-transparent">
      <nav className="flex w-full justify-around sm:mt-2 sm:flex sm:flex-col sm:gap-4">
        {sidebarItems.map(({ tab, label, Icon }) => {
          const isActive = activeTab === tab;
          return (
            <div key={tab} className="relative flex items-center justify-center group">
              <button
                type="button"
                onClick={() => onChangeTab(tab)}
                className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'border-yellow-400 bg-yellow-400 text-slate-900 shadow-[0_8px_20px_rgba(250,204,21,0.35)]'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={20} />
              </button>

              {/* Tooltip - hidden on mobile */}
              <span className="pointer-events-none absolute left-full ml-3 hidden rounded-xl border border-yellow-300 bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg opacity-0 group-hover:opacity-100 md:inline-flex transition">
                {label}
              </span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}