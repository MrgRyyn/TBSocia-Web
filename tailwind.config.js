/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "test.html"],
  purge: [
    "./src/**/*.{html,js}", "index.html", "test.html"  // Adjust the path to match your file structure
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl (12, 888, 59%)', 
        brightRedLight: 'hsl (12, 888, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)', 
        darkBlue: 'hsl (228, 39%, 23%)',
        darkGrayishBlue: 'hsl (227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%) ',
        veryPaleRed: 'hs1(13, 100%, 96%) ',
        veryLightGray: 'hsl(0, 08, 98%)',
        rubyStar: '#9C3155',
        lightbaige: '#FEF7EF',
        beige: '#FCEFE5',
        darkblue: '#2E4374',
        blackBrown: '#1E1515',
        darkerBlue: '#213555',
        purpleBlue: '#676FA4',
        rubyStone: '#C2546B',
        aquablue: '#6184A3',
      }
    },
  },
  plugins: [],
}