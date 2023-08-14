import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation'

const Header = () => {

    const navItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: "Blog",
            href: '/blog',
        },
        {
            label: "About",
            href: '/about'
        }
    ]
    return (
        <header className='flex gap-44 justify-center items-center h-28 bg-slate-500'>
            <Navigation navLinks={navItems} />
        </header>
    )
}

export default Header