/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#181824",
        bgSecondary: "#25273C",
        done: "rgba(15, 144, 161, 57%)",
        footer: "#AD02FE",
        addBtn: "rgba(90, 255, 49, 60%)",
      },
      dropShadow: {
        "3xl": "0px 12px 35px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        monda: ["Monda", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
