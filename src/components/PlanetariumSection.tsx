import React from 'react';
import planetariumImage from '../assets/images/planetarium-image.png';
import planetariumPattern from '../assets/images/planetarium-pattern.png';

const PlanetariumSection: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center gap-20 self-stretch h-[560px] bg-[#216545] p-20"
            style={{
                backgroundImage: `url(${planetariumPattern})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
            }}
        >
            <img
                className="w-[480px] h-[356px] object-cover"
                src={planetariumImage}
                alt="Planetario"
            />
            <div className="w-[480px] flex flex-col gap-6">
                <div className="flex flex-col gap-4 self-stretch">
                <span
                        className="font-normal text-[40px] text-white"
                        style={{ fontFamily: "MADE Dillan, sans-serif" }}>
                        Il Planetario
                        </span>
                    <span className="font-normal text-base text-white">
                        Finalmente il nostro planetario vi potrà accogliere anche nei<br/> mesi invernali. Ci aspettano una serie di appuntamenti<br/> 
                        pomeridiani -sabato pomeriggio -per scoprire i segreti del<br/> cielo e una serie di appuntamenti speciali dedicati alla Ruota<br/> 
                        dell'Anno Celtico.
                    </span>
                </div>
                <div className="flex justify-center items-center gap-2.5 bg-[#d1f864] w-[200px] h-[48px] rounded-[40px]">
                <span className="font-bold text-base text-[#1c1c1c]">Visita il planetario</span>
                 </div>
                </div>
            </div>
    );
};

export default PlanetariumSection;