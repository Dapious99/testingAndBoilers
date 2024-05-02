/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          sans: ["sans-serif", "Georgia"],
        },
      },

      screens: {
        md: { min: "416px", max: "850px" },

        sm: { max: "415px" },
      },
    },
  },
  plugins: [],
};
