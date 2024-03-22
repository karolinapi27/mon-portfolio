import React from 'react';
import styles from './aboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.AboutMeContainer}
    >
      <h2>ABOUT ME</h2>
      <p>Bonjour, je suis Karolina. Bienvenue sur mon portfolio !</p>
      <p>Je suis passionnée par le développement web.</p>
      <p>N'hésitez pas à me contacter pour en savoir plus ou pour toute collaboration.</p>
    </div>
  );
};

export default AboutMe;
