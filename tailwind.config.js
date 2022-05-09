const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/**/*.{html,md,liquid,erb,serb}',
        './frontend/javascript/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Recursive', ...defaultTheme.fontFamily.sans],
                'mono': ['Recursive', ...defaultTheme.fontFamily.mono],
            },
            typography: {
                DEFAULT: {
                    css: [
                        {
                            maxWidth: '80ch',
                        }
                    ],
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
