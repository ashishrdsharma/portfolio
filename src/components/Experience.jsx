import React, { useEffect, useRef } from 'react';
import { FiMapPin, FiBriefcase, FiHome } from 'react-icons/fi';
import {
    FaLinkedin,
    FaInstagram,
    FaGlobe,
    FaFacebook,
    FaYoutube,
    FaXTwitter
} from 'react-icons/fa6';
import Badge from './ui/Badge';

const PEEK = 50;
const NAV_H = 0;

/* 🔥 EXPERIENCE DATA */
const EXPERIENCE = [
    {
        role: 'Freelancer',
        company: 'ARD Web Solution',
        location: 'Azamgarh, India',
        workType: 'WFH',
        workLocation: 'Remote',
        skills: ['React', 'Angular', 'Next.js', 'API Integration', 'Performance Optimization', 'SEO', 'Digital Marketing', 'E-commerce', 'SMO'],
        duration: 'May 2025 – Present',
        desc: 'Leading freelance development of scalable web applications, focusing on performance, maintainability, and integrating digital marketing strategies such as SEO and analytics to deliver real business value.',
        points: [
            'Developing responsive, scalable, and high-performance web applications.',
            'Building reusable and maintainable UI components for efficient development.',
            'Integrating RESTful APIs and managing seamless client–server communication.',
            'Optimizing application performance, load time, and cross-device compatibility.',
            'Implementing SEO best practices and analytics tracking to improve visibility and user engagement.'
        ],
        projects: ['dev.hiringscout.ai', 'free29.com', 'ninetofive.in'],
        logo: '/ard-logo.jpeg',
        socials: {
            linkedin: 'https://linkedin.com/company/ard-web-solution',
            instagram: 'https://instagram.com/ardwebsolution',
            facebook: 'https://facebook.com/ardwebsolution',
            twitter: 'https://x.com/ardwebsolution',
            youtube: 'https://youtube.com/@ardwebsolution',
            website: 'https://ardwebsolution.com'
        }
    },
    {
        role: 'Frontend Developer',
        company: 'Clavis Technologies',
        location: 'Noida, India',
        workType: 'Full-time',
        workLocation: 'Onsite',
        skills: ['Angular', 'TypeScript', 'SCSS', 'Admin Panels', 'API Integration'],
        duration: 'Sept 2021 – Apr 2025',
        desc: 'Developed and maintained enterprise-level applications and admin panels, focusing on scalability, performance, and seamless user experience.',
        points: [
            'Independently developed the Unlimits Admin Panel with scalable architecture.',
            'Built and integrated APIs for the Whiteboard Admin Panel, including key modules.',
            'Designed and implemented UI with API integration for Clavisign.',
            'Contributed to platforms like EllaXestate and 2by2, improving performance and user experience.',
            'Collaborated with cross-functional teams to deliver stable and high-quality solutions.'
        ],
        projects: ['unlimitsdemo.clavis.digital', 'skillinventory.clavis.digital', 'ellaxestates.com'],
        logo: '/logo-clavis.png',
        socials: {
            linkedin: 'https://www.linkedin.com/company/clavis-technologies/',
            instagram: 'https://www.instagram.com/clavis_technologies/',
            facebook: 'https://www.facebook.com/ClavisTech',
            twitter: 'https://x.com/Clavistechno',
            website: 'https://www.clavistechnologies.com/'
        }
    },
    {
        role: 'Software Developer',
        company: 'SKS Ispat and Power Ltd.',
        location: 'Raipur, India',
        workType: 'Full-time',
        workLocation: 'Onsite',
        skills: ['Oracle D2K', 'SQL', 'Reporting', 'Debugging'],
        duration: 'Feb 2017 – Mar 2018',
        desc: 'Developed and maintained Oracle D2K reports and enterprise solutions, focusing on data accuracy, performance, and business requirements.',
        points: [
            'Designed and developed Oracle D2K reports based on business requirements.',
            'Analyzed change requests and implemented modifications for evolving needs.',
            'Ensured data accuracy and optimized report performance.',
            'Collaborated with cross-functional teams for testing and successful delivery.'
        ],
        projects: ['Newton ERP'],
        logo: '/sks-logo.jpg',
        socials: {
            linkedin: 'https://www.linkedin.com/company/sks-ispat-&-power-ltd-/',
            instagram: 'https://www.instagram.com/sksispat01/',
            facebook: 'https://www.facebook.com/people/SKS-Ispat/61577741583646/',
            twitter: 'https://x.com/sksispat01',
            youtube: 'https://www.youtube.com/@SKSIspatandPowerLtd',
            website: 'https://www.sksispat.com/'
        }
    },
    {
        role: 'SEO Analyst',
        company: 'RNF Technologies',
        location: 'Noida, India',
        workType: 'Full-time',
        workLocation: 'Onsite',
        skills: ['SEO', 'SMO', 'GSC', 'Google Analytics', 'Keyword Research', 'Content Optimization', 'Link Building', 'Sumrush', 'Ahrefs'],
        duration: 'May 2016 – Jan 2017',
        desc: 'Executed SEO and SMO strategies to improve online visibility, organic traffic, and overall digital performance.',
        points: [
            'Planned and executed SEO strategies to improve search engine rankings and website visibility.',
            'Conducted keyword research and optimized content for targeted traffic and better ranking.',
            'Monitored website performance using Google Analytics and generated actionable insights.',
            'Managed and optimized social media campaigns to enhance brand engagement and reach.',
            'Collaborated with teams to align digital marketing efforts with business goals.'
        ],
        projects: ['isearchsolution.com', 'giftalove.com'],
        logo: '/logo-rnf.png',
        socials: {
            linkedin: 'https://www.linkedin.com/company/rnf-technologies/',
            instagram: 'https://www.instagram.com/rnftechnologies/',
            facebook: 'https://www.facebook.com/RnFTechnologies',
            twitter: 'https://x.com/rnftechnologies',
            youtube: 'https://www.youtube.com/channel/UCSdzIIIHIPdAUEOio5YHnFQ',
            website: 'https://rnftechnologies.com/'
        }
    },
    {
        role: 'Intern - Software Developer',
        company: 'Nippon Data Systems',
        location: 'Noida, India',
        workType: 'Full-time',
        workLocation: 'Onsite',
        skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'SEO Optimization', 'SMO', 'Google Analytics', 'Keyword Research'],
        duration: 'May 2016 – Jan 2017',
        desc: 'Worked on both web development and digital marketing initiatives, focusing on building optimized websites and executing SEO/SMO strategies to improve performance and online visibility.',
        points: [
            'Developed and maintained responsive websites with a focus on performance and user experience.',
            'Planned and executed SEO strategies to improve search engine rankings and organic traffic.',
            'Conducted keyword research and implemented on-page optimization techniques.',
            'Tracked website performance using Google Analytics and generated actionable insights.',
            'Managed social media campaigns to increase engagement and brand visibility.'
        ],
        projects: ['isearchsolution.com', 'giftalove.com'],
        logo: '/nippon-logo.png',
        socials: {
            linkedin: 'https://www.linkedin.com/company/nippon-data-systems/',
            instagram: 'https://www.instagram.com/nippondata/',
            facebook: 'https://www.facebook.com/nippondatasystems/',
            twitter: 'https://x.com/NipponData',
            youtube: 'https://www.youtube.com/@nippondatasystems',
            website: 'https://nippondata.com/'
        }
    },
];

export default function Experience() {
    const wrapRefs = useRef([]);
    const innerRefs = useRef([]);

    useEffect(() => {
        const setHeights = () => {
            wrapRefs.current.forEach((wrap, idx) => {
                const inner = innerRefs.current[idx];
                if (!wrap || !inner) return;
                wrap.style.height = `${inner.offsetHeight + 20}px`;
            });
        };

        requestAnimationFrame(setHeights);
        window.addEventListener('resize', setHeights);
        return () => window.removeEventListener('resize', setHeights);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            wrapRefs.current.forEach((wrap, idx) => {
                const inner = innerRefs.current[idx];
                if (!wrap || !inner || idx === EXPERIENCE.length - 1) return;

                const stickyTop = NAV_H + idx * PEEK;
                const rect = wrap.getBoundingClientRect();
                const buried = stickyTop - rect.top;

                if (buried > 0) {
                    const t = Math.min(buried / (inner.offsetHeight * 0.4), 1);
                    inner.style.opacity = `${1 - t * 0.6}`;
                    inner.style.transform = `scale(${1 - t * 0.04})`;
                } else {
                    inner.style.opacity = '1';
                    inner.style.transform = 'scale(1)';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="experience" className="text-white space-y-3">
            <div className="max-w-5xl mx-auto relative">
                {EXPERIENCE.map((exp, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (wrapRefs.current[idx] = el)}
                        style={{
                            position: 'sticky',
                            top: `${NAV_H + idx * PEEK}px`,
                            zIndex: idx + 1,
                        }}
                    >
                        <div
                            ref={(el) => (innerRefs.current[idx] = el)}
                            className="ui-card overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-4 border-b border-white/10">

                                {/* LEFT */}
                                <div className="flex flex-col gap-2 min-w-0">
                                    <h3 className="text-base md:text-lg font-semibold text-white">
                                        {exp.role}
                                    </h3>

                                    {/* BADGES */}
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <span className="flex items-center gap-1 px-3 py-1 rounded-md bg-white/5 text-slate-300">
                                            <FiBriefcase className="text-[13px]" />
                                            {exp.workType}
                                        </span>

                                        <span
                                            className={`flex items-center gap-1 px-3 py-1 rounded-md
          ${exp.workLocation === 'Remote' && 'bg-green-500/10 text-green-400'}
          ${exp.workLocation === 'Onsite' && 'bg-blue-500/10 text-blue-400'}
          ${exp.workLocation === 'Hybrid' && 'bg-purple-500/10 text-purple-400'}
        `}
                                        >
                                            <FiHome className="text-[13px]" />
                                            {exp.workLocation}
                                        </span>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="flex flex-row md:flex-col md:items-end items-center justify-between gap-2 w-full md:w-auto">
                                    <span className="text-xs text-slate-400 whitespace-nowrap">
                                        {exp.duration}
                                    </span>

                                    <span className="flex items-center gap-1 px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs whitespace-nowrap">
                                        <FiMapPin className="text-[13px]" />
                                        {exp.location}
                                    </span>
                                </div>

                            </div>

                            {/* META INFO */}
                            <div className="px-6 pt-4">
                                <div className="flex items-start gap-4">
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-14 h-14 rounded-full object-contain"
                                    />
                                    <div className="flex flex-col w-full">
                                        <div className="flex items-center justify-between w-full">
                                            <h3 className="text-sm md:text-base font-semibold text-white">
                                                {exp.company}
                                            </h3>
                                            <div className="flex items-center gap-3 ml-4 flex-wrap">

                                                {exp.socials?.linkedin && (
                                                    <a href={exp.socials.linkedin} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-blue-400 transition">
                                                        <FaLinkedin size={20} />
                                                    </a>
                                                )}

                                                {exp.socials?.instagram && (
                                                    <a href={exp.socials.instagram} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-pink-400 transition">
                                                        <FaInstagram size={20} />
                                                    </a>
                                                )}

                                                {exp.socials?.facebook && (
                                                    <a href={exp.socials.facebook} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-blue-500 transition">
                                                        <FaFacebook size={20} />
                                                    </a>
                                                )}

                                                {exp.socials?.youtube && (
                                                    <a href={exp.socials.youtube} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-red-500 transition">
                                                        <FaYoutube size={20} />
                                                    </a>
                                                )}

                                                {exp.socials?.twitter && (
                                                    <a href={exp.socials.twitter} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-white transition">
                                                        <FaXTwitter size={20} />
                                                    </a>
                                                )}

                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between w-full text-xs text-slate-400 mt-1">
                                            <span className="flex items-center gap-1">
                                                <FiMapPin className="text-[12px]" />
                                                {exp.location}
                                            </span>
                                            {exp.socials?.website && (
                                                <a
                                                    href={exp.socials.website}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-1 hover:text-green-400 transition hover:scale-105"
                                                >
                                                    {/* <FaGlobe className="text-[12px]" /> */}
                                                    {/* {exp.socials.website.replace(/^https?:\/\//, '')} */}
                                                    Visit Website
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BODY */}
                            <div className="px-6 py-6">
                                <p className="text-sm text-slate-300 mb-4">{exp.desc}</p>
                                <ul className="space-y-2 mb-4">
                                    {exp.points.map((p, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-slate-400">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-1 flex-shrink-0" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {exp.skills.map((skill, i) => (
                                        <Badge key={i} variant="accent" size="sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {exp.projects.map((link, i) => {
                                        const url = link.startsWith('http') ? link : `https://${link}`;
                                        return (
                                            <a
                                                key={i}
                                                href={url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                                            >
                                                {link}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
