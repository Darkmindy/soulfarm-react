/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'made-dillan': ['MADE Dillan', 'sans-serif'],
          'lexend': ['Lexend', 'sans-serif'],
          'sans': ['Lexend', ...require('tailwindcss/defaultTheme').fontFamily.sans],
        },
        fontFace: { // Define local font files
          'MADE Dillan': [
            { src: 'url(./assets/fonts/MADE Dillan.woff) format("woff")' },
          ],
          'Lexend': [
            { src: 'url(./assets/fonts/Lexend.woff) format("woff")' },
          ],
        },
      },
    },
    plugins: [],
  }