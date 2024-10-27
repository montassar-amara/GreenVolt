/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    backgroundImage: {
      'hero': "url('../public/hero.jpg')",
    },
    extend: {},
  },
  plugins: [],
}

