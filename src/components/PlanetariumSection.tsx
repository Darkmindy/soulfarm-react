import React from 'react';
import styles from './PlanetariumSection.module.css';
import planetariumImage from '../assets/images/planetarium-image.png';

const PlanetariumSection: React.FC = () => {
    return (
        <section className={styles.planetarium}>
            <div className={styles.content}>
                <h2 className={styles.title}>Il Planetario</h2>
                <p className={styles.description}>
                Finalmente il nostro planetario vi potrà accogliere anche nei mesi invernali. Ci aspettano una serie di appuntamenti pomeridiani -sabato pomeriggio -per scoprire i segreti del cielo e una serie di appuntamenti speciali dedicati alla Ruota dell'Anno Celtico.
                </p>
                <button className={styles.button}>Visita il planetario</button>
            </div>
            <div className={styles.image}>
                <img src={planetariumImage} alt="Planetario" />
            </div>
        </section>
    );
};

export default PlanetariumSection;