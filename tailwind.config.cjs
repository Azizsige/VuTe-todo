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
        bgPrimary: "#25273C",
        done: "rgba(15, 144, 161, 57%)",
        footer: "#AD02FE",
        addBtn: "rgba(90, 255, 49, 60%)",
      },
      dropShadow: {
        "3xl": "0px 12px 35px rgba(0, 0, 0, 0.5)",
        // '4xl': [
        //     '0 35px 35px rgba(0, 0, 0, 0.25)',
        //     '0 45px 65px rgba(0, 0, 0, 0.15)'
        // ]
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
