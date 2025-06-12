module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0052CC',
        secondary: '#2684FF',
        accent: '#FF5630',
        neutralDark: '#253858',
        neutralLight: '#F4F5F7',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
