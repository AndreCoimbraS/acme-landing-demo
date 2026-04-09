/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'solare-gold': '#D4AF37',
        'solare-dark': '#000000',
      },
      fontFamily: {
        sans: ['"Playfair Display"', 'serif'],
        serif: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}
