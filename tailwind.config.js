/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Digital Moss Color System
        'moss-ink': {
          DEFAULT: '#17251F',
          50: '#f4f6f5',
          100: '#e4e8e5',
          200: '#cbd4cd',
          300: '#a6b6a9',
          400: '#7a937f',
          500: '#58735e',
          600: '#435c49',
          700: '#35483a',
          800: '#2c3b30',
          900: '#17251F',
          950: '#0d1511',
        },
        fog: {
          DEFAULT: '#E8E7E1',
          50: '#faf9f8',
          100: '#f5f4f1',
          200: '#E8E7E1',
          300: '#dcdad2',
          400: '#c8c5ba',
          500: '#b0aca0',
        },
        'moss-green': {
          DEFAULT: '#587C60',
          50: '#f3f7f4',
          100: '#e3ece5',
          200: '#c8d9cc',
          300: '#a3c0a9',
          400: '#7ba283',
          500: '#587C60',
          600: '#45644d',
          700: '#38503e',
          800: '#2f4133',
          900: '#27362b',
        },
        pistachio: {
          DEFAULT: '#C0D3B9',
          50: '#f7faf6',
          100: '#eef4ed',
          200: '#dce8da',
          300: '#C0D3B9',
          400: '#a1bc98',
          500: '#7ea175',
        },
        'mist-grey': {
          DEFAULT: '#B4B7AE',
          50: '#f7f8f6',
          100: '#eeefec',
          200: '#dedfdc',
          300: '#c6c8c2',
          400: '#B4B7AE',
          500: '#95998e',
          600: '#75796e',
        },
        // Mapped Aliases for System Harmony
        forest: {
          DEFAULT: '#17251F',
          50: '#f4f6f5',
          100: '#e4e8e5',
          200: '#cbd4cd',
          300: '#a6b6a9',
          400: '#7a937f',
          500: '#587C60',
          600: '#45644d',
          700: '#35483a',
          800: '#2c3b30',
          900: '#17251F',
          950: '#0d1511',
        },
        chalk: {
          DEFAULT: '#E8E7E1',
          50: '#faf9f8',
          100: '#f5f4f1',
          200: '#E8E7E1',
          300: '#dcdad2',
          400: '#c8c5ba',
        },
        citrus: {
          DEFAULT: '#587C60',
          400: '#7ba283',
          500: '#587C60',
          600: '#45644d',
          700: '#38503e',
        },
        sage: {
          DEFAULT: '#B4B7AE',
          100: '#eeefec',
          200: '#dedfdc',
          300: '#c6c8c2',
          400: '#B4B7AE',
          500: '#95998e',
        },
        stone: {
          DEFAULT: '#B4B7AE',
          100: '#eeefec',
          200: '#dedfdc',
          300: '#B4B7AE',
          400: '#95998e',
          500: '#75796e',
        },
        main: {
          DEFAULT: '#17251F',
          50: '#f4f6f5',
          100: '#e4e8e5',
          200: '#cbd4cd',
          700: '#35483a',
          800: '#2c3b30',
          900: '#17251F',
        },
        bg: {
          DEFAULT: '#E8E7E1',
          card: '#FFFFFF',
          dark: '#17251F',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'hero': '3rem', // 48px
        'card': '1.75rem', // 28px
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(23, 37, 31, 0.06)',
        'float': '0 20px 40px -15px rgba(23, 37, 31, 0.12)',
        'menu': '0 25px 50px -12px rgba(23, 37, 31, 0.25)',
        'glow-moss': '0 0 25px rgba(88, 124, 96, 0.35)',
      },
      animation: {
        'kenburns': 'kenburns 12s ease-in-out infinite alternate',
        'slideDownMenu': 'slideDownMenu 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulseMoss': 'pulseMoss 2.4s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'floatSlow': 'floatSlow 4s ease-in-out infinite',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.08)' },
        },
        slideDownMenu: {
          '0%': { opacity: '0', transform: 'translateY(-14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseMoss: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(88, 124, 96, 0.8)' },
          '70%': { transform: 'scale(1.15)', boxShadow: '0 0 0 14px rgba(88, 124, 96, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(88, 124, 96, 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      }
    },
  },
  plugins: [],
}