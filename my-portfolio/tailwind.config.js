/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // This replaces the default font with your new one.
          // If you chose a different font name, replace "Space Grotesk" below.
          sans: ['"Crimson Pro"', 'sans-serif'], 
        },
      },
    },
    plugins: [],
  }