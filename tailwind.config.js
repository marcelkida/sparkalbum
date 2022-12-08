/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transformOrigin: {
        'top-center': 'center top',
      }
      fontFamily: {
        'spaceGrotesk': ['Space Grotesk']
      },
    },
  },
  plugins: [],
}
