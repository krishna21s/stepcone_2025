import React, { useEffect, useState } from 'react';
import './ParallaxCard.css';

const ParallaxCard = () => {
    const [cardStyle, setCardStyle] = useState({});
    const [glossStyle, setGlossStyle] = useState({});

    useEffect(() => {
        const handleMouseMove = (event) => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const x = event.clientX - width / 2;
            const y = event.clientY - height / 2;

            const angle = (Math.atan2(y, x) * 180) / Math.PI - 90;
            const glossBg = `linear-gradient(${angle}deg, rgba(255, 255, 255, ${(y / height) * 0.9}) 0%, rgba(255, 255, 255, 0) 80%)`;

            const force = 80;
            const rx = (x / width) * force;
            const ry = (y / height) * -force;
            const transform = `rotateY(${rx}deg) rotateX(${ry}deg)`;

            setCardStyle({ transform });
            setGlossStyle({ background: glossBg });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="container">
            <p className="instruction">Hover around to tilt the card!</p>
            <div id="card" className="card" style={cardStyle}>
                <div className="card__gloss" style={glossStyle}></div>
                <div className="card__content">
                    <div className="card__image">{}</div>
                    <p className="card__name">Parallax Card</p>
                </div>
                <div className="card__name__image"></div>
                <p className="card__name__shadow">Parallax Card</p>
            </div>
        </div>
    );
};

export default ParallaxCard;
