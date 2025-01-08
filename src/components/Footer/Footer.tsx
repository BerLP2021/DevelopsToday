import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-gray-400 min-h-10 text-center font-satisfy py-4'>
            <div className='md:block hidden  text-[24px]'>
                Cool Footer
            </div>
            <div className="flex md:hidden flex-col items-center gap-4 flex-grow text-[20px]">
                <span>Next | React | Typescript</span>
                <span>HTML5 | CSS3 | TailwindCSS | shadcn/ui </span>
            </div>
        </footer>
    )
}
