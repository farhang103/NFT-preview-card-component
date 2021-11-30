module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      screen: {
        'sm': '375px',
        'lg': '1440px'
      },

      colors: {
        primary: {
          soft_blue: 'hsl(215, 51%, 70%)',
          cyan: 'hsl(178, 100%, 50%)',
          cyan_op50: 'hsla(178, 100%, 50%, .5)'
        },

        neutral: {
          main_very_dark_blue: 'hsl(217, 54%, 11%)', 
          card_very_dark_blue: 'hsl(216, 50%, 16%)',
          line_very_dark_blue: 'hsl(215, 32%, 27%)',
          white: 'hsl(0, 0%, 100%)'
        }
      },

      fontFamily: {
        'outfit': "'outfit', sans-serif"
      },

      spacing: {
        '15': '3.875rem',
        '4.5': '1.125rem',
        '70': '17.5rem',
        '0.25': '0.0625rem',
        '37': '9.375rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
