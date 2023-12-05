import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/footerLogo.png" alt="Logo Kasa" className={styles.logo} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
