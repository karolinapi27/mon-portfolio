import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <NavLink to="/"className={styles.logo}> 
       <img src="/footerLogo.png" alt="Logo Kasa" />
       </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
