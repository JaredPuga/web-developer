/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "#292F36",
        brand1: "#12F7D6",
        brand2: "#98FAEC"
      },
      fontFamily: {
        body: ["Ubuntu", "IBM Plex Mono", "monospace"],
      }
    },
  },
  plugins: [],
}

