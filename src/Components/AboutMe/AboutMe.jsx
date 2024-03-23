import React from 'react';
import styles from './aboutMe.module.scss';
import Button from '../Button/Button';

const AboutMe = () => {

  const handleClick = () => {
    const footerElement = document.getElementById('contactFooter');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className={styles.AboutMeContainer}
    >
      <h2 className={styles.AboutMeTitle}>ABOUT ME</h2>
      <div className={styles.AboutMeParagraphe}>
      <p>Bonjour, je suis Karolina. Bienvenue sur mon portfolio !</p>
      <br></br>
      <p>Je suis passionnée par le développement web et la création d'interfaces utilisateurs.</p>
      <br></br>
      <p>Au cours de ma formation de 9 mois avec OpenClassrooms, j'ai pu renforcer mes compétences en me concentrant sur des outils et des langages tels que Javascript React, Sass, Node.js, et Redux.</p> 
      <p>Ces compétences me permettent aujourd'hui de contribuer à la création de solutions web réactives et avant-gardistes.</p>
      <p>J'aime apprendre constamment, découvrir de nouvelles technologies et collaborer avec d'autres pour créer des solutions innovantes..</p>
      <br></br>
      <p>N'hésitez pas à me contacter pour en savoir plus ou pour toute collaboration.</p>
      </div>
      <div>
      <Button text="Contactez moi" onClick={handleClick} />
      </div>
    </div>
    
  );
};

export default AboutMe;
