const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/elements/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#1F2024',
      secondary: '#6676EF',
      transparent: 'transparent',
      background: '#F2F2F2',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      rose: colors.rose,
      amber: colors.amber,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      sky: colors.sky,
      slate: colors.slate,
      stone: colors.stone,
      teal: colors.teal,
      violet: colors.violet,
      zinc: colors.zinc,
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}