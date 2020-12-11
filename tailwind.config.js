const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lineto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        violet: colors.violet,
        blue: colors.blue,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        green: colors.green,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        gray: colors.gray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
