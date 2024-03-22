import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.footerTitle}>Contact</h3>
      <div className={styles.contactInfo}>
        <p>Téléphone : 0767860082</p>
        <p>Email : <a href="mailto:karolinapi@icloud.com">karolinapi@icloud.com</a></p>
        <p>GitHub : <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"></a></p>
        <p>LinkedIn : <a href="https://linkedin.com/in/yourProfile" target="_blank" rel="noopener noreferrer"></a></p>
      </div>
      <p>© 2024 Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
