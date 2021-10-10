// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')
const round = (num) =>
    num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, '$1')
        .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class",
    theme: {
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
            typography: (theme) => ({
                DEFAULT: {
                    css: [
                        {
                            color: theme('colors.gray.100', colors.gray[100]),
                            maxWidth: '65ch',
                            '[class~="lead"]': {
                                color: theme('colors.gray.600', colors.gray[600]),
                            },
                            a: {
                                color: theme('colors.red.900', colors.red[900]),
                                textDecoration: 'underline',
                                fontWeight: '500',
                            },
                            strong: {
                                color: theme('colors.red.900', colors.red[900]),
                                fontWeight: '600',
                            },
                            'ol[type="A"]': {
                                '--list-counter-style': 'upper-alpha',
                            },
                            'ol[type="a"]': {
                                '--list-counter-style': 'lower-alpha',
                            },
                            'ol[type="A" s]': {
                                '--list-counter-style': 'upper-alpha',
                            },
                            'ol[type="a" s]': {
                                '--list-counter-style': 'lower-alpha',
                            },
                            'ol[type="I"]': {
                                '--list-counter-style': 'upper-roman',
                            },
                            'ol[type="i"]': {
                                '--list-counter-style': 'lower-roman',
                            },
                            'ol[type="I" s]': {
                                '--list-counter-style': 'upper-roman',
                            },
                            'ol[type="i" s]': {
                                '--list-counter-style': 'lower-roman',
                            },
                            'ol[type="1"]': {
                                '--list-counter-style': 'decimal',
                            },
                            'ol > li': {
                                position: 'relative',
                            },
                            'ol > li::before': {
                                content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
                                position: 'absolute',
                                fontWeight: '400',
                                color: theme('colors.gray.500', colors.gray[500]),
                            },
                            'ul > li': {
                                position: 'relative',
                            },
                            'ul > li::before': {
                                content: '""',
                                position: 'absolute',
                                backgroundColor: theme('colors.gray.300', colors.gray[300]),
                                borderRadius: '50%',
                            },
                            hr: {
                                borderColor: theme('colors.gray.200', colors.gray[200]),
                                borderTopWidth: 1,
                            },
                            blockquote: {
                                fontWeight: '500',
                                fontStyle: 'italic',
                                color: theme('colors.red.900', colors.red[900]),
                                borderLeftWidth: '0.25rem',
                                borderLeftColor: theme('colors.gray.200', colors.gray[200]),
                                quotes: '"\\201C""\\201D""\\2018""\\2019"',
                            },
                            'blockquote p:first-of-type::before': {
                                content: 'open-quote',
                            },
                            'blockquote p:last-of-type::after': {
                                content: 'close-quote',
                            },
                            h1: {
                                color: theme('colors.red.900', colors.red[900]),
                                fontWeight: '800',
                            },
                            'h1 strong': {
                                fontWeight: '900',
                            },
                            h2: {
                                color: theme('colors.red.900', colors.red[900]),
                                fontWeight: '700',
                            },
                            'h2 strong': {
                                fontWeight: '800',
                            },
                            h3: {
                                color: theme('colors.red.900', colors.red[900]),
                                fontWeight: '600',
                            },
                            'h3 strong': {
                                fontWeight: '700',
                            },
                            h4: {
                                color: theme('colors.red.900', colors.red[900]),
                                fontWeight: '600',
                            },
                            'h4 strong': {
                                fontWeight: '700',
                            },
                            'figure figcaption': {
                                color: theme('colors.gray.500', colors.gray[500]),
                            },
                            code: {
                                color: theme('colors.red.900', colors.red[900]),
                                fontWeight: '600',
                            },
                            'code::before': {
                                content: '"`"',
                            },
                            'code::after': {
                                content: '"`"',
                            },
                            'a code': {
                                color: theme('colors.red.900', colors.red[900]),
                            },
                            pre: {
                                color: theme('colors.gray.200', colors.gray[200]),
                                backgroundColor: theme('colors.gray.800', colors.gray[800]),
                                overflowX: 'auto',
                            },
                            'pre code': {
                                backgroundColor: 'transparent',
                                borderWidth: '0',
                                borderRadius: '0',
                                padding: '0',
                                fontWeight: '400',
                                color: 'inherit',
                                fontSize: 'inherit',
                                fontFamily: 'inherit',
                                lineHeight: 'inherit',
                            },
                            'pre code::before': {
                                content: 'none',
                            },
                            'pre code::after': {
                                content: 'none',
                            },
                            table: {
                                width: '100%',
                                tableLayout: 'auto',
                                textAlign: 'left',
                                marginTop: em(32, 16),
                                marginBottom: em(32, 16),
                            },
                            thead: {
                                color: theme('colors.red.900', colors.red[900]),
                                fontWeight: '600',
                                borderBottomWidth: '1px',
                                borderBottomColor: theme('colors.gray.300', colors.gray[300]),
                            },
                            'thead th': {
                                verticalAlign: 'bottom',
                            },
                            'tbody tr': {
                                borderBottomWidth: '1px',
                                borderBottomColor: theme('colors.gray.200', colors.gray[200]),
                            },
                            'tbody tr:last-child': {
                                borderBottomWidth: '0',
                            },
                            'tbody td': {
                                verticalAlign: 'top',
                            },
                        },
                        {
                            fontSize: rem(16),
                            lineHeight: round(28 / 16),
                            p: {
                                marginTop: em(20, 16),
                                marginBottom: em(20, 16),
                            },
                            '[class~="lead"]': {
                                fontSize: em(20, 16),
                                lineHeight: round(32 / 20),
                                marginTop: em(24, 20),
                                marginBottom: em(24, 20),
                            },
                            blockquote: {
                                marginTop: em(32, 20),
                                marginBottom: em(32, 20),
                                paddingLeft: em(20, 20),
                            },
                            h1: {
                                fontSize: em(36, 16),
                                marginTop: '0',
                                marginBottom: em(32, 36),
                                lineHeight: round(40 / 36),
                            },
                            h2: {
                                fontSize: em(24, 16),
                                marginTop: em(48, 24),
                                marginBottom: em(24, 24),
                                lineHeight: round(32 / 24),
                            },
                            h3: {
                                fontSize: em(20, 16),
                                marginTop: em(32, 20),
                                marginBottom: em(12, 20),
                                lineHeight: round(32 / 20),
                            },
                            h4: {
                                marginTop: em(24, 16),
                                marginBottom: em(8, 16),
                                lineHeight: round(24 / 16),
                            },
                            img: {
                                marginTop: em(32, 16),
                                marginBottom: em(32, 16),
                            },
                            video: {
                                marginTop: em(32, 16),
                                marginBottom: em(32, 16),
                            },
                            figure: {
                                marginTop: em(32, 16),
                                marginBottom: em(32, 16),
                            },
                            'figure > *': {
                                marginTop: '0',
                                marginBottom: '0',
                            },
                            'figure figcaption': {
                                fontSize: em(14, 16),
                                lineHeight: round(20 / 14),
                                marginTop: em(12, 14),
                            },
                            code: {
                                fontSize: em(14, 16),
                            },
                            'h2 code': {
                                fontSize: em(21, 24),
                            },
                            'h3 code': {
                                fontSize: em(18, 20),
                            },
                            pre: {
                                fontSize: em(14, 16),
                                lineHeight: round(24 / 14),
                                marginTop: em(24, 14),
                                marginBottom: em(24, 14),
                                borderRadius: rem(6),
                                paddingTop: em(12, 14),
                                paddingRight: em(16, 14),
                                paddingBottom: em(12, 14),
                                paddingLeft: em(16, 14),
                            },
                            ol: {
                                marginTop: em(20, 16),
                                marginBottom: em(20, 16),
                            },
                            ul: {
                                marginTop: em(20, 16),
                                marginBottom: em(20, 16),
                            },
                            li: {
                                marginTop: em(8, 16),
                                marginBottom: em(8, 16),
                            },
                            'ol > li': {
                                paddingLeft: em(28, 16),
                            },
                            'ol > li::before': {
                                left: '0',
                            },
                            'ul > li': {
                                paddingLeft: em(28, 16),
                            },
                            'ul > li::before': {
                                width: em(6, 16),
                                height: em(6, 16),
                                top: `calc(${em(28 / 2, 16)} - ${em(3, 16)})`,
                                left: em(4, 16),
                            },
                            '> ul > li p': {
                                marginTop: em(12, 16),
                                marginBottom: em(12, 16),
                            },
                            '> ul > li > *:first-child': {
                                marginTop: em(20, 16),
                            },
                            '> ul > li > *:last-child': {
                                marginBottom: em(20, 16),
                            },
                            '> ol > li > *:first-child': {
                                marginTop: em(20, 16),
                            },
                            '> ol > li > *:last-child': {
                                marginBottom: em(20, 16),
                            },
                            'ul ul, ul ol, ol ul, ol ol': {
                                marginTop: em(12, 16),
                                marginBottom: em(12, 16),
                            },
                            hr: {
                                marginTop: em(48, 16),
                                marginBottom: em(48, 16),
                            },
                            'hr + *': {
                                marginTop: '0',
                            },
                            'h2 + *': {
                                marginTop: '0',
                            },
                            'h3 + *': {
                                marginTop: '0',
                            },
                            'h4 + *': {
                                marginTop: '0',
                            },
                            table: {
                                fontSize: em(14, 16),
                                lineHeight: round(24 / 14),
                            },
                            'thead th': {
                                paddingRight: em(8, 14),
                                paddingBottom: em(8, 14),
                                paddingLeft: em(8, 14),
                            },
                            'thead th:first-child': {
                                paddingLeft: '0',
                            },
                            'thead th:last-child': {
                                paddingRight: '0',
                            },
                            'tbody td': {
                                paddingTop: em(8, 14),
                                paddingRight: em(8, 14),
                                paddingBottom: em(8, 14),
                                paddingLeft: em(8, 14),
                            },
                            'tbody td:first-child': {
                                paddingLeft: '0',
                            },
                            'tbody td:last-child': {
                                paddingRight: '0',
                            },
                        },
                        {
                            '> :first-child': {
                                marginTop: '0',
                            },
                            '> :last-child': {
                                marginBottom: '0',
                            },
                        },
                    ]
                },
            }),
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
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}


