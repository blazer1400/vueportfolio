/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/components/*",
        "./src/views/*"
    ],
    theme: {
        extend: {
            colors: {
                'base': '#011656',
                'bg': '#010e38',
                'button': '#1e253a'
            }
        },
    },
    plugins: [],
}