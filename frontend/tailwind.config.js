/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
colors: {
  elaichi: '#D6E3C2',
  gray: "#333333",
  white: "#FFFFFF",
  gray300: "#f3f4f6",
},
    letterSpacing: {
      custom: '.15em', // Custom spacing
      spacing: ".07vw",
    },
    maxHeight: {
      full: '100%',
      screen: '200vh',
      screenhalf:'50vh',
      space:'7.5vh',
    },
    lineHeight: {
      custom: '1.5rem',
    },
  },
  plugins: [],
}
