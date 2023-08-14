'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = ({ navLinks }) => {
    const pathname = usePathname();
    return (
        <>
            {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                    <Link key={link.label} href={link.href} className={isActive ? 'text-blue-600' : ''}>
                        {link.label}
                    </Link>
                );
            })}
        </>
    );
};

export default Navigation;
