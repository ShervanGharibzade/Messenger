module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '44rem',
        '126': '31rem',
        '124': '34rem',
        '120': '26rem',
        '122': '38rem',
      },
      screens: {
        'mm': '400px',
      },
    },
  },
  plugins: [],
}
