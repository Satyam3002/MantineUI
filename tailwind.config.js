/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: "#043873",
            secondaryBlue: "#4F9CF9",
            lightyellow: "#FFE492",
        },
      },
    },
    plugins: [],
  }