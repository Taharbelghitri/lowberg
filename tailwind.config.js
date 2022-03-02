module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#141414",
      grey_black: "#4a4a4a",
      grey_white: "#7f7f7f",
      white: "#e9e9e9",
      green: "#55917f",
      violet: "#aa1155",
      red: "#dd1155",
    },
    screens: {
      phone: "360px",
      tablet: "640px",
      laptop: "1100px",
      desktop: "15000px",
    },
    extend: {
      fontFamily: {
        josifin: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};
