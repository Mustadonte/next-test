'use client';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const GoogleButton = () => {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  return (
    <button
      className="border-2 rounded bg-blue-400 p-4"
      onClick={() => signIn('google', { callbackUrl })}
    >
      Google Button
    </button>
  );
};

export default GoogleButton;
