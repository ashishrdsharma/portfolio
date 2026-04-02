import React from "react";
import Button from "./ui/Button";

export default function CTA() {
  const message = encodeURIComponent(
    "Hi Ashish, I want a website for my business"
  );

  return (
    <section className="w-full max-w-5xl mx-auto px-4">
      <div className="relative rounded-2xl border border-white/10 bg-[#0f171a]/60 p-8 md:p-12 backdrop-blur-xl shadow-2xl">

        <h3 className="text-3xl md:text-5xl font-bold text-white">
          Get Your Website in 7 Days
        </h3>

        <p className="mt-3 text-gray-400 max-w-md">
          Fast, modern & SEO optimized websites for startups & businesses.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          {/* WhatsApp */}
          <Button
            as="a"
            variant="primary"
            href={`https://wa.me/919151600297?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            WhatsApp Now
          </Button>

          {/* Email */}
          <Button
            as="a"
            variant="outline"
            href="mailto:ashishrdsharma@gmail.com"
            className=""
          >
            Email Me
          </Button>

          {/* FIXED BUTTON */}
          <Button
            variant="ghost"
            onClick={() => window.openLeadModal && window.openLeadModal()}
            className="border border-white/10"
          >
            Get Free Audit
          </Button>

        </div>
      </div>
    </section>
  );
}

