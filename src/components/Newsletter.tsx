import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aggiungi qui la logica per inviare l'email
        console.log('Email inviata:', email);
        setEmail('');
    };

    return (
        <section className={styles.newsletter}>
            <div className={styles.content}>
                <h2 className={styles.title}>Rimani aggiornato</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="Inserisci la tua email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.button}>Iscriviti</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;