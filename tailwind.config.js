/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 01 — Basalt | #343B3A (Primary brand colour: deep charcoal with subtle green undertone)
        basalt: {
          DEFAULT: '#343B3A',
          50: '#f6f7f6',
          100: '#e9ecea',
          200: '#d5dad7',
          300: '#b6c0bc',
          400: '#92a09a',
          500: '#73837d',
          600: '#5b6963',
          700: '#4a5450',
          800: '#3d4543',
          900: '#343B3A',
          950: '#202524',
        },

        // 02 — Lichen | #68766C (Secondary natural colour: restrained grey-green)
        lichen: {
          DEFAULT: '#68766C',
          50: '#f6f8f6',
          100: '#ecefec',
          200: '#d9e0da',
          300: '#becbc0',
          400: '#9fb1a2',
          500: '#819685',
          600: '#68766C',
          700: '#515e55',
          800: '#434d46',
          900: '#39413b',
        },

        // 03 — Citron | #B8BE83 (Signature accent colour: muted yellow-green energy)
        citron: {
          DEFAULT: '#B8BE83',
          50: '#f9faf4',
          100: '#f2f4e6',
          200: '#e5e9cf',
          300: '#d4dbb0',
          400: '#c5cd97',
          500: '#B8BE83',
          600: '#9ea66a',
          700: '#7c8452',
          800: '#636a43',
          900: '#52583a',
        },

        // 04 — Pumice | #D9D6C9 (Supporting neutral: mineral grey-beige)
        pumice: {
          DEFAULT: '#D9D6C9',
          50: '#faf9f7',
          100: '#f4f3ef',
          200: '#e8e5dc',
          300: '#D9D6C9',
          400: '#c5bfad',
          500: '#aba48f',
        },

        // 05 — Chalk | #F5F3EB (Primary light neutral: warm off-white)
        chalk: {
          DEFAULT: '#F5F3EB',
          50: '#fdfcfb',
          100: '#F5F3EB',
          200: '#ece8d9',
          300: '#ded7c1',
          400: '#c7bd9e',
        },

        // Archived Palettes (Aubergine & Brass)
        'aubergine-ink': {
          DEFAULT: '#382D3A',
          900: '#382D3A',
          950: '#231b24',
        },
        'solar-brass': {
          DEFAULT: '#C7A35A',
        },

        // Active System Aliases mapped to Basalt & Citron
        'moss-ink': {
          DEFAULT: '#343B3A', // Basalt
          50: '#f6f7f6',
          100: '#e9ecea',
          200: '#d5dad7',
          300: '#b6c0bc',
          400: '#92a09a',
          500: '#73837d',
          600: '#5b6963',
          700: '#4a5450',
          800: '#3d4543',
          900: '#343B3A',
          950: '#202524',
        },
        fog: {
          DEFAULT: '#F5F3EB', // Chalk
          50: '#fdfcfb',
          100: '#F5F3EB',
          200: '#ece8d9',
          300: '#ded7c1',
          400: '#c7bd9e',
        },
        'moss-green': {
          DEFAULT: '#B8BE83', // Citron signature accent
          50: '#f9faf4',
          100: '#f2f4e6',
          200: '#e5e9cf',
          300: '#d4dbb0',
          400: '#c5cd97',
          500: '#B8BE83',
          600: '#9ea66a',
          700: '#7c8452',
        },
        pistachio: {
          DEFAULT: '#B8BE83', // Citron
          50: '#f9faf4',
          100: '#f2f4e6',
          200: '#e5e9cf',
          300: '#d4dbb0',
          400: '#B8BE83',
        },
        'mist-grey': {
          DEFAULT: '#D9D6C9', // Pumice
          50: '#faf9f7',
          100: '#f4f3ef',
          200: '#e8e5dc',
          300: '#D9D6C9',
          400: '#c5bfad',
        },
        forest: {
          DEFAULT: '#343B3A',
        },
        citrus: {
          DEFAULT: '#B8BE83',
        },
        sage: {
          DEFAULT: '#68766C', // Lichen
        },
        stone: {
          DEFAULT: '#D9D6C9', // Pumice
        },
        main: {
          DEFAULT: '#343B3A', // Basalt
        },
        bg: {
          DEFAULT: '#F5F3EB',
          card: '#FFFFFF',
          dark: '#343B3A',
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
        'soft': '0 4px 24px -2px rgba(52, 59, 58, 0.08)',
        'float': '0 20px 40px -15px rgba(52, 59, 58, 0.16)',
        'menu': '0 25px 50px -12px rgba(52, 59, 58, 0.28)',
        'glow-citron': '0 0 25px rgba(184, 190, 131, 0.45)',
        'glow-moss': '0 0 25px rgba(184, 190, 131, 0.4)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
