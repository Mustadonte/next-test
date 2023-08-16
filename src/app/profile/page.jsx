import { getServerSession } from 'next-auth/next';
import { authConfig } from '../configs/auth';

export const metadata = {
  title: 'Profile | Next App',
};

const Profile = async () => {
  const session = await getServerSession(authConfig);
  console.log(session);
  return (
    <div>
      <h1>Profile of {session?.user.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="" />}
    </div>
  );
};

export default Profile;
