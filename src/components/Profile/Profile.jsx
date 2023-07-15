import React from 'react';
import styles from './Profile.module.css';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profileDiv}>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="User avatar" className={styles.avatar} />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <div className={styles.stats}>
          <ul className={styles.statsList}>
            <li className={styles.statsItem}>
              <span className={styles.label}>Followers</span>
              <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li className={styles.statsItem}>
              <span className={styles.label}>Views</span>
              <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li className={styles.statsItem}>
              <span className={styles.label}>Likes</span>
              <span className={styles.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
