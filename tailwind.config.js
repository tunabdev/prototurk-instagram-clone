/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Segoe UI",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      colors: {
        "ig-gray": "#8e8e8e",
        "ig-border": "#dbdbdb",
        "ig-lightgray": "#efefef",
        brand: "#0095F6",
        facebook: "#385185",
        link: "#00376b",
      },
      screens: {
        login: { max: "876px" },
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')",
      },
    },
  },
  plugins: [],
};
