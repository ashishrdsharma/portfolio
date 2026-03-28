import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';
import Button from './ui/Button';
import {
    FiLinkedin,
    FiFacebook,
    FiInstagram,
    FiYoutube,
    FiTwitter
} from "react-icons/fi";

export default function Education() {
    return (
        <section className="text-white space-y-4">
            {/* 🔥 MAIN EDUCATION CARD */}
            <Card className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                {/* HEADER */}
                <div className="px-5 py-3 flex justify-between items-start gap-4 flex-wrap border-b border-white/10">
                    <div>
                        <h2 className="text-base md:text-lg font-semibold text-white leading-tight">
                            Veer Bahadur Singh Purvanchal University
                        </h2>
                        <p className="text-sm md:text-base font-medium text-yellow-400 mt-1">
                            Bachelor of Computer Application (BCA)
                        </p>
                    </div>
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                        2011 - 2014
                    </span>
                </div>

                {/* BODY */}
                <div className="p-4 flex flex-col md:flex-row gap-5">
                    {/* LOGO */}
                    <div className="flex justify-center md:justify-start">
                        <div className="w-28 h-28 rounded-full bg-white p-2 flex items-center justify-center shadow-lg">
                            <img
                                src="/vbspu-logo.jpg"
                                alt="VBSPU Logo"
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 space-y-3">

                        {/* DESCRIPTION */}
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Completed Bachelor of Computer Applications with a strong foundation in software development,
                            database management, and web technologies. Gained practical exposure to real-world problem solving
                            and application development.
                        </p>

                        {/* POINTS */}
                        <ul className="text-sm text-slate-300 space-y-2 leading-relaxed">
                            <li>⚡ Studied core subjects: Data Structures, DBMS, Operating Systems, Algorithms.</li>
                            <li>⚡ Built strong foundation in programming, logic building, and web development.</li>
                            <li>⚡ Worked on academic projects focused on real-world applications.</li>
                            {/* <li>⚡ Developed interest in frontend development and UI/UX design.</li> */}
                        </ul>

                        {/* ACTIONS */}
                        <div className="pt-3 flex items-center justify-between gap-4 flex-wrap">

                            {/* BUTTON */}
                            <a
                                href="https://www.vbspu.ac.in/en"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="primary" size="sm">
                                    Visit Website
                                </Button>
                            </a>

                            {/* SOCIAL ICONS */}
                            <div className="flex items-center gap-3 flex-wrap">

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/Vbspuofficial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition"
                                >
                                    <FiFacebook size={16} />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/company/veer-bahadur-singh-purvanchal-university-jaunpur-official/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition"
                                >
                                    <FiLinkedin size={16} />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/vbspu.jaunpur/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition"
                                >
                                    <FiInstagram size={16} />
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://www.youtube.com/c/VBSPurvanchalUniversityJaunpurUttarPradesh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition"
                                >
                                    <FiYoutube size={16} />
                                </a>

                                {/* X (Twitter) */}
                                <a
                                    href="https://x.com/vbspu_official"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition"
                                >
                                    <FiTwitter size={16} />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* 🔥 CERTIFICATIONS (REALISTIC FOR YOUR PROFILE) */}
            <div className="grid md:grid-cols-3 gap-3">
                {/* ORACLE */}
                <motion.div whileHover={{ y: -5 }}>
                    <Card className="overflow-hidden p-0 border border-white/10 bg-white/5">
                        <div className="bg-yellow-400/20 flex items-center justify-center h-20">
                            <span className="text-yellow-400 font-bold">ORACLE</span>
                        </div>
                        <div className="p-3 text-center">
                            <h4 className="text-sm font-semibold">Oracle Certification</h4>
                            <p className="text-xs text-slate-400 mt-1">
                                Oracle D2K, Forms & Reports
                            </p>
                        </div>
                    </Card>
                </motion.div>

                {/* ADCA */}
                <motion.div whileHover={{ y: -5 }}>
                    <Card className="overflow-hidden p-0 border border-white/10 bg-white/5">
                        <div className="bg-blue-400/20 flex items-center justify-center h-20">
                            <span className="text-blue-400 font-bold">ADCA</span>
                        </div>
                        <div className="p-3 text-center">
                            <h4 className="text-sm font-semibold">ADCA Certification</h4>
                            <p className="text-xs text-slate-400 mt-1">
                                HTML, CSS, JavaScript Basics
                            </p>
                        </div>
                    </Card>
                </motion.div>

                {/* DIGITAL MARKETING */}
                <motion.div whileHover={{ y: -5 }}>
                    <Card className="overflow-hidden p-0 border border-white/10 bg-white/5">
                        <div className="bg-green-400/20 flex items-center justify-center h-20">
                            <span className="text-green-400 font-bold">SEO</span>
                        </div>
                        <div className="p-3 text-center">
                            <h4 className="text-sm font-semibold">Digital Marketing</h4>
                            <p className="text-xs text-slate-400 mt-1">
                                SEO, SMO & Analytics
                            </p>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}