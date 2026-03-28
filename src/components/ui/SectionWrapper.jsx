import React from 'react';

/**
 * SectionWrapper - Consistent section layout with padding and max-width
 * @param {React.ReactNode} children - Section content
 * @param {string} className - Additional Tailwind classes
 * @param {string} id - Section ID for navigation
 */
export default function SectionWrapper({
  children,
  className = '',
  id = '',
}) {
  return (
    <section
      id={id}
      className={`px-4 text-white space-y-6 ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
}
