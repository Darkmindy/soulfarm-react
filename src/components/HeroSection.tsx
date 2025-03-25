import React from 'react';
import styles from './HeroSection.module.css';
import FormattedText from '../components/utilities/FormattedText';

const HeroSection: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.leftContent}>
                <h1 className={styles.title}>Soulfarm</h1>
                <h2 className={styles.subtitle}>Agricoltura Familiare</h2>
                <FormattedText className={styles.description}>
                    L'azienda è certificata biologica ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio.
                </FormattedText>
            </div>
            <div className={styles.rightContent}>
                <div className={styles.heroImage}></div>
            </div>
        </section>
    );
};

export default HeroSection;
