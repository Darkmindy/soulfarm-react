import React, { useRef } from 'react';
import styles from './ProductsCarousel.module.css';

interface Product {
    id: number;
    title: string;
    imageUrl: string;
}

const products: Product[] = [
    {
        id: 1,
        title: 'Mele di bosco',
        imageUrl: '../assets/images/product1.png',
    },
    {
        id: 2,
        title: 'Mele di bosco',
        imageUrl: '../assets/images/product2.png',
    },
    {
        id: 3,
        title: 'Mele di bosco',
        imageUrl: '../assets/images/product3.png',
    },
    {
        id: 4,
        title: 'Mele di bosco',
        imageUrl: '../assets/images/product4.png',
    },
    {
        id: 5,
        title: 'Mele di bosco',
        imageUrl: '../assets/images/product5.png',
    },
    // Aggiungi altri prodotti qui
];

const ProductsCarousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 300;
        }
    };

    return (
        <section className={styles.productsCarousel}>
            <div className={styles.carouselContainer} ref={carouselRef}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.imageUrl} alt={product.title} className={styles.productImage} />
                        <h3 className={styles.productTitle}>{product.title}</h3>
                        <button className={styles.productButton}>Scopri di più</button>
                    </div>
                ))}
            </div>
            <div className={styles.controls}>
                <button className={styles.controlButton} onClick={scrollLeft}>&lt;</button>
                <button className={styles.controlButton} onClick={scrollRight}>&gt;</button>
            </div>
        </section>
    );
};

export default ProductsCarousel;