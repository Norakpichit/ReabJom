/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    fontSize: {
      sm: "0.9rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      backgroundColor: (theme) => ({
        dark: "#548BBE",
        light: "#CDDEFF",
      }),
      backgroundImage: (theme) => ({
        "sen-sok": "url('./src/assets/sen-sok.jpeg')",
      }),
    },
  },
  plugins: [require("daisyui")],
};
