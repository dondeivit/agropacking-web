/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Fuente principal minimalista y redonda
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], 
      },
      colors: {
        // Verde corporativo de Agropacking (elegante y natural)
        'agro-verde': '#3b7a35', 
        // Color vino muy oscuro para el footer y contrastes
        'agro-vino': '#2a0a14',
      }
    },
  },
  plugins: [],
}