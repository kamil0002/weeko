// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    maxWidth: {
      'sm': '20rem',  
    },

    fontFamily: {
      'base': ['Montserrat'],
    },
    extend: {
      width: { 
        '18': '72px',
      },
      height: { 
        '18': '72px',
      },

      inset: {
        '18': '72px',
      },
      margin: {
        '18': '72px',
      },
    }
  },
  variants: {
    extend: { },
  },
  plugins: [],
};
