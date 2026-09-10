/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dreamy: {
          purple: '#B69CE2',
          pink: '#F8B6C3',
          blue: '#A3D2F0',
          cream: '#FFF9F5',
          charcoal: '#333333',
          accent: '#E680A7'
        }
      },
      fontFamily: {
        heading: ['"Fredoka"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
