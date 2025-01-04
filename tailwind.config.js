/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindScrollbar, function ({ addUtilities }) {
    addUtilities({
      '.text-fill-transparent': {
        '-webkit-text-fill-color': 'transparent',
      },
      '.bg-light-linear': {
        'background': '-webkit-linear-gradient(0deg, #fafafa, #a1a1aa)',
      },
      '.bg-dark-linear': {
        'background': '-webkit-linear-gradient(0deg, #000000, #a1a1aa)',
      },
      '.background-clip': {
        '-webkit-background-clip': 'text',
      }
    })
  }],
}