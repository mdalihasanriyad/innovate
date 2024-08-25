/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-1": "url('./img/banner1.png')",
      },
    },
  },
  plugins: [],
};
