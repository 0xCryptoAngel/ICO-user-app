module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          75: '#E1F3FA',
          25: '#F3F4FC',
        },
        red: {
          25: '#F33F5D',
        },
        "pink": "#FDCCD3",
        "btn-blue": "#FDB9BA",
      },
      height: {
        '100': '28rem',
      }
    },
  },
  plugins: [],
}