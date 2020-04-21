module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#23ce6b",
          dark: "#21ae5c"
        },
        dark: "#381460",
        red: "#e20047"
      },
      boxShadow: {
        primary:
          "inset 0 1.5px .2px hsla(0,0%,100%,.2),inset 0 -1.5px .2px rgba(0,0,0,.16)",
        primaryHover:
          "0 5px 20px #23ce6b87, inset 0 1.5px .2px hsla(0,0%,100%,.2),inset 0 -1.5px .2px rgba(0,0,0,.16)"
      },
      fontSize: {
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem"
      }
    }
  },
  variants: {},
  plugins: []
};
