/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#f59e0b',
        success: '#10b981',
        danger: '#ef4444',
        dark: '#1e293b',
        light: '#f8fafc'
      },
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem'
      }
    },
  },
  plugins: [],
}