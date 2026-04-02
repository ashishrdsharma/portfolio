import React from 'react';

/**
 * Professional Reusable Button Component
 * @param {string} as - Element type ('button' or 'a')
 * @param {string} variant - primary | outline | ghost | icon
 * @param {string} size - sm | md | lg
 */
export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const Component = as === "a" ? "a" : "button";
  const baseClass = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  // Sizing
  let sizeClass = '';
  if (variant === 'icon') {
    sizeClass = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-11 w-11';
  } else {
    sizeClass = size === 'sm' 
      ? 'px-4 py-1.5 text-xs min-h-[36px]'
      : size === 'lg' 
        ? 'px-8 py-3 text-base min-h-[48px]' 
        : 'px-6 py-3 text-sm min-h-[44px]'; // matched px-6 py-3 for regular
  }

  // Variants
  const variantClass = 
    variant === 'primary' ? 'bg-primary text-black hover:opacity-90 shadow-[0_10px_20px_rgb(var(--primary)/0.3)]' :
    variant === 'outline' ? 'border border-primary text-primary hover:bg-primary/10' :
    variant === 'ghost'   ? 'bg-white/5 text-white hover:bg-primary/10 hover:text-primary transition' :
    variant === 'icon'    ? 'bg-white/5 text-white rounded-full p-2 hover:bg-primary/10 hover:text-primary transition' : '';

  return (
    <Component className={`${baseClass} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}
