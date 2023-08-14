import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex gap-44 justify-center items-center h-28 bg-slate-500'>
            <Link href='/'>Home</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About</Link>
        </header>
    )
}

export default Header