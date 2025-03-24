import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Soulfarm" className={styles.logo} /> {/* Usa l'immagine importata */}
      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>Azienda agricola</a>
        <a href="#" className={styles.navLink}>Fattoria didattica</a>
        <a href="#" className={styles.navLink}>Agriturismo</a>
        <a href="#" className={styles.navLink}>Bio e sostenibilità</a>
        <a href="#" className={styles.navLink}>Turismo e territorio</a>
        <a href="#" className={styles.navLink}>Dove siamo</a>
      </nav>
    </header>
  );
};

export default Header;