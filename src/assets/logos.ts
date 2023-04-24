import reactLogo from '/src/assets/react.svg'
import viteLogo from '/src/assets/vite.svg'
import tailWindLogo from '/src/assets/tailwindcss.svg'
import eslintLogo from '/src/assets/eslint.svg'
import prettierLogo from '/src/assets/prettier.svg'

interface LogoType {
    img: string
    imgAltText: string
    classNames: string
    href: string
}

export const uiTechnology: LogoType[] = [
    {
        href: 'https://react.dev',
        img: reactLogo,
        imgAltText: 'React logo',
        classNames:
            'hover:drop-shadow-[0_0_0.75rem_hsla(190,100%,50%,1)] animate-spin-slow',
    },
    {
        href: 'https://tailwindcss.com/',
        img: tailWindLogo,
        imgAltText: 'Tailwind logo',
        classNames: 'hover:drop-shadow-[0_0_0.75rem_hsla(201,78%,70%,1)]',
    },
]

export const supportTechnology: LogoType[] = [
    {
        href: 'https://vitejs.dev',
        img: viteLogo,
        imgAltText: 'Vite logo',
        classNames: 'hover:drop-shadow-[0_0_0.75rem_hsla(237,100%,70%,0.9)]',
    },
    {
        href: 'https://eslint.org/',
        img: eslintLogo,
        imgAltText: 'ESLint logo',
        classNames: 'hover:drop-shadow-[0_0_0.75rem_hsla(237,100%,70%,0.9)]',
    },
    {
        href: 'https://prettier.io/',
        img: prettierLogo,
        imgAltText: 'Prettier logo',
        classNames: 'hover:drop-shadow-[0_0_0.75rem_hsla(15,57%,50%,1)]',
    },
]
