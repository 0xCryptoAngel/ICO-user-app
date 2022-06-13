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
          45: '#D5E8FD',
          35: '#E3E5F2',
          30: '#F9FAFB',
          25: '#F3F4FC',
          20: '#F0F4F7',
          15: '#F8FAF9',
          10: '#F0F2FB',
        },
        gray: {
          25: '#E5E7EB',
        },
        red: {
          25: '#F33F5D',
          10: '#FEF5F2',
        },
        green: {
          650: '#008000',
        },
        "pink": "#FDCCD3",
        "btn-blue": "#FDB9BA",
      },
      height: {
        '100': '28rem',
        '120': '36rem',
      },
      width: {
        '88': '22rem',
      }
    },
  },
  plugins: [],
}