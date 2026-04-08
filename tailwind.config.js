/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f5f0e8',
        'parchment-dark': '#ece4d0',
        crimson: {
          DEFAULT: '#c0392b',
          dark: '#962d22',
          light: '#e74c3c',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
