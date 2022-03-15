module.exports = {
  content: ["./src/**/**.{ts,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Signika Negative", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
