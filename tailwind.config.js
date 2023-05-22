/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = ["Lexend Deca", "system-ui"];

module.exports = {
    // darkMode: 'class',
    theme: {
        fontFamily: fontFamily,
        extend: {
            colors: { brandColor: "#f58634", brandColorHover: "#CB630B" },
        },
    },
    content: [
        "./pages/**/*.vue",
        "./layouts/**/*.vue",
        "./nuxt.config.{js,ts}",
        "./plugins/**/*.{js,ts}",
        "./components/**/*.{js,vue,ts}",
    ],
    plugins: [],
};
