/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'dark-mud': '#4F4F52',
        'linear-red': '#E91F63',
        'black-100-custom': '#ffcc0075'
      }
    },
  },
  plugins: [],
};
