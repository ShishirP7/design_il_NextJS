/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f7f6",
          100: "#e6eeec",
          200: "#c8d7d3",
          300: "#a5bbb7",
          400: "#7f9b96",
          500: "#6f7f7b",   // muted green-gray (hero bg)
          600: "#2a4a45",   // deep green (cards/cta)
          700: "#1f3834",
          800: "#182d2a",
          900: "#0f1d1b"
        },
        ink: {
          900: "#1b1f1e",
          800: "#232826",
          700: "#2d332f"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      },
      container: { center: true, padding: "1rem" }
    }
  },
  plugins: []
};
