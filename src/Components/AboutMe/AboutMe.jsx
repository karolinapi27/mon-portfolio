import React from 'react';
import styles from './aboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.AboutMeContainer}
    >
      <h2 className={styles.AboutMeTitle}>ABOUT ME</h2>
      <p>Bonjour, je suis Karolina. Bienvenue sur mon portfolio !</p>
      <p>Je suis passionnée par le développement web et la création d'interfaces utlisateurs.</p>
      <p>Au cours de ma formation de 9 mois avec OpenClassrooms, j'ai pu renforcer mes compétences en me concentrant sur des outils et des langages clés tels que React, Sass, Node.js, et Redux. Ces compétences me permettent aujourd'hui de contribuer à la création de solutions web réactives et avant-gardistes. Animée par une soif continuelle d'apprentissage, je suis toujours prête à explorer de nouvelles avenues, à embrasser les technologies émergentes et à m'inspirer de la créativité collective.</p>
      <p>N'hésitez pas à me contacter pour en savoir plus ou pour toute collaboration.</p>
    </div>
  );
};

export default AboutMe;
