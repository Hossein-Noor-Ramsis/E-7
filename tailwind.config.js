/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./assets/image/background.jpg')",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "0.5 ",
          md: "0.25rem",
        },
      },
    },
  },
  plugins: [],
};
