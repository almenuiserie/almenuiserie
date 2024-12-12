/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
    darkTheme: false,
  },
  plugins: [require("daisyui")],
};
