import defaultTheme from "tailwindcss/defaultTheme";

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
				main: ["Source Sans 3", defaultTheme.fontFamily.sans]
			},
			colors: {
				"txt-primary": "#16161a",
				"txt-hint": "#666f75",
				"txt-disabled": "#a0a6ac",
				primary: "#16161a",
				"btn-disabled": "#e4e9ec",
				baseAlt1: "#e4e9ec",
				baseAlt2: "#d7dde4",
				bodyColor: "#f8f9fa",
				successColor: "#32ad84",
				successAltColor: "#c4eedc"
			}
		}
	},
	plugins: []
};

/*
  --baseColor: #ffffff;
  --baseAlt1Color: #e4e9ec;
  --baseAlt2Color: #d7dde4;
  --baseAlt3Color: #c6cdd7;
  --baseAlt4Color: #a5b0c0;
  --infoColor: #5499e8;
  --infoAltColor: #cee2f8;
  --successColor: #32ad84;
  --successAltColor: #c4eedc;
  --dangerColor: #e34562;
  --dangerAltColor: #f7cad2;
  --warningColor: #ff944d;
  --warningAltColor: #ffd4b8;
*/
