/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aubergine & Solar Brass Core Palette
        'aubergine-ink': {
          DEFAULT: '#382D3A',
          50: '#f7f6f7',
          100: '#eeebee',
          200: '#ded8df',
          300: '#c5bac7',
          400: '#a797ab',
          500: '#89758e',
          600: '#6f5a73',
          700: '#5c485f',
          800: '#4e3d51',
          900: '#382D3A',
          950: '#231b24',
        },
        'smoky-plum': {
          DEFAULT: '#6B566B',
          50: '#f8f6f8',
          100: '#f1edf1',
          200: '#e3dce4',
          300: '#cebfc0',
          400: '#b49fa6',
          500: '#9b808d',
          600: '#836976',
          700: '#6B566B',
          800: '#594859',
          900: '#4c3e4c',
        },
        'mineral-lilac': {
          DEFAULT: '#A6A0AC',
          50: '#f8f8f9',
          100: '#f0f0f2',
          200: '#e2e2e5',
          300: '#cdccd2',
          400: '#b4b2bc',
          500: '#A6A0AC',
          600: '#8c8593',
          700: '#736d7a',
          800: '#5f5b65',
        },
        'solar-brass': {
          DEFAULT: '#C7A35A',
          50: '#fbf8f0',
          100: '#f5eedb',
          200: '#ebdcb5',
          300: '#dec388',
          400: '#C7A35A',
          500: '#b89045',
          600: '#9e7537',
          700: '#7e582e',
          800: '#69472b',
          900: '#573b27',
        },
        'warm-porcelain': {
          DEFAULT: '#F0EBE5',
          50: '#faf8f6',
          100: '#F0EBE5',
          200: '#e3dbd1',
          300: '#d3c5b7',
          400: '#bdab99',
        },

        // Backward-Compatible System Aliases
        'moss-ink': {
          DEFAULT: '#382D3A', // Aubergine Ink
          50: '#f7f6f7',
          100: '#eeebee',
          200: '#ded8df',
          300: '#c5bac7',
          400: '#a797ab',
          500: '#89758e',
          600: '#6f5a73',
          700: '#5c485f',
          800: '#4e3d51',
          900: '#382D3A',
          950: '#231b24',
        },
        fog: {
          DEFAULT: '#F0EBE5', // Warm Porcelain
          50: '#faf8f6',
          100: '#F0EBE5',
          200: '#e3dbd1',
          300: '#d3c5b7',
          400: '#bdab99',
        },
        'moss-green': {
          DEFAULT: '#C7A35A', // Solar Brass for actions & highlights
          50: '#fbf8f0',
          100: '#f5eedb',
          200: '#ebdcb5',
          300: '#dec388',
          400: '#C7A35A',
          500: '#b89045',
          600: '#9e7537',
          700: '#7e582e',
        },
        pistachio: {
          DEFAULT: '#A6A0AC', // Mineral Lilac
          50: '#f8f8f9',
          100: '#f0f0f2',
          200: '#e2e2e5',
          300: '#cdccd2',
          400: '#A6A0AC',
        },
        'mist-grey': {
          DEFAULT: '#D8D2CD', // Warm Porcelain Border Tone
          50: '#faf8f7',
          100: '#f3efed',
          200: '#e8e2df',
          300: '#D8D2CD',
          400: '#bfb7b0',
        },
        forest: {
          DEFAULT: '#382D3A',
        },
        chalk: {
          DEFAULT: '#F0EBE5',
        },
        citrus: {
          DEFAULT: '#C7A35A',
        },
        sage: {
          DEFAULT: '#A6A0AC',
        },
        stone: {
          DEFAULT: '#D8D2CD',
        },
        main: {
          DEFAULT: '#382D3A',
        },
        bg: {
          DEFAULT: '#F0EBE5',
          card: '#FFFFFF',
          dark: '#382D3A',
        }
      },
      fontFamily: {
        display: ['Parkinsans', 'Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'Plus Jakarta Sans', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'hero': '3rem', // 48px
        'card': '1.75rem', // 28px
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(56, 45, 58, 0.08)',
        'float': '0 20px 40px -15px rgba(56, 45, 58, 0.16)',
        'menu': '0 25px 50px -12px rgba(56, 45, 58, 0.28)',
        'glow-brass': '0 0 25px rgba(199, 163, 90, 0.45)',
        'glow-plum': '0 0 25px rgba(107, 86, 107, 0.35)',
        'glow-moss': '0 0 25px rgba(88, 124, 96, 0.35)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
