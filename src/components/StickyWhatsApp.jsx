import React from "react";

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/919151600297?text=Hi%20Ashish,%20I%20need%20a%20website"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-400 transition"
    >
      💬 Chat
    </a>
  );
}