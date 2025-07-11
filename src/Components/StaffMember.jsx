const StaffMember = () => {
    const staffInto = [
        {
            imageUrl: "/teacher0",
            name: "Julien RAJERISON",
            description: "Lead developpeur | Fondateur de l'association Techzara Madagascar"
        },
        {
            imageUrl: "/teacher1",
            name: "Ryan ANDRIAMAHERY",
            description: "Developpeur back end | Cofondateur et Directeur des operations de chez HEI"
        },
        {
            imageUrl: "/teacher2",
            name: "Jean Aime Maxa",
            description: "Responsable Technique cybersecurite chez CES France Continental (Toulouse - France)"
        },
        {
            imageUrl: "/teacher3",
            name: "Parison RAVALOMANDA",
            description: "Ingenieur Informatique | Ingenieur chez Google(Londres UK)"
        },
        {
            imageUrl: "/teacher4",
            name: "Yannick Raharijaona",
            description: "Responsable ML chez Rocket Science (Ottawa - Canada)"
        },
        {
            imageUrl: "/teacher5",
            name: "Dre Tahina RALITERA",
            description: "Docteure Ingenieure, CNRS France | Prix L'Oreal-UNESCO Pour les femmes en science(2017)"
        },
        {
            imageUrl: "teacher6",
            name: "Dr Lou Maurica",
            description: "Docteur-Ingenieur | Fondateur et directeur pedagogique de HEI"
        },
        {
            imageUrl: "/teacher7",
            name: "Mirado RAFANOMEHINTSOA",
            description: "Data and business intelligence specialist +5"
        }
    ]

    const longDescription = "Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée."

    return (
        <div>
            <h1>L'equipe pedagogique</h1>
            <p>{longDescription}</p>
            
        </div>
    )
}

export default StaffMember;