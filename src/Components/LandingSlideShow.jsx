import React, {useState, useEffect} from 'react';

const LandingSlideShow = () => {
       const slidesData = [
        {
            url: "/slide1.jpg",
            paragraph: "Une infrastructure de qualite et un programme pedagogique qui repond au besoin du marche pour l'employabilite de nos etudiants"
        },
        {
            url: "/slide2.jpg",
            paragraph: '"L\'education est l\'arme la plus puissante pour changer le mode" Selon Nelson Mandela. "L\'education dans l\'informatique est une arme tres puissante pour lutter contre la pauvrete a Madgascar" Selon HEI. Notre mission'
        },
        {
            url: "/slide3.jpg",
            paragraph: "Des entreprises partenaires et une equipe pedagogique et administrative qui travaille sans relache pour la montee en competence de nos etudiants"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const autoNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length)
    }


    const handleManualSwitch = newIndex => {
        setCurrentSlide(newIndex);
        resetTimer();
    }

    useEffect(() => {
        const interval = setInterval(autoNextSlide, 5000);
        return () => clearInterval(interval)
    })

    const handleNextSlide = () => {
        const newSlide = (currentSlide + 1) % slidesData.length;
        handleManualSwitch(newSlide);
    }

    const handlePrevSlide = () => {
        const newSlide = currentSlide != 0 ?  (currentSlide - 1 ) % slidesData.length : 2;
        handleManualSwitch(newSlide);
    }

    return (
        <div id="landing-slideshow" className="w-full h-screen  flex justify-center items-center relative">
            {slidesData.map((slide, index) => (
            <div key={index} className={`absolute inset-0 h-full w-full border-x flex flex-col justify-center items-center gap-15  ${index == currentSlide ? 'opacity-80' : 'opacity-0'}`}
            style={{backgroundImage: `url('${slide.url}')`}}
            >
                <h1 className="text-7xl text-white">Haute Ecole d'Informatique</h1>
                <p className="text-2xl w-2/3 text-center text-white">{slide.paragraph}</p>
                <div className="flex gap-x-8 text-3xl justify-evenly w-2/3" >
                    <button id='firstbtn' className="p-3 rounded-xl">Inscrivez-vous ici</button>
                    <button id='secondbtn' className="p-3 rounded-xl">Emploi du temps</button>
                    <button id='thirdbtn' className="p-3 rounded-xl">Programme pedagogique</button>
                </div>
                <p className='text-white'>Habilitation du MESupRES suivant l'arrete n*31309/2023</p>
            </div>
            
            ) )}

            <div className="absolute bottom-6 flex gap-2">
                {slidesData.map((slide, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors duration-300
                            ${index === currentSlide ? 'bg-black' : 'bg-white'}`}
                    ></button>
                ))}
            </div>

             <button
                onClick={handlePrevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-7xl font-bold p-2 bg-opacity-50 transition-all"
            >
                &lsaquo;
            </button>
            <button
                onClick={handleNextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-7xl font-bold p-2  bg-opacity-50 transition-all"
            >
                &rsaquo;
            </button>
           
            
        
        </div>
    )
}
export default LandingSlideShow;