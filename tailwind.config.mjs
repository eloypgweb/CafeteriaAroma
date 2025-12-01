/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6f4e37',
          dark: '#4a3428',
        },
        secondary: {
          DEFAULT: '#c4a572',
          light: '#d4a574',
        },
        cream: {
          light: '#faf6f1',
          DEFAULT: '#f0e6d2',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'custom': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 15px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in',
        'slideDown': 'slideDown 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
