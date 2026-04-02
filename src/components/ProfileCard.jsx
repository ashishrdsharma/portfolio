import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

import {
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiDribbble,
  FiGithub,
  FiCheckCircle
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

export default function ProfileCard() {

  const profile = {
    name: "Ashish Sharma",
    role: "Frontend Developer",
    experience: "3+ Years Experience",
    description:
      "Frontend Developer with 3+ years of experience in Angular, React, and Next.js. Skilled in building scalable web apps, APIs, and high-performance UI.",
    image:
      "/profile-img.jpeg",

    // ✅ Social with links
    social: [
      { label: 'IN', link: 'https://www.linkedin.com/in/ashishrdsharma', active: true },
      { label: 'GH', link: 'https://github.com/ashishrdsharma', active: false },
      { label: 'WA', link: 'https://wa.me/919151600297', active: false },
      { label: 'X', link: 'https://twitter.com/ashishrdsharma', active: false },
      { label: 'IG', link: 'https://instagram.com/ashishrdsharma', active: false },
      { label: 'FB', link: 'https://facebook.com/ashishrdsharma', active: false },
      // { label: 'DR', link: 'https://dribbble.com/', active: false },
    ],
  };

  // ✅ ICON MAPPING
  function getIcon(label) {
    switch (label) {
      case "IN":
        return FiLinkedin;
      case "GH":
        return FiGithub;
      case "WA":
        return FaWhatsapp;
      case "X":
        return FiTwitter;
      case "IG":
        return FiInstagram;
      case "FB":
        return FiFacebook;
      case "DR":
        return FiDribbble;
      default:
        return FiLinkedin;
    }
  }

  const [firstName, lastName] = profile.name.split(" ");

  return (
    <Card className="h-[calc(100vh-32px)] w-full max-w-[340px] overflow-y-auto p-3 pt-2 text-center">

      {/* Image */}
      <div className="flex justify-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <h2 className="text-2xl font-extrabold text-white">
          {firstName}{" "}
          <span className="text-primary">{lastName}</span>
        </h2>

        <FiCheckCircle className="h-5 w-5 text-blue-400 animate-pulse" />
      </div>

      {/* Role */}
      <div className="mt-1">
        <span className="inline-block rounded-full bg-primary/20 px-4 py-1 text-xs font-semibold text-primary border border-primary/30">
          {profile.role}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-slate-300 pt-1 px-2">
        {profile.description}
      </p>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 mt-3 flex-wrap">
        {profile.social.map(({ label, link, active }) => {
          const Icon = getIcon(label);
          return (
            <Button
              as="a"
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant={active ? "primary" : "ghost"}
              className={`!h-10 !w-10 !p-0 ${active ? 'border-primary' : 'border border-white/10'}`}
            >
              <Icon className="h-4 w-4" />
            </Button>
          );
        })}
      </div>

      <Button
        as="a"
        variant="primary"
        href="/Ashish_Resume.pdf"
        download
        className="mt-4 mb-8 w-full uppercase tracking-wide hover:scale-105 shadow-lg shadow-primary/30"
      >
        DOWNLOAD CV
      </Button>
    </Card>
  );
}