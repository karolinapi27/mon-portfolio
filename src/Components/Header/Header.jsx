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
          <li><NavLink to="/about"className={(nav) => (nav.isActive ? "nav-active" :"")}>About me </NavLink></li>
          <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" :"")}>Mes projets</NavLink></li>
          <li><NavLink to="/about"className={(nav) => (nav.isActive ? "nav-active" :"")}>Compétences</NavLink></li>
          <li><NavLink to="/about"className={(nav) => (nav.isActive ? "nav-active" :"")}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

