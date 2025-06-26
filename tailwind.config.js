/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        's': '340px',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        cursor: {
          '50%': { borderColor: 'transparent' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        typing: 'typing 2s steps(30, end) forwards',
        cursor: 'cursor .4s step-end infinite alternate',
        slideUp: 'slideUp 3s ease-out',
      },
    },
  },
  plugins: [],
}
