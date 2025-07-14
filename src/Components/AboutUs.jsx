const AboutUs = () => {
    const aboutUsData = [
        {
            fontClass: "fa-solid fa-graduation-cap",
            descriptionTitle: "+3 ans",
            longDescription:
                "Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.",
        },
        {
            fontClass: "fa-solid fa-users",
            descriptionTitle: "+250 étudiants",
            longDescription:
                "Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.",
        },
        {
            fontClass: "fa-solid fa-medal",
            descriptionTitle: "Notre mission",
            longDescription:
                "Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.",
        },
    ];

    return (
        <div
            className="flex w-full flex-col md:flex-row justify-center items-center gap-8 px-4 py-10"
            id="aboutUs"
        >
            <img
                src="/A-propos-left-1.webp"
                className="w-full md:w-1/3 max-w-md"
                alt="À propos"
            />
            <div className="w-full md:w-1/3 flex flex-col gap-6">
                <h2 className="text-3xl font-semibold text-center md:text-left">À propos de nous</h2>
                <div className="flex flex-col gap-5">
                    {aboutUsData.map((info, index) => (
                        <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <i className={`${info.fontClass} text-3xl text-blue-600`}></i>
                                <p className="text-xl font-semibold">{info.descriptionTitle}</p>
                            </div>
                            <p className="text-base text-justify">{info.longDescription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;