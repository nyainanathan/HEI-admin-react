function Domaines() {
  const domaines = [
    {
      title: "Cloud et cybersécurité",
      description:
        "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.",
      image: "https://hei.school/wp-content/uploads/2024/05/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png"
    },
    {
      title: "Intelligence artificielle",
      description:
        "Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.",
    
        image: "https://hei.school/wp-content/uploads/2024/05/Intelligence-artificielle_Plan-de-travail-1-150x150.png",
    },
    {
      title: "Ingénierie logicielle",
      description:
        "Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.",
      image: "https://hei.school/wp-content/uploads/2024/05/Intelligence-artificielle_Plan-de-travail-1-150x150.png"
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Domaines</h2>
      <p className="max-w-4xl mx-auto text-gray-800 mb-12">
        Au cours de vos trois ans de formation, naviguez entre les domaines les
        plus porteurs du numérique du présent et de l’avenir :
      </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center">
        {domaines.map(({ title, description, image }, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md flex-1 max-w-xs mx-auto md:mx-0 font-bold"
          >
            <img
              src={image}
              alt={title}
              className="h-20 mx-auto mb-4 object-contain"
            />
            <h3 className="text-yellow-600 font-semibold text-lg mb-3">
              {title}
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Domaines;