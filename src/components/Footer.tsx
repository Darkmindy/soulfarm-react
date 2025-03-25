import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/images/logo.png';
import partnerLogo1 from '../assets/images/partner1.png';
import partnerLogo2 from '../assets/images/partner2.png';
import partnerLogo3 from '../assets/images/partner3.png';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <img src={logo} alt="Logo Soulfarm" className={styles.logo} />
                    <p className={styles.description}>
                        Soulfarm è un'azienda agricola a conduzione familiare che produce prodotti biologici di alta qualità.
                    </p>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.title}>Link utili</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <a href="#" className={styles.link}>Azienda agricola</a>
                        </li>
                        <li className={styles.listItem}>
                            <a href="#" className={styles.link}>Fattoria didattica</a>
                        </li>
                        <li className={styles.listItem}>
                            <a href="#" className={styles.link}>Agriturismo</a>
                        </li>
                        <li className={styles.listItem}>
                            <a href="#" className={styles.link}>Bio e sostenibilità</a>
                        </li>
                        <li className={styles.listItem}>
                            <a href="#" className={styles.link}>Turismo e territorio</a>
                        </li>
                        <li className={styles.listItem}>
                            <a href="#" className={styles.link}>Dove siamo</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.title}>Contatti</h3>
                    <p className={styles.contact}>
                        Indirizzo: Via dei Campi, 123 - 45678 Città
                        <br />
                        Telefono: +39 012 3456789
                        <br />
                        Email: info@soulfarm.com
                    </p>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.title}>Partner</h3>
                    <div className={styles.partners}>
                        <img src={partnerLogo1} alt="Partner 1" className={styles.partnerLogo} />
                        <img src={partnerLogo2} alt="Partner 2" className={styles.partnerLogo} />
                        <img src={partnerLogo3} alt="Partner 3" className={styles.partnerLogo} />
                    </div>
                </div>
            </div>
            <div className={styles.credits}>
                © 2023 Soulfarm - Design by [Your Name]
            </div>
        </footer>
    );
};

export default Footer;