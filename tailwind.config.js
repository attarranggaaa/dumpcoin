/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5629EE",
        primarylight: "#8C6EEF",
        secondary: "#22C4F8",
        dark1: "#111720",
        dark2: "#151A24",
        dark3: "#171C28",
        dark4: "#1E2331",
        dark5: "#242837",
        dark6: "#2F3646",
        light2: "#6B7485",
        light3: "#99A4B9",
        hijau: "#58CA81",
        merah: "#D04763",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
