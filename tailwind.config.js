/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dashboard-empty': "url('../public/assets/images/dashboard_bg_default.png')",
      },
      colors: {
        'primary-color': '#ffffff',
        'secondary-color': '#efeff4',
        'secondary-color-lighter': '#f5f5f5',
        'secondary-color-darker': '#828282',
        'accent-color': '#76f5c0',
        'background-color': '#152928', 
        'foreground-color-lightest': '#016f59',
        'foreground-color-lighter': '#116d5f',
        'foreground-color': '#206b64',
        'black': '#000000',
      }
    }
  },
  plugins: [],
}