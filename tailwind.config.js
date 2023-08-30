/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}", "./src/**/**/*.{js,jsx,html}"],
  theme: {
    fontFamily: {
      conduit: "conduit",
      conduitBold: "conduitBold",
      conduitLight: "conduitLight",
      conduitExtralight: "conduitExtraLight",
    },
    extend: {
      fontSize: {
        "10xl": "9rem",
      },
    },
    plugins: [],
  },
};
