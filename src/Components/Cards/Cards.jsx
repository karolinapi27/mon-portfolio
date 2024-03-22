//  Card //
import React from 'react';
import { Link } from 'react-router-dom';
import  projets  from '../../Data/projets.json';
import styles from './cards.module.scss';

const Card = () => {
  const data = projets;

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardtitle}>MES PROJETS</h2>
      <ul className={styles.cardGrid}>
        {data.map((item) => (
          <Link key={item.id} to={`/projet/${item.id}`} className={styles.cardLink}>
            <li id={item.id} className={styles.cardItem}>
              <img src={item.cover} alt="card"/>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Card;
