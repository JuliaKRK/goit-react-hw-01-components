import React from 'react';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={styles['friend-list']}>
      {friends.map(friend => (
        <div className={styles['friend-list-item']} key={friend.id}>
          <span
            className={`${styles.status} ${
              friend.isOnline ? styles.online : styles.offline
            }`}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
          />
          <p className={styles.name}>{friend.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
