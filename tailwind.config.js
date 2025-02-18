/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ajuste conforme sua estrutura
  theme: {
    extend: {
      colors: {
        primary: "#25205e",
        whiteClean: "#f0ebe7",
        yellowSecondary: "#fbb03b",
        textColor: "#2e0828",
        yellowHover: "#ffc262",
        buttonPurple: "#8045ff",
      },
    },
  },
  plugins: [],
};
