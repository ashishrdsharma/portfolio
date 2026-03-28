import React from 'react';

/**
 * Button Component - Primary and secondary button styles
 * @param {React.ReactNode} children - Button content
 * @param {string} variant - Button style: 'primary', 'secondary' (default)
 * @param {string} size - Button size: 'sm', 'md' (default), 'lg'
 * @param {string} className - Additional Tailwind classes
 * @param {...} props - Native button props
 */
export default function Button({
  children,
  variant = 'secondary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseClass =
    'rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClass =
    size === 'sm'
      ? 'px-4 py-1.5 text-xs min-h-[36px]'
      : size === 'lg'
        ? 'px-8 py-3 text-base min-h-[48px]'
        : 'px-6 py-2.5 text-sm min-h-[44px]';

  const variantClass =
    variant === 'primary'
      ? 'bg-yellow-400 text-black hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 active:scale-95'
      : 'border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 active:scale-95';

  return (
    <button className={`${baseClass} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
