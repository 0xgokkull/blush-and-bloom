/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#FFD6E7',
        'soft-lavender': '#E6DFFF',
        'cream-white': '#FFF9F5',
        'peach': '#FFCBA4',
        'pastel-purple': '#CDB4FF',
        'rose-pink': '#FF8FAB',
        'dark-plum': '#593A50',
        'soft-pink': '#FFE5EC',
        'deep-rose': '#FB6F92',
        'blush-tint': '#FFF0F5',
      },
      fontFamily: {
        sans: ['Nunito', 'Quicksand', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
        note: ['Patrick Hand', 'cursive'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 2.5s ease-in-out infinite',
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sparkle': 'sparkle 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
