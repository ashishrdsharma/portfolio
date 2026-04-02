import React from 'react';

/**
 * Card Component - Simple glass container (no hover effects)
 */
export default function Card({ children, className = '' }) {
  return (
    <div className={`ui-card ${className}`}>
      {children}
    </div>
  );
}
