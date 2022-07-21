const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          textC: "#596579",
          btn: "#0052CC",
          active: "#374253",
          circle: "#014DA1",
          bg: "#F4F7FB",
          bgActive: "#E6EAF0",
          icon: "#A7B2C3",
        },
        logo: "rgba(3, 77, 162, 1)",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
