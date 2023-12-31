import React from 'react';
import Profile from './components/Profile/Profile';
import user from '../src/data/user.json';
import data from '../src/data/data.json';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import friends from '../src/data/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from '../src/data/transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
