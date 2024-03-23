import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (event, anchorId) => {
    event.preventDefault();
    const path = `/`;

    if (window.location.pathname === path) {
      // Si nous sommes déjà sur la page d'accueil, fait défiler vers l'ancre
      const anchorElement = document.getElementById(anchorId);
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Si nous ne sommes pas sur la page d'accueil, navigue puis fait défiler
      navigate(path, { replace: true });
      setTimeout(() => {
        const anchorElement = document.getElementById(anchorId);
        if (anchorElement) {
          anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0); 
    }
  };

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <h1>Portfolio</h1>
      </NavLink>
      <nav>
        <ul className={styles.navbar}>
          <li onClick={(e) => handleNavLinkClick(e, 'about')} className={styles.navLink}>About me</li>
          <li onClick={(e) => handleNavLinkClick(e, 'projets')} className={styles.navLink}>Mes projets</li>
          <li onClick={(e) => handleNavLinkClick(e, 'competences')} className={styles.navLink}>Compétences</li>
          <li onClick={(e) => handleNavLinkClick(e, 'contact')} className={styles.navLink}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
