/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        customBrown: "#af7974", // Define your custom brown color
      },
    },
  },
  plugins: [],
}

