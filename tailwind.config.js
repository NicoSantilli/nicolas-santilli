/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-primary': "#18122B",
        'background-primary-light': "#354259"
      }
    },
  },
  plugins: [],
}

