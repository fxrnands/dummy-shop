/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
      },
      boxShadow: {
        "login-card": "1px 1px 5px 1px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
