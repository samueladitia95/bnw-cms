import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem"
      },
      fontFamily: {
        "main": ['Source Sans 3', defaultTheme.fontFamily.sans]
      },
      colors: {
        "label": "#666f75"
      }
    },
  },
  plugins: [],
}

