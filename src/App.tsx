import LogoButton from './components/LogoButton'
import { uiTechnology, supportTechnology } from './assets/logos'
import CounterButton from './components/CounterButton'

export default function App() {
    const { VITE_APP_PATH = 'Missing .env file. Check example.env' } =
        import.meta.env

    return (
        <>
            <div className="flex justify-center">
                {uiTechnology.map((logo) => (
                    <LogoButton
                        key={logo.imgAltText}
                        href={logo.href}
                        img={logo.img}
                        imgAltText={logo.imgAltText}
                        classNames={logo.classNames}
                    />
                ))}
            </div>

            <h1 className="mb-8 text-5xl">React + Tailwind</h1>

            <h2 className="mb-4 text-2xl">with</h2>

            <div className="flex justify-center">
                {supportTechnology.map((logo) => (
                    <LogoButton
                        key={logo.imgAltText}
                        href={logo.href}
                        img={logo.img}
                        imgAltText={logo.imgAltText}
                        classNames={logo.classNames}
                    />
                ))}
            </div>

            <h1 className="mb-8 text-5xl">Vite + ESLint + Prettier</h1>

            <CounterButton />

            <p className="mb-2 ">
                <span>Edit</span>
                <code className="mx-2 inline-block rounded-lg bg-[rgba(0,0,0,0.05)] px-3 py-1 dark:bg-[rgba(255,255,255,0.05)]">
                    {VITE_APP_PATH}
                </code>
                <span>and save to test HMR</span>
            </p>
        </>
    )
}
