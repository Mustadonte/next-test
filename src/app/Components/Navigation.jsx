'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const Navigation = ({ navLinks }) => {
  const pathname = usePathname();
  const session = useSession();

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
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="" onClick={() => signOut({ callbackUrl: '/' })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">Sign In</Link>
      )}
    </>
  );
};

export default Navigation;
