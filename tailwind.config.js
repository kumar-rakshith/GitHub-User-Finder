module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: '#1D4ED8',
        secondary: '#D1D5DB',
        danger: '#EF4444',
      },
    },
  },
  plugins: [],
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}
