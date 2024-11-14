/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lightgray: '#EDEDED',
        graytext: '#6F7177',
        blue: '#1565FE',
        blueBorder: '#4B40EE'
      },
      backgroundColor: {
        lightgray: '#EDEDED',
        bggray: '#F7F7F7',
        blueBg: '#1565FE'
      },
    },
  },
  plugins: [],
};
