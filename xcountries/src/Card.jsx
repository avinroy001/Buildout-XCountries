import styles from './Card.module.css';

const Card = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img src={data.flag} alt={`Flag of ${data.name}`} />
      </div>
      <div className={styles.cname}>{data.name}</div>
    </div>
  );
};

export default Card;
