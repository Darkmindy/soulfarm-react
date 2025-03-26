import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Assicurati che il percorso sia corretto

const navLinks = [
    { path: "/", label: "Azienda agricola" },
    { path: "/fattoria", label: "Fattoria didattica" },
    { path: "/agriturismo", label: "Agriturismo" },
    { path: "/bio", label: "Bio e sostenibilità" },
    { path: "/turismo", label: "Turismo e territorio" },
    { path: "/contatti", label: "Dove siamo" },
];

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center self-stretch h-20 bg-[#216545] px-20 py-6">
            <div className="w-[67px] h-10">
                <a href="/" className="flex items-center">
                    <img src={logo} alt="Logo Soulfarm" className="h-full w-full object-contain" /> {/* Adatta l'immagine alle dimensioni del div */}
                </a>
            </div>
            <nav>
                <ul className="flex justify-end items-center gap-10">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `font-bold text-[14px] leading-[22px] text-white ${isActive ? "text-green-300" : "hover:text-green-300"}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;