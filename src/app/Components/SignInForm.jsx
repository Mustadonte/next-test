'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const SignInForm = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res && !res.error) {
      router.push('/profile');
    } else {
      console.log(res);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5 text-blue-600">
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="sumbit">Sign In</button>
    </form>
  );
};

export default SignInForm;
