import React from 'react';
import logo from '../assets/images/logo.png';
import FlagEU from '../assets/images/partner1.png';
import RepIta from '../assets/images/partner2.png';
import RegPiemonte from '../assets/images/partner3.png';
import FondoEU from '../assets/images/partner4.png';

const Footer: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-center gap-6 bg-[#216545] p-20">
            <img className="w-[67px] h-[40px]" src={logo} alt="Logo Soulfarm"/>

            <div className="w-full h-[1px] bg-white my-2" />

            <div className="flex justify-between self-stretch">
                <div className="w-60 flex flex-col gap-4">
                    <span className="font-bold text-base underline text-[#d1f864]">Azienda agricola</span>
                    <div className="flex flex-col gap-2 self-stretch">
                        <span className="font-normal text-[14px] leading-[22px] text-white">Agricoltura</span>
                        <span className="font-normal text-[14px] leading-[22px] text-white">Allevamenti</span>
                        <span className="font-normal text-[14px] leading-[22px] text-white">Bottega agricola</span>
                        <span className="font-normal text-[14px] leading-[22px] text-white">Punti vendita</span>
                    </div>
                </div>
                <div className="w-60 flex flex-col gap-4">
                    <span className="font-bold text-base underline text-[#d1f864]">Fattoria didattica</span>
                    <div className="flex flex-col gap-2 self-stretch">
                        <span className="font-normal text-[14px] leading-[22px] text-white">Attività scuole</span>
                        <span className="font-normal text-[14px] leading-[22px] text-white">Attività per grandi e piccoli</span>
                        <span className="font-normal text-[14px] leading-[22px] text-white">Planetario</span>
                        <span className="font-normal text-[14px] leading-[22px] text-white">Fattoria sociale</span>
                    </div>
                </div>
                <div className="w-60 flex flex-col gap-4">
                    <span className="font-bold text-base underline text-[#d1f864]">Agriturismo</span>
                    <span className="font-bold text-base underline text-[#d1f864]">Bio e sostenibilità</span>
                    <span className="font-bold text-base underline text-[#d1f864]">TURISMO E TERRITORIO</span>
                    <span className="font-bold text-base underline text-[#d1f864]">CONTATTI</span>
                </div>
                <div className="w-[327px] flex flex-col bg-white p-3 rounded-2xl">
                    <div className="flex items-center gap-2 self-stretch">
                        <img className="w-[76px] h-[53px]" src={FlagEU} alt="Bandiera Europa" />
                        <img className="w-[53px] h-[53px]" src={RepIta} alt="Repubblica Italiana" />
                        <img className="w-[153px] h-[53px]" src={RegPiemonte} alt="Regione Piemonte" />
                    </div>
                    <div className="flex items-end self-stretch">
                        <img className="w-[104px] h-[61px]" src={FondoEU} alt="Fondo Europeo Agricolo" />
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-white mb-4" />

            <div className="flex justify-between self-stretch">
                <div className="flex flex-col">
                    <span className="font-normal text-[14px] leading-[22px] text-white">Azienda Agricola "Elilu" di Gastaldi Elisa - Agricultura Familiare</span>
                    <span className="font-bold text-[14px] leading-[22px] text-white">P.IVA 02322540184</span>
                </div>
                <div className="flex gap-4">
                    <span className="font-normal text-[14px] leading-[22px] text-white">✏️ Code Emiliano Bucci</span>
                    <span className="font-normal text-[14px] leading-[22px] text-white">💻 Replica in <span className="font-semibold">React</span> Stefania Deliso</span>
                    <span className="font-normal text-[14px] leading-[22px] text-white">🎨 Design Michele Fasani</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;