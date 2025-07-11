const AboutUs = () => {

    const aboutUsData = [
        {
            fontClass: "fa-solid fa-graduation-cap",
            descriptionTitle: "+3ans",
            longDescription: "Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier."
        },
        {
            fontClass: "fa-solid fa-users",
            descriptionTitle: "+250 etudiants",
            longDescription: "Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”."
        },
        {
            fontClass: "fa-solid fa-medal",
            descriptionTitle: "Notre mission",
            longDescription: "Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar."
        }
    ]

    return (

        <div className="flex justify-center p-10 items-center gap-6" id="aboutUs">
            <img src="/A-propos-left-1.webp" className="w-4/12" alt="" />
            <div className="flex flex-col items-stretch h-full w-3/12 gap-3">
                <h2 className="text-3xl font-medium">A propos de nous</h2>
                <div className="flex flex-col gap-5">
                    {aboutUsData.map((info, index) => (
                        <div>
                            <div className="flex items-center gap-2">
                                <i className={`${info.fontClass} text-2xl` }></i>
                                <p className="text-2xl font-medium">{`${info.descriptionTitle}`}</p>
                            </div>
                            <p className="longAhhDescription">{`${info.longDescription}`}</p>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
    )
}
export default AboutUs;