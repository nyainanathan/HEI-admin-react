import React, { useState, useEffect } from 'react';

const LandingSlideShow = () => {
    const slidesData = [
        {
            url: "https://hei.school/wp-content/uploads/2024/09/hei-banner-2.webp",
            paragraph: "Une infrastructure de qualite et un programme pedagogique qui repond au besoin du marche pour l'employabilite de nos etudiants"
        },
        {
            url: "https://hei.school/wp-content/uploads/2024/09/hei-banner-3.webp",
            paragraph: "L'éducation est l'arme la plus puissante pour changer le monde, selon Nelson Mandela. HEI pense que l'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar."
        },
        {
            url: "https://hei.school/wp-content/uploads/2024/09/hei-banner-1.webp",
            paragraph: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétence de nos étudiants"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const autoNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    };

    const handleManualSwitch = (newIndex) => {
        setCurrentSlide(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(autoNextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNextSlide = () => {
        const newSlide = (currentSlide + 1) % slidesData.length;
        handleManualSwitch(newSlide);
    };

    const handlePrevSlide = () => {
        const newSlide = currentSlide !== 0 ? currentSlide - 1 : slidesData.length - 1;
        handleManualSwitch(newSlide);
    };

    return (
        <div id="landing-slideshow" className="relative w-full h-screen overflow-hidden">
            {slidesData.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute bg-black inset-0 h-full w-full flex flex-col justify-center items-center text-center transition-opacity duration-1000 bg-cover bg-center ${
                        index === currentSlide ? 'bg-opaci z-10' : 'opacity-0 z-0'
                    }`}
                    style={{ backgroundImage: `url('${slide.url}')` }}
                >
                    <div className="bg-opacity-100 gap-20 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Haute Ecole d'Informatique
                        </h1>
                        <p className="text-white text-base sm:text-lg md:text-2xl max-w-3xl mb-6 px-2 ">
                            {slide.paragraph}
                        </p>
                        <div className="flex  flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                            <button className="bg-white turnThisTextBlue font-semibold px-4 py-2 text-2xl">Inscrivez-vous ici</button>
                            <button className="bg-amber-300 text-white font-semibold px-4 py-2  text-2xl">Emploi du temps</button>
                            <button className="turnThisBlue text-white font-semibold px-4 py-2  text-2xl">Programme pédagogique</button>
                        </div>
                        <p className="text-white text-2xl">
                            Habilitation du MESupRES suivant l'arrêté n°31309/2023
                        </p>
                    </div>
                </div>
            ))}

            
            <div className="absolute bottom-6 flex justify-center w-full gap-2 z-20">
                {slidesData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleManualSwitch(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
                    ></button>
                ))}
            </div>

            
            <button
                onClick={handlePrevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl sm:text-6xl font-bold z-20"
            >
                &lsaquo;
            </button>
            <button
                onClick={handleNextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl sm:text-6xl font-bold z-20"
            >
                &rsaquo;
            </button>
        </div>
    );
};

export default LandingSlideShow;
