/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minWidth: {
      '1/2': '50%',
    },
    minHeight: {
      '1/2': '50%',
    },
    extend: {
      spacing: {
        margin: {
          '9/10': '90%',
          '1/10': '10%',
        },
      },
    },
  },
  plugins: [],
};
