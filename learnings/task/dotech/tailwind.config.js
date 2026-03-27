/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["OpenSans-Regular", "sans-serif"],
        bold: ["OpenSans-Bold", "sans-serif"],
        semibold: ["OpenSans-SemiBold", "sans-serif"],
      },
    },
    colors: {
      primary: {
        bg: "#0F172A",
        light: "#EDF6FF",
        new: "#034A8F",
      },
      card: {
        DEFAULT: "#1E293B",
        2: "#7D8897",
      },
      hint: {
        DEFAULT: "#A5A5A5",
        2: "#ACACAC",
      },
      level: {
        light: "#CDCDCD",
      },
      itemGradient: {
        start: "#EA0E2E",
        end: "#0562C3",
      },

      mainText: "#3B3B3B",
      colorWhite: "#FFFFFF",
      colorBlack: "#000000",
      textDeepGray: "#3B3B3B",
    },
  },
  plugins: [],
};
