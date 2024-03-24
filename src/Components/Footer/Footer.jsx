import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer id="contactFooter" className={styles.footer}>
      <h3 className={styles.footerTitle}>CONTACT</h3>
      <div className={styles.contactInfo}>
        <p>Téléphone : 0767860082</p>
        <p>Email : <a href="mailto:karolinapi@icloud.com" aria-label="Envoyer un email à karolinapi@icloud.com">karolinapi@icloud.com</a></p>
        <p>GitHub : <a href="https://github.com/karolinapi27" target="_blank" rel="noopener noreferrer" aria-label="Visitez mon profil GitHub">Visitez mon GitHub</a></p>
        <p>LinkedIn : <a href="https://www.linkedin.com/in/karolina-p-32b292254" target="_blank" rel="noopener noreferrer" aria-label="Visitez mon profil LinkedIn">Visitez mon LinkedIn</a></p>
      </div>
      <p>© 2024 Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
