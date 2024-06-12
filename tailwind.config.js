/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Lato","sans-serif"],
        titleFont: ["Markazi", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg,#1e2024, #23272b)",
        designColor: "#a855f7",
      },
      boxShadow: {
        shadowOne: "3px 3px 3px , -3px -3px 3px #262a2e",
        'lg-purple': '0 4px 6px 1px rgba(139, 92, 246, 0.1), 0 2px 4px 1px rgba(139, 92, 246, 0.06)',
        'xl-purple': '0 4px 6px 3px rgba(139, 92, 246, 0.1), 0 2px 4px 1px rgba(139, 92, 246, 0.06)',
      },

      
    },
  },
  plugins: [],
}