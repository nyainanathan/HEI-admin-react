const Outcomes = () => {
    const title = "Quelques débouchés";
    const firstDescription = "Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…";
    const secondDescription = "Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…";
    return (
        <div className="h-4/5 w-full flex justify-center items-center p-24" id="outcomes">
            <div className="" id="outcomes-text">
                <p className="text-5xl my-2 font-bold">{title}</p>
                <p className="outcomes-description my-4">{firstDescription}</p>
                <p className="outcomes-description">{secondDescription}</p>
            </div>
            <img src="/outcomes.webp" className="w-1/3" alt="" />
        </div>
    )
}
export default Outcomes;