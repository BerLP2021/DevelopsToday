import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className="bg-gray-400 font-satisfy">
            <div className="container mx-auto flex justify-between items-center gap-2 py-5 text-white text-center text-[24px] md:text-[20px] lg:text-[24px]">
                <Link href="/">
                    <Image className="rounded-full" src="/logo.png" alt="logo" height={75} width={75} />
                </Link>
                <div className="hidden md:flex flex-col items-center gap-4 flex-grow ">
                    <span>Next | React | Typescript</span>
                    <span>HTML5 | CSS3 | TailwindCSS | shadcn/ui </span>
                </div>
                <ul className="flex flex-wrap gap-4 flex-row md:flex-col lg:flex-row justify-end">
                    <li>
                        <a href="https://t.me/ThalerTimm" className="transition-colors duration-200 ease-in hover:text-black">
                            @ThalerTimm
                        </a>
                    </li>
                    <li>
                        <a href="tel:+380637738697" className="transition-colors duration-200 ease-in hover:text-black">
                            +38 063 773-86-97
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header