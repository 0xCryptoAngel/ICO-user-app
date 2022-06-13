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
          35: '#E3E5F2',
          25: '#F3F4FC',
          20: '#F0F4F7',
          15: '#F8FAF9',
        },
        gray: {
          25: '#E5E7EB',
        },
        red: {
          25: '#F33F5D',
        },
        green: {
          650: '#008000',
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