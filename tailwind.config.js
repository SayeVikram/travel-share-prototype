/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./app/index.jsx", "./Screens/**/*.{js,jsx,ts,tsx}", "./App.{js,jsx,ts,tsx}", "./Screens/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins:{
    backgroundOpacity: true,
  },
}

