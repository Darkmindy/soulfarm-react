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
                <form onSubmit={handleSubmit} className="w-[535px] flex justify-between items-center bg-white rounded-[40px] border border-[#e0e0e0]">
                    <div className="flex items-center gap-2 pl-6">
                        <div className="w-8 h-[31px] flex items-center justify-center">
                            <img src={mailSvg} alt="Email Icon" className="w-[26.666431427001953px] h-[20.66666603088379px] text-black" />
                        </div>
                        <input
                            type="email"
                            className="font-normal text-[16px] leading-[25px] text-left text-[#333333] font-lexend outline-none py-3 flex-grow"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex justify-center gap-2.5 bg-[#d1f864] px-8 py-3 rounded-[40px] ml-auto"
                    >
                        <span className="font-bold text-base text-[#1a1a1a] font-lexend">Iscriviti</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;