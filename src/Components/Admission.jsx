function Admission() {
  const steps = [
    {
      number: "01",
      title: "Dépôt de dossiers",
      description:
        "pour les bacheliers de toutes séries sans limite d’âge",
    },
    {
      number: "02",
      title: "Test de niveau",
      description:
        "composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D",
    },
    {
      number: "03",
      title: "Inscription définitive",
      description: "(si test réussi)",
    },
  ];

  return (
    <section className="bg-[#6C8CD5] py-16 px-4 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Admission</h2>
      <p className="max-w-3xl mx-auto text-white text-base font-bold mb-10 leading-relaxed">
        Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait
        par test de niveau : <br />
        une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-0 mb-10">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="bg-[#FBD68D] text-gray-800 p-6 w-full md:w-[280px] h-auto md:h-[200px] mx-1 relative flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-2">{step.number}</h3>
            <p>
              <span className="font-bold">{step.title}</span> : {step.description}
            </p>

          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <button className="border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-[#6C8CD5] transition duration-200">
          Inscrivez-vous ici
        </button>
        <button className="bg-[#052974] text-white px-6 py-2 rounded hover:bg-[#041f5d] transition duration-200">
          Résultat concours
        </button>
      </div>
    </section>
  );
}

export default Admission;
