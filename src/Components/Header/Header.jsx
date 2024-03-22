import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <h1>Portfolio</h1>
      </NavLink>
      <nav>
        <ul className={styles.navbar}>
          <li><a href="#about" className={styles.navLink}>About me</a></li>
          <li><a href="#projets" className={styles.navLink}>Mes projets</a></li>
          <li><a href="#competences" className={styles.navLink}>Compétences</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

