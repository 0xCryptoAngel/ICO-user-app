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
        "pink": "#FDCCD3",
        "btn-blue": "#FDB9BA",
      },
    },
  },
  plugins: [],
}