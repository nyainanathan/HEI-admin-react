const Outcomes = () => {
    const title = "Quelques débouchés";
    const firstDescription = "Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…";
    const secondDescription = "Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…";
    
    return (
        <div className="min-h-screen md:h-4/5 w-full flex flex-col md:flex-row justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 gap-6 md:gap-8 lg:gap-12" id="outcomes">
            <div className="w-full md:w-2/3 lg:w-3/5 order-2 md:order-1" id="outcomes-text">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-2 md:my-4 font-bold text-center md:text-left leading-tight">{title}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl my-3 md:my-4 lg:my-6 text-center md:text-left leading-relaxed text-gray-700">{firstDescription}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left leading-relaxed text-gray-600">{secondDescription}</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-2/5 order-1 md:order-2 flex justify-center">
                <img src="/outcomes.webp" className="w-3/4 sm:w-2/3 md:w-full max-w-md md:max-w-none h-auto object-contain" alt="Outcomes illustration" />
            </div>
        </div>
    )
}

export default Outcomes;