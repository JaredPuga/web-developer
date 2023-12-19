/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "#292F36",
        bg2: "#1A1E23",
        brand1: "#12F7D6",
        brand2: "#98FAEC",
        css: '#0C73B8',
        html: '#E54F26',
        js: '#E7A020',
        react: '#28A9E0',
      },
      fontFamily: {
        ubuntu: ["Ubuntu"],
        IBM: ["IBM Plex Mono"],
      },
      boxShadow: {
        'custom': '-4px -4px 2px 0px #12F7D6',
      },
      borderRadius: {
        'customR': '160px 0 160px 0',
        'customR2': '32px 0 32px 0',
        'r80': '80px',
        'r40': '40px',
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

