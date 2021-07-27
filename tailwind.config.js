// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class",
    theme: {
        typography: (theme) => ({}),
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
        },
        extend: {
            animation: {
                // If you are using Toast component
                left: 'left 0.3s',
                right: 'right 0.3s',
                // if you are using the animate variant of the modal
                modal: 'modal 0.3s',
                // if you are using drawer variant right
                'drawer-right': 'drawer-right 0.3s',
                // if you are using drawer variant left
                'drawer-left': 'drawer-left 0.3s',
                // if you are using drawer variant top
                'drawer-top': 'drawer-top 0.3s',
                // if you are using drawer variant bottom
                'drawer-bottom': 'drawer-bottom 0.3s',
            },
            keyframes: {
                // if you are using drawer variant right
                'drawer-right': {
                    '0%, 100%': {right: '-500px'},
                    '100%': {right: '0'},
                },
                // if you are using drawer variant left
                'drawer-left': {
                    '0%, 100%': {left: '-500px'},
                    '100%': {left: '0'},
                },
                // if you are using drawer variant top
                'drawer-top': {
                    '0%, 100%': {top: '-500px'},
                    '100%': {top: '0'},
                },
                // if you are using drawer variant bottom
                'drawer-bottom': {
                    '0%, 100%': {bottom: '-500px'},
                    '100%': {bottom: '0'},
                },
                // if you are using the animate variant of the modal
                modal: {
                    '0%, 100%': {top: '-500px'},
                    '100%': {top: '0'},
                },
                /* If you are using Toast component*/
                left: {
                    '0%, 100%': {transform: 'translateX(-100%)'},
                    '100%': {transform: 'translateX(0)'},
                },
                right: {
                    '0%, 100%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(0)'},
                },
            },
        },
        variants: {
            /* If you are using Collapse or Accordion component*/
            transitionProperty: {
                height: 'height',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'checked'],
            inset: ['checked'],
            opacity: ['disabled'],
            textColor: ['active'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
}


