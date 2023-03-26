/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        'image-sm': 'img-animation-sm 16s linear infinite',
        'image-md': 'img-animation-md 30s linear infinite'
      },
      keyframes: {
        'img-animation-sm': {
          '0%': { transform: 'translateY(0em)' },
          '100%': { transform: 'translateY(-16em)' }
        },
        'img-animation-md': {
          '0%': { transform: 'translateY(0em)' },
          '100%': { transform: 'translateY(-30em)' }
        }
      },
      boxShadow: {
        '3xl': '2px 4px 9px 1px'
      },
      dropShadow: {
        '3xl': '5px 5px 15px rgba(230, 230, 230, 0.6)',
        '4xl': '1px 1px 15px rgba(0, 0, 0, 0.4)'
      },
      fontFamily: {
      mullish: ["Mulish", "sans-serif"]
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      shadowColor: "hsla(0, 0%, 0%, 0.05)",
      backgroundColor: "#f5f8fe",
      gradientColorD: "#f4f8ff",
      gradientColorL: "#fff0",
      footerColorone: "#eef9fe",
      footerColortwo: "#edf7ff"
    },},
  },
  plugins: [],
}
