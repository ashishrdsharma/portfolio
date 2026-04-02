/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121A1D',
        card: '#1A2528',
        accent: '#3B82F6',
        primary: 'rgb(var(--primary) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 8px 30px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
};
