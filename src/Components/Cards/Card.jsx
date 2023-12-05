//  Card //
import React from 'react';
import { Logements } from '../../Utils/api';
import styles from './card.module.scss'

const Card = () => {
  const data = Logements();

  return (
    <div className={styles.cardContainer}>
        <ul className={styles.cardGrid}>
            {data.map((item) => (
          <li key={item.id} id={item.id} className={styles.cardItem}>
            <img src={item.cover} alt="card" />
            <h3>{item.title}</h3>
          </li>
    ))}
        </ul>
    </div>
  );        
};

export default Card;
