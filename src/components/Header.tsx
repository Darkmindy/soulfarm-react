import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/images/logo.png';

// Definizione delle voci di menu
const navLinks = [
  { path: "/", label: "Azienda agricola" },
  { path: "/fattoria", label: "Fattoria didattica" },
  { path: "/agriturismo", label: "Agriturismo" },
  { path: "/bio", label: "Bio e sostenibilità" },
  { path: "/turismo", label: "Turismo e territorio" },
  { path: "/contatti", label: "Dove siamo" },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Logo cliccabile */}
      <a href="/" className={styles.logoContainer}>
        <img src={logo} alt="Logo Soulfarm" className={styles.logo} />
      </a>

      {/* Navigazione */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.path} className={styles.navItem}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
