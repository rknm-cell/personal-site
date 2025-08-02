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
        // Isabelline color palette
        isabelline: {
          100: '#34342a',
          200: '#676754',
          300: '#989881',
          400: '#c2c2b5',
          500: '#edede9',
          600: '#f0f0ed',
          700: '#f4f4f2',
          800: '#f8f8f6',
          900: '#fbfbfb',
          DEFAULT: '#edede9',
        },
        // Timberwolf color palette
        timberwolf: {
          100: '#312921',
          200: '#625241',
          300: '#937a62',
          400: '#b6a391',
          500: '#d6ccc2',
          600: '#ded6ce',
          700: '#e7e0da',
          800: '#efebe7',
          900: '#f7f5f3',
          DEFAULT: '#d6ccc2',
        },
        // Linen color palette
        linen: {
          100: '#473017',
          200: '#8e5f2e',
          300: '#c78f52',
          400: '#debd99',
          500: '#f5ebe0',
          600: '#f7efe6',
          700: '#f9f3ed',
          800: '#fbf7f3',
          900: '#fdfbf9',
          DEFAULT: '#f5ebe0',
        },
        // Champagne pink color palette
        'champagne-pink': {
          100: '#38291e',
          200: '#70523b',
          300: '#a87b59',
          400: '#c5a891',
          500: '#e3d5ca',
          600: '#e8ddd4',
          700: '#eee6df',
          800: '#f4eeea',
          900: '#f9f7f4',
          DEFAULT: '#e3d5ca',
        },
        // Pale dogwood color palette
        'pale-dogwood': {
          100: '#33241b',
          200: '#664735',
          300: '#986b50',
          400: '#ba937c',
          500: '#d5bdaf',
          600: '#ddcabf',
          700: '#e6d7cf',
          800: '#eee4df',
          900: '#f7f2ef',
          DEFAULT: '#d5bdaf',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'gentle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'warm': '0 10px 25px -3px rgba(213, 189, 175, 0.1), 0 4px 6px -2px rgba(213, 189, 175, 0.05)',
      },
    },
  },
  plugins: [],
}; 