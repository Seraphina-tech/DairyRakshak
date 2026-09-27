/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#114232', // Deep Forest Green
          light: '#1b5b48',
          dark: '#0a2a1f',
        },
        secondary: {
          DEFAULT: '#0A5C54', // Teal / Blue-Green
          light: '#0f8278',
          dark: '#053631',
        },
        accent: {
          DEFAULT: '#F5A623', // Warm Amber / Golden Yellow
          light: '#f7b952',
          dark: '#c48011',
        },
        background: 'var(--bg-main)', // Consistent light mint-green page background
        surface: '#FFFFFF', // Clean white
        text: {
          DEFAULT: '#1A1A1A', // Deep charcoal
          muted: '#6B7280', // Soft dark gray
        },
        risk: {
          zero: '#10B981', // Neutral / safe green
          low: '#059669', // Green / teal
          moderate: '#F59E0B', // Amber
          high: '#DC2626', // Restrained red
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
