/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#76283B',
          light: '#91384D',
          dark: '#581C2B',
          deep: '#35131F',
        },
        gold: {
          DEFAULT: '#C8A15A',
          light: '#DFC185',
          dark: '#A6823B',
          shimmer: '#F4E5BE',
          antique: '#C8A15A',
        },
        ivory: {
          DEFAULT: '#FFF8ED',
          light: '#FFFCF7',
          dark: '#F5ECDB',
          warm: '#FFF8ED',
        },
        champagne: {
          DEFAULT: '#EAD9B9',
          light: '#F5EADB',
          dark: '#D5C19B',
        },
        wine: {
          DEFAULT: '#35131F',
          dark: '#210B13',
          light: '#4E1D2E',
        },
        sage: {
          DEFAULT: '#9BA58A',
          light: '#B6BFAB',
          dark: '#7C866D',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        display: ['Cinzel Decorative', 'Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'envelope': '0 25px 50px -12px rgba(53, 19, 31, 0.25), 0 0 25px rgba(200, 161, 90, 0.15)',
        'luxury': '0 20px 40px -15px rgba(118, 40, 59, 0.15), 0 0 1px 1px rgba(200, 161, 90, 0.2)',
        'gold-glow': '0 0 30px rgba(200, 161, 90, 0.35)',
        'card-elevated': '0 15px 35px -10px rgba(53, 19, 31, 0.12), 0 0 0 1px rgba(200, 161, 90, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
