import React from 'react';

/**
 * Badge Component - Small pill-shaped label
 * @param {React.ReactNode} children - Badge content
 * @param {string} variant - Badge style: 'default', 'accent', 'outline' (default)
 * @param {string} size - Badge size: 'sm', 'md' (default)
 * @param {string} className - Additional Tailwind classes
 */
export default function Badge({
  children,
  variant = 'outline',
  size = 'md',
  className = '',
}) {
  const baseClass = 'ui-badge';
  
  const sizeClass = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-xs';
  
  const variantClass =
    variant === 'accent'
      ? 'bg-yellow-400/20 border-yellow-400/50 text-yellow-300'
      : variant === 'default'
        ? 'bg-white/10 border-white/20 text-slate-200'
        : 'bg-white/5 border-white/10 text-slate-300';

  return (
    <span className={`${baseClass} ${sizeClass} ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
