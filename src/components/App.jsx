import { Profile } from './Profile/Profile';
import user from '../components/data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../components/data/data.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload Stats" Stats={data} />
    </>
  );
};
