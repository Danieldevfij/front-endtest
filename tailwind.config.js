module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004E89',
        secondary: '#FFD500',
        accent: '#FF6F61',
        dark: '#1A1A1D',
        light: '#F5F5F5',
        gray: '#4E4E50',
        muted: '#E5E5E5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
