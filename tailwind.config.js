/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dancing-script': ['Dancing Script', 'cursive'],
      'kaushan-script': ['Kaushan Script', 'cursive'],
      'open-sans': ['Open Sans', 'sans-serif'],

    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

