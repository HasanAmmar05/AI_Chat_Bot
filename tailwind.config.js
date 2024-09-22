/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1abc9c',
        secondary: '#2c3e50',
        background: '#1e1e1e',
        text: '#ecf0f1',
        accent: '#e74c3c',
        input: '#2c2c2c',
      },
    },
  },
  plugins: [],
}
