export interface PropsType {
    href: string
    classNames: string
    img: string
    imgAltText: string
}

export default function LogoButton({
    href,
    classNames,
    img,
    imgAltText,
}: PropsType) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="h-[100px] w-[100px]"
        >
            <img
                src={img}
                className={`h-full w-full bg-contain p-6 transition-all ${classNames}`}
                alt={imgAltText}
            />
        </a>
    )
}
