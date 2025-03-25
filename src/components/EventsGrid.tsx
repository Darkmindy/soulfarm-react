import React from 'react';
import styles from './EventsGrid.module.css';

interface Event {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const events: Event[] = [
    {
        id: 1,
        title: 'Sabato in Planetario',
        description: 'Scopri le meraviglie del cielo notturno.',
        imageUrl: '../assets/images/event1.png',
    },
    {
        id: 2,
        title: 'Momenti di Agri-creatività',
        description: 'Celebra le antiche tradizioni celtiche.',
        imageUrl: '../assets/images/event2.png',
    },
    {
        id: 3,
        title: 'Ruota dell\'Anno Celtica',
        description: 'Un\'esperienza di benessere unica.',
        imageUrl: '../assets/images/event3.png',
    },
    {
        id: 4,
        title: 'Sabato in Planetario',
        description: 'Esplora il mondo della natura e della mitologia.',
        imageUrl: '../assets/images/event4.png',
    },
    {
        id: 5,
        title: 'Momenti di Agri-creatività',
        description: 'Impara le basi dell\'astronomia.',
        imageUrl: '../assets/images/event4.jpg',
    },
    {
        id: 6,
        title: 'Ruota dell\'Anno Celtica',
        description: 'Un\'esperienza di benessere unica.',
        imageUrl: '../assets/images/event5.png',
    }
];

const EventsGrid: React.FC = () => {
    return (
        <section className={styles.eventsGrid}>
            {events.map((event) => (
                <div key={event.id} className={styles.eventCard} style={{ backgroundImage: `url(${event.imageUrl})` }}>
                    <div className={styles.eventContent}>
                        <h3 className={styles.eventTitle}>{event.title}</h3>
                        <p className={styles.eventDescription}>{event.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default EventsGrid;