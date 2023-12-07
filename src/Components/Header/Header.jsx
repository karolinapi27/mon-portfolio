import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logoKasa.svg" alt="Logo Kasa" className={styles.logo} />
      <nav>
        <ul className={styles.navbar}>
          <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" :"")}>Accueil</NavLink></li>
          <li><NavLink to="/about"className={(nav) => (nav.isActive ? "nav-active" :"")}>A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

