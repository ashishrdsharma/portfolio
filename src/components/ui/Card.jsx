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



// import React from 'react';

// /**
//  * Card Component - Reusable container with glass effect
//  * @param {React.ReactNode} children - Card content
//  * @param {string} className - Additional Tailwind classes
//  * @param {string} hover - Hover effect type: 'glow', 'scale', 'both' (default)
//  * @param {boolean} flat - Remove hover effects
//  */
// export default function Card({
//   children,
//   className = '',
//   hover = 'both',
//   flat = false,
// }) {
//   const hoverClass =
//     !flat && hover !== 'none'
//       ? hover === 'glow'
//         ? 'ui-card-glow'
//         : hover === 'scale'
//           ? 'ui-card-scale'
//           : 'ui-card-hover'
//       : '';

//   return (
//     <div className={`ui-card ${hoverClass} ${className}`}>
//       {children}
//     </div>
//   );
// }
