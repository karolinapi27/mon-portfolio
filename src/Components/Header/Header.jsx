import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/LOGO.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Kasa" className={styles.logo} />
      <nav>
        <ul className={styles.navbar}>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

