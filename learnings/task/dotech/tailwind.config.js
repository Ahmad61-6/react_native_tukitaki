/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["OpenSans-Reguler", "sans-serif"],
        "openSans-bold": ["OpenSans-Bold", "sans-serif"],
        "openSans-semibold": ["OpenSans-SemiBold", "sans-serif"],
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
        light: "#CDCDCD", // from levelLight
      },
      // Gradients are split into start and end colors for NativeWind/Tailwind
      itemGradient: {
        start: "#EA0E2E", // itemGradientColor
        end: "#0562C3", // itemGradientColor
      },
      // Standalone colors
      mainText: "#3B3B3B", // from textColor
      colorWhite: "#FFFFFF",
      colorBlack: "#000000",
    },
  },
  plugins: [],
};
