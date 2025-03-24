import React from 'react';

interface FormattedTextProps {
    children: string;
    className?: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ children, className }) => {
    const parts: (string | React.ReactNode)[] = children.split(/(<strong>.*?<\/strong>)/);

    return (
        <span className={className}>
            {parts.map((part, index) => {
                if (typeof part === 'string') { // Verifica se 'part' è una stringa
                    const match = part.match(/<strong>(.*?)<\/strong>/);
                    if (match) {
                        return <strong key={index}>{match[1]}</strong>;
                    } else {
                        return <React.Fragment key={index}>{part}</React.Fragment>;
                    }
                } else {
                    return part; // Restituisci 'part' se non è una stringa
                }
            })}
        </span>
    );
};

export default FormattedText;