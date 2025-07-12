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

    const longDescription = "Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée."

    return (
        <div className="w-full h-1/3 bg-blue-400 flex justify-center p-10">
            <div className="w-2/3 text-center flex flex-col items-center justify-center gap-3.5">
                <h1 className="text-white text-5xl">L'equipe pedagogique</h1>
                <p className="text-white">{longDescription}</p>
                <div className="w-full flex gap-3.5">
                    <button>
                        Prev
                    </button>
                    <div className="w-full overflow-x-scroll flex gap-8">
                        {staffInto.map((staff, index) => (
                            <div className="bg-white rounded-4xl staff-cards min-w-1/3 flex flex-col items-center justify-center gap-2 p-10">
                                <img src={staff.imageUrl} className="rounded-full w-3/4" alt="" />
                                <p className="staff-name font-semibold">{staff.name}</p>
                                <p className="staff-name">{staff.description}</p>
                            </div>
                        ))}
                    </div>
                    <button>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StaffMember;
