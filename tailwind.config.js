/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BtnBg: "#243c53f",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1340px",
        },
      },
    },
  },
  plugins: [],
};
