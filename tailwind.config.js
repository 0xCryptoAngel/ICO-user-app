module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],    
      },
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
        'brown': '#AC6D78',
        red: {
          25: '#F33F5D',
          10: '#FEF5F2',
        },
        green: {
          650: '#008000',
          680: '#27AB83',
        },
        "pink": "#FDCCD3",
        "btn-blue": "#FDB9BA",
      },
      height: {
        '100': '28rem',
        '120': '36rem',
        '130': '56rem',
      },
      width: {
        '120': '26rem',
        '88': '24rem',
        '92': '20rem',
      },
      borderRadius: {
        '4xl': '50px',
      },
      spacing: {
        '18': '4.3rem',
      }
    },
  },
  plugins: [],
}