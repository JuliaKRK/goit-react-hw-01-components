import styles from './Statistics.module.css';

const getRandomColor = () => {
  const colors = ['#ff9800', '#2196f3', '#4caf50', '#f44336', '#9c27b0'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage} style={{ display: 'block' }}>
              {percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
