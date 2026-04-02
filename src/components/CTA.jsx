import React from "react";

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
          <a
            href={`https://wa.me/919151600297?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            WhatsApp Now
          </a>

          {/* Email */}
          <a
            href="mailto:ashishrdsharma@gmail.com"
            className="px-6 py-3 rounded-lg border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            Email Me
          </a>

          {/* FIXED BUTTON */}
          <button
            onClick={() => window.openLeadModal && window.openLeadModal()}
            className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
          >
            Get Free Audit
          </button>

        </div>
      </div>
    </section>
  );
}



// import React from 'react';
// import Card from './ui/Card';

// export default function CTA() {
//   return (
//     <div className="group relative w-full max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#0f171a]/60 p-8 md:p-12 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-yellow-400/20 hover:scale-[1.01]">
      
//       <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_55%)]" />

//       <div className="flex items-center justify-between gap-6">

//         <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
//           Lets Work Together
//         </h3>

//         <button
//           type="button"
//           className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-[#0b1215]/60 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-white/5"
//         >
//           <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M21 12H7" />
//             <path d="M14 5l7 7-7 7" />
//           </svg>
//         </button>

//       </div>
//     </div>
//   );
// }