module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#121212',
        'gray': '#979797',
        'white': '#FCFAFA',
        'purple': {
          'light': '#A855F7',
          'dark': '#8875FF',
        },
      }
    },
  },
  plugins: [],
}
