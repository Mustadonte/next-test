import { cookies } from 'next/headers';

export default function CookiesF() {
  const cookieStore = cookies();

  const localConsent = cookieStore.get('localConsent');

  const cookiesHandler = () => {
    cookieStore.set('localConsent', 'true', { expires: 365 });
  };

  return <>{localConsent ? null : <div>Localconsent message</div>}</>;
}
