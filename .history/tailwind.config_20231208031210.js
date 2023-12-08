/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#252466",
        "main-light": "#3873FF",
        "text-primary": "#000",
        "bg-header": "rgb(39, 39, 42)",
        "bg-menu": "rgba(40,40, 48, 0.91)",
        "bg-border": "rgb(63, 63, 70, 0.4)",
        "border-menu": "rgb(244, 165, 96, 0.249)",
        "main-title": "rgb(244, 244, 245)",
        "sub-title": "rgb(161, 161 ,170)",
        // "sub-dark": "#252466",
        // "main-dark": "#41427D",
        // "text-color": "#FCFCFC",
        // "text-gray": "#667085",
        // "text-primary": "#9795B5",
      },
      // gridTemplateColumns: {
      //   prod: "repeat(auto-fit, minmax(130px, 1fr))",
      //   plog: "repeat(auto-fit, minmax(300px, 1fr))",
      // },
    },
  },
  plugins: [],
};
