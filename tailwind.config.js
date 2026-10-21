/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Glacier & Electric Chartreuse Core Palette
        'deep-fjord': {
          DEFAULT: '#263C49',
          50: '#f2f5f7',
          100: '#e3eaf0',
          200: '#c5d5e1',
          300: '#9bb8cb',
          400: '#6d95b0',
          500: '#4d7895',
          600: '#3c607a',
          700: '#324e64',
          800: '#2c4254',
          900: '#263C49',
          950: '#192630',
        },
        'glacier': {
          DEFAULT: '#7699A3',
          50: '#f5f8f9',
          100: '#e7eff1',
          200: '#d3e2e5',
          300: '#b4ced4',
          400: '#90b4be',
          500: '#7699A3',
          600: '#5f7f89',
          700: '#4f6871',
          800: '#44575e',
          900: '#3c4b51',
        },
        'ice-mineral': {
          DEFAULT: '#B5D0D1',
          50: '#f7fafb',
          100: '#eef5f5',
          200: '#dfeded',
          300: '#c7e0e1',
          400: '#B5D0D1',
          500: '#8fb7ba',
          600: '#739aa0',
          700: '#5f7e84',
        },
        'chartreuse': {
          DEFAULT: '#B9D84A',
          50: '#f9fde9',
          100: '#f2fcc6',
          200: '#e4f790',
          300: '#d2f053',
          400: '#B9D84A',
          500: '#9cbf25',
          600: '#7a981a',
          700: '#5c7418',
          800: '#4b5c18',
          900: '#3f4f18',
        },
        'frost-white': {
          DEFAULT: '#F3F6F2',
          50: '#fafcf9',
          100: '#F3F6F2',
          200: '#e6ede4',
          300: '#d4e1d1',
          400: '#b6ccb1',
        },

        // Backward-Compatible System Aliases
        'moss-ink': {
          DEFAULT: '#263C49', // Deep Fjord
          50: '#f2f5f7',
          100: '#e3eaf0',
          200: '#c5d5e1',
          300: '#9bb8cb',
          400: '#6d95b0',
          500: '#4d7895',
          600: '#3c607a',
          700: '#324e64',
          800: '#2c4254',
          900: '#263C49',
          950: '#192630',
        },
        fog: {
          DEFAULT: '#F3F6F2', // Frost White
          50: '#fafcf9',
          100: '#F3F6F2',
          200: '#e6ede4',
          300: '#d4e1d1',
          400: '#cbdad8',
        },
        'moss-green': {
          DEFAULT: '#7699A3', // Glacier Blue for architectural highlights
          50: '#f5f8f9',
          100: '#e7eff1',
          200: '#d3e2e5',
          300: '#b4ced4',
          400: '#90b4be',
          500: '#7699A3',
          600: '#5f7f89',
          700: '#4f6871',
        },
        pistachio: {
          DEFAULT: '#B5D0D1', // Ice Mineral
          50: '#f7fafb',
          100: '#eef5f5',
          200: '#dfeded',
          300: '#c7e0e1',
          400: '#B5D0D1',
          500: '#8fb7ba',
        },
        'mist-grey': {
          DEFAULT: '#CCD8D9', // Soft Mineral Divider
          50: '#f8fafb',
          100: '#eef3f4',
          200: '#e1eaec',
          300: '#CCD8D9',
          400: '#b0c2c4',
          500: '#95acad',
          600: '#768c8e',
        },
        forest: {
          DEFAULT: '#263C49',
        },
        chalk: {
          DEFAULT: '#F3F6F2',
        },
        citrus: {
          DEFAULT: '#B9D84A',
        },
        sage: {
          DEFAULT: '#B5D0D1',
        },
        stone: {
          DEFAULT: '#CCD8D9',
        },
        main: {
          DEFAULT: '#263C49',
        },
        bg: {
          DEFAULT: '#F3F6F2',
          card: '#FFFFFF',
          dark: '#263C49',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'hero': '3rem', // 48px
        'card': '1.75rem', // 28px
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(38, 60, 73, 0.08)',
        'float': '0 20px 40px -15px rgba(38, 60, 73, 0.16)',
        'menu': '0 25px 50px -12px rgba(38, 60, 73, 0.28)',
        'glow-chartreuse': '0 0 25px rgba(185, 216, 74, 0.45)',
        'glow-glacier': '0 0 25px rgba(118, 153, 163, 0.35)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
