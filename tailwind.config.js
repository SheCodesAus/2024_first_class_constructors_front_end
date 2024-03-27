module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka One', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1': '28px',
        'h2': '24px', // Size for h2
        'h3': '18px', // Size for h3
        'h4': '16px', // Size for h4
        'h5': '12px', // Size for h5
        'p': '18px', // Size for p
      },
      colors: {
        primary: {
          '100': '#14000F',
          '200': '#820263',
          '300': '#D90368',
          '400': '#FEC3DE',
          '500': '#00A2B8',
          '600': '#C1BDB3',
        },
      },
    },
  },
  plugins: [],
};

