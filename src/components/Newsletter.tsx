import React, { useState } from 'react';
import newsletterImage from '../assets/images/newsletter-image.png';
import mailSvg from '../assets/images/mail.svg';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10 self-stretch bg-[#f8f1e2] p-20">
            <div
                className="flex flex-col justify-center items-center gap-6 self-stretch bg-white px-10 py-[120px] rounded-2xl"
                style={{
                    backgroundImage: `url(${newsletterImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col justify-center items-center gap-4">
                    <span
                        className="font-normal text-[40px] text-center text-white"
                        style={{ fontFamily: "MADE Dillan, sans-serif" }}
                    >
                        Rimani aggiornato
                    </span>
                    <span className="font-normal text-base text-center text-white font-lexend">
                        Per non perderti nessuna novità!
                    </span>
                </div>
                <form onSubmit={handleSubmit} className="relative mx-auto flex items-center w-full max-w-[535px] mt-[8px] z-10 rounded-[40px] border border-[#e0e0e0] bg-white h-[64px]">
                    <div className="relative flex items-center gap-2 pl-6 h-full">
                        <div className="absolute left-4 md:left-6 w-8 h-[31px] flex items-center justify-center">
                            <img src={mailSvg} alt="Email Icon" className="w-full h-full text-black" style={{ maxWidth: '32px', maxHeight: '31px' }} />
                        </div>
                        <input
                            type="email"
                            className="w-full font-normal text-[16px] leading-[25px] text-left text-[#333333] font-lexend outline-none py-3 pl-[56px] md:pl-[64px] h-full rounded-[40px] placeholder-gray-400"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="right-[8px] justify-center items-center baseToMd:mt-[12px] md:absolute flex cursor-pointer font-lexend font-bold bg-[#d1f864] text-[#1a1a1a] rounded-[40px] h-[48px] w-[113px]"
                        style={{ fontSize: '16px' }}
                    >Iscriviti</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;