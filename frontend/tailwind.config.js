/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'rgb(251, 250, 248)',
      }
    },
    borderRadius: {
      'default': '12px',
    }
  },
  plugins: [],
}