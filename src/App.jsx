import React from 'react';
import Profile from './components/Profile/Profile';
import user from '../src/data/user.json';
import data from '../src/data/data.json';
import Statistics from './components/Statistics/Statistics';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

export default App;
