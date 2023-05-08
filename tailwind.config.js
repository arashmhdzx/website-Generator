/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
        },
        extend: {
            colors: {
                "bs-main-color":"#2c2c2c",
                "bs-border-color":"#444444",

            },
            screens: {
                'wsm': { 'min': '300px', 'max': '767px' },
                'wmd': { 'min': '768px', 'max': '991px' },
                'wlg': { 'min': '992px', 'max': '1199px' },
                'wxl': { 'min': '1200px' },
            },
        },
    },
    // plugins: [
    //     require('@tailwindcss/line-clamp'),
    // ],
}