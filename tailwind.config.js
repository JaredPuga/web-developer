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
        ubuntu: ["Ubuntu"],
        IBM: ["IBM Plex Mono"],
      },
      boxShadow: {
        'custom': '-4px -4px 2px 0px #12F7D6',
      },
      borderRadius: {
        'customR': '160px 0 160px 0'
      },
      screens: {
        sm: '390px',
        md: '768px',
        lg: '1280px',
        xl: '1920px',
      }
    },
  },
  plugins: [],
}

