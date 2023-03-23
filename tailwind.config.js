/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'dark-mud': '#4F4F52',
        'linear-red': '#E91F63',
        'black-100-custom': '#ffcc0075',
        'linear-dark-blue': '#344767',
        'linear-gray': '#7B809A',
        'linear-white': '#E5E5E5',
        'linear-grey': '#7B809A'
      }
    },
  },
  plugins: [],
};
