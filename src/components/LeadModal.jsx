import React, { useState, useEffect } from "react";

export default function LeadModal() {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // expose global open function safely
  useEffect(() => {
    window.openLeadModal = () => setIsOpen(true);

    return () => {
      delete window.openLeadModal;
    };
  }, []);

  const handleSubmit = () => {
    if (!email) {
      console.log("Please enter email");
      return;
    }

    // 🔥 Replace this with EmailJS / API later
    console.log("Lead captured:", email);

    setEmail("");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-[#0f171a] p-6 rounded-xl w-full max-w-md border border-white/10 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-white">
          Get Free Website Audit
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Enter your email and I’ll send you improvement suggestions.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="mt-4 w-full p-3 rounded bg-black/40 border border-white/10 text-white outline-none focus:border-yellow-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="mt-4 flex gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-300 transition"
          >
            Submit
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 py-2 border border-white/20 text-white rounded hover:border-yellow-400 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}