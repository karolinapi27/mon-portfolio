//  Card //
import React from 'react';
import { Link } from 'react-router-dom';
import { Logements } from '../../Utils/api';
import styles from './card.module.scss';

const Card = () => {
  const data = Logements();

  return (
    <div className={styles.cardContainer}>
      <ul className={styles.cardGrid}>
        {data.map((item) => (
          <Link key={item.id} to={`/apartment/${item.id}`} className={styles.cardLink}>
            <li id={item.id} className={styles.cardItem}>
              <img src={item.cover} alt="card" />
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Card;
