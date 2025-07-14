import React, {useState, useEffect, useRef} from 'react';

const StaffMember = () => {
    const staffInto = [
        {
            imageUrl: "/teacher0.webp",
            name: "Julien RAJERISON",
            description: "Lead developpeur | Fondateur de l'association Techzara Madagascar"
        },
        {
            imageUrl: "/teacher1.webp",
            name: "Ryan ANDRIAMAHERY",
            description: "Developpeur back end | Cofondateur et Directeur des operations de chez HEI"
        },
        {
            imageUrl: "/teacher2.jpg",
            name: "Jean Aime Maxa",
            description: "Responsable Technique cybersecurite chez CES France Continental (Toulouse - France)"
        },
        {
            imageUrl: "/teacher3.png",
            name: "Parison RAVALOMANDA",
            description: "Ingenieur Informatique | Ingenieur chez Google(Londres UK)"
        },
        {
            imageUrl: "/teacher4.jpg",
            name: "Yannick Raharijaona",
            description: "Responsable ML chez Rocket Science (Ottawa - Canada)"
        },
        {
            imageUrl: "/teacher5.png",
            name: "Dre Tahina RALITERA",
            description: "Docteure Ingenieure, CNRS France | Prix L'Oreal-UNESCO Pour les femmes en science(2017)"
        },
        {
            imageUrl: "teacher6.jpg",
            name: "Dr Lou Maurica",
            description: "Docteur-Ingenieur | Fondateur et directeur pedagogique de HEI"
        },
        {
            imageUrl: "/teacher7.webp",
            name: "Mirado RAFANOMEHINTSOA",
            description: "Data and business intelligence specialist +5"
        }
    ]

    const longDescription = "Notre équipe pédagogique se compose d'experts nationaux et internationaux de l'informatique, de la cybersécurité, de l'intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l'informatique et sont engagés vers l'excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l'employabilité de nos étudiants, elle a été soigneusement sélectionnée."

    const [startIndex, setStartIndex] = useState(0);
    const totalCards = staffInto.length;
    const cardsToShow = 3;
    const intervalRef = useRef(null);

    const slideNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalCards)
    }
    
    const resetTimer= () => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(slideNext, 5000)
    }

    useEffect(()=> {
        resetTimer();
        return () => clearInterval(intervalRef.current)
    } , [startIndex]);

    const handleNextClick = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
        resetTimer();
    }

    const handlePrevClick = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? totalCards - 1 : newIndex;
        })
        resetTimer();
    }

    const getVisibleCards = () => {
        let visibleCards = [];
        for(let i =0 ; i<cardsToShow; i++){
            visibleCards.push(staffInto[(startIndex + i) % totalCards]);
        }
        return visibleCards;
    }

    const middleButton = (startIndex + 1) % totalCards;

   const handleButtonsSwitch = index => {
        const newStartIndex = index > 0 ? index - 1 : totalCards -1;
        setStartIndex(newStartIndex);
        resetTimer()
   }

    return (
        <div className="staff w-full min-h-screen sm:h-1/3 bg-[#6C8CD5] flex justify-center p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="w-full sm:w-5/6 md:w-4/5 lg:w-2/3 text-center flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-3.5">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">L'equipe pedagogique</h1>
                <p className="text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 lg:px-0 leading-relaxed">{longDescription}</p>
                
                
                <div className="hidden sm:flex w-full gap-2 md:gap-4 lg:gap-3.5 items-center">
                    <button
                        onClick={handlePrevClick} 
                        className='text-3xl md:text-4xl lg:text-5xl text-white font-bold hover:text-gray-200 transition-colors flex-shrink-0'
                    >
                        &lsaquo;
                    </button>
                    <div className="w-full h-96 flex gap-2 md:gap-4 lg:gap-8 justify-center">
                        {getVisibleCards().map((staff, index) => (
                            <div key={index} className="bg-white rounded-lg md:rounded-xl lg:rounded-4xl flex-1 max-w-xs flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-2 p-4 md:p-6 lg:p-10 shadow-lg">
                                <img src={staff.imageUrl} className=" rounded-full  h-48 sm:w-20 md:w-24 lg:w-3/4" alt={staff.name} />
                                <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-center">{staff.name}</p>
                                <p className="text-xs sm:text-sm md:text-base text-center text-gray-600 leading-tight">{staff.description}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleNextClick} 
                        className='text-3xl md:text-4xl lg:text-5xl text-white font-bold hover:text-gray-200 transition-colors flex-shrink-0'
                    > 
                        &rsaquo;
                    </button>
                </div>

                
                <div className="sm:hidden w-full flex gap-4 items-center justify-center">
                    <button
                        onClick={handlePrevClick} 
                        className='text-4xl text-white font-bold hover:text-gray-200 transition-colors flex-shrink-0'
                    >
                        &lsaquo;
                    </button>
                    <div className="flex-1 max-w-sm">
                        <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-3 p-6 shadow-lg mx-2">
                            <img src={staffInto[startIndex].imageUrl} className="rounded-full w-24 h-24 object-cover" alt={staffInto[startIndex].name} />
                            <p className="font-semibold text-base text-center">{staffInto[startIndex].name}</p>
                            <p className="text-sm text-center text-gray-600 leading-tight">{staffInto[startIndex].description}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleNextClick} 
                        className='text-4xl text-white font-bold hover:text-gray-200 transition-colors flex-shrink-0'
                    > 
                        &rsaquo;
                    </button>
                </div>

                
                <div className='flex gap-1 md:gap-2 lg:gap-0.75 mt-4'>
                    {staffInto.map((staff, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonsSwitch(index)}
                            className={`rounded-full w-2 h-2 md:w-3 md:h-3 transition-colors ${index === middleButton ? 'bg-black' : 'bg-white hover:bg-gray-200'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StaffMember;