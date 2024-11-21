/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roachgold: "#ffd700",
        roachgray: "#333333",
        roachpeach: "#ffdab9"
      },
      fontFamily: {
        roachfont1: ["Kode Mono", "monospace"],
        roachfont2: ["Unbounded", "serif"]
      },
      screens: {
        "xsm": "480px"
      }
    },
  },
  plugins: [],
}