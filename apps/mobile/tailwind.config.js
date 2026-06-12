/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset"), require("../../tailwind.preset.cjs")],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
};
