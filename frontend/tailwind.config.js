/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   // Bounces 5 times 1s equals 5 seconds
      //   'bounce-short': 'bounce 1s ease-in-out '
      // }
    },
  },
  plugins: [],
}

