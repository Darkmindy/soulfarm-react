import React, { useRef } from 'react';
import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';

interface Product {
    id: number;
    title: string;
    imageUrl: string;
}

const products: Product[] = [
    { id: 1, title: 'Mele di bosco', imageUrl: product1 },
    { id: 2, title: 'Mele di bosco', imageUrl: product2 },
    { id: 3, title: 'Mele di bosco', imageUrl: product3 },
    { id: 4, title: 'Mele di bosco', imageUrl: product4 },
    { id: 5, title: 'Mele di bosco', imageUrl: product1 },
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
        <div className="flex flex-col justify-center items-center gap-10 self-stretch bg-[#f4f4f4] p-20">
            <div className="flex items-center self-stretch">
                <div className="flex-grow flex flex-col items-center gap-4">
                    <span
                        className="font-normal text-[40px] text-center text-[#1c1c1c]"
                        style={{ fontFamily: "MADE Dillan, sans-serif" }}
                    >
                        Le novità in bottega
                    </span>
                    <span className="font-normal text-base text-center text-[#1c1c1c]">Nella cucina professionale/laboratorio multifunzionale (interamente alimentata a<br/>
                        corrente) che è stata allestita</span>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button className="w-10 h-10 text-white bg-[#375b69] rounded-[40px] opacity-[0.30]" onClick={scrollLeft}>
                        &lt;
                    </button>
                    <button className="w-10 h-10 text-white bg-[#414141] rounded-[40px]" onClick={scrollRight}>
                        &gt;
                    </button>
                </div>
            </div>
            <div ref={carouselRef} className="flex gap-6 self-stretch overflow-x-auto scroll-smooth mt-6">
                {products.map((product) => (
                    <div key={product.id} className="w-[280px] flex flex-col justify-center gap-4 bg-white p-6 rounded-2xl">
                        <div className="self-stretch h-40 bg-white rounded-2xl overflow-hidden">
                            <img className="w-full h-full object-cover" src={product.imageUrl} alt={product.title} />
                        </div>
                        <span className="font-bold text-[18px] leading-[26px] text-[#1c1c1c]">Mele di bosco</span>
                        <div className="flex justify-center items-center gap-2 bg-[#d1f864] px-6 py-3 rounded-[40px]">
                  <span className="font-bold text-base text-[#1a1a1a]">Scopri di più</span>
                 <div className="w-4 h-4 text-[#1a1a1a] flex items-center justify-center">
                  &gt;
                 </div>
            </div>
                        <div className="w-12 h-12"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsCarousel;