
import React, { useState, useEffect } from 'react';

const welcomeTexts = [
    'Welcome to My Portfolio',
    'Bienvenue to My Portfolio',
    'स्वागत है to My Portfolio',
    '欢迎 to My Portfolio',
    'いらっしゃいませ to My Portfolio',
    'స్వాగతం to My Portfolio',
    'ಸ್ವಾಗತ to My Portfolio',
    'வரவேற்கிறேன் to My Portfolio',
    'സ്വാഗതം to My Portfolio'
];

const Hero = ({ scrollToProjects, scrollToContact }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

    useEffect(() => {
        let index = 0;
        const currentText = welcomeTexts[currentLanguageIndex];

        // Typing effect
        const typeTimer = setInterval(() => {
            if (index <= currentText.length) {
                setDisplayText(currentText.slice(0, index));
                index++;
            } else {
                clearInterval(typeTimer);

                // Wait 2 seconds, then start erasing
                setTimeout(() => {
                    let eraseIndex = currentText.length;
                    const eraseTimer = setInterval(() => {
                        if (eraseIndex >= 0) {
                            setDisplayText(currentText.slice(0, eraseIndex));
                            eraseIndex--;
                        } else {
                            clearInterval(eraseTimer);
                            // Move to next language
                            setCurrentLanguageIndex((prev) => (prev + 1) % welcomeTexts.length);
                        }
                    }, 100);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typeTimer);
    }, [currentLanguageIndex]);

    return (
        <section className="container-fluid py-5 text-white" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="display-3 fw-bold mb-4">
                            {displayText}
                            <span className="typewriter-cursor">|</span>
                        </h1>
                        <p className="lead mb-4 fs-4">
                            I'm <span className="text-warning fw-bold">Vardhan Rangineni</span>, a passionate Java Full Stack Developer
                        </p>
                        <p className="fs-5 mb-4 text-light">
                            Building innovative solutions with modern technologies
                        </p>
                        <button 
                            className="btn btn-lg me-3 mb-3"
                            style={{
                                backgroundColor: 'rgba(135, 30, 226, 0.9)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50px',
                                padding: '15px 40px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={scrollToProjects}
                            onMouseOver={e => e.target.style.transform = 'translateY(-2px)'}
                            onMouseOut={e => e.target.style.transform = 'translateY(0)'}
                        >
                            View My Work
                        </button>
                        <button 
                            className="btn btn-outline-light btn-lg mb-3"
                            style={{
                                borderRadius: '50px',
                                padding: '15px 40px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={scrollToContact}
                            onMouseOver={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                            onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .typewriter-cursor {
                    animation: blink 1s infinite;
                }
                
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
