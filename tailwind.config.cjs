/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",
    "./cartas/*.js",
    "./datos_cartas/*.js",
    "!./build_prod.mjs",
    "!./tailwind.config.cjs",
    "!./dist/**",
    "!./node_modules/**"
  ],
  safelist: [
    "hidden",
    "grid",
    "flex",
    "ring-2",
    "ring-amber-300",
    "opacity-50",
    "cursor-not-allowed",
    "bg-amber-400",
    "bg-emerald-400",
    "text-black",
    "border-amber-200",
    "border-emerald-200",
    "font-ui",
    "font-display",
    "font-body"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
