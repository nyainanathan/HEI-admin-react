function Programme() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <img
            src="https://hei.school/wp-content/uploads/2024/11/IMG-03-e1720537524581-1024x950-1.webp"
            alt="Programme"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Le programme pédagogique
          </h2>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Suivant le système LMD, jusqu’au Master, notre formation repose sur
            un programme pédagogique conçu en adéquation avec les attentes du
            marché. La formation est sanctionnée par un diplôme de Licence et
            de Master en Informatique reconnu par le MESupRes de Madagascar.
          </p>
          <button className="bg-white border-2 border-gray-800 text-gray-800 font-semibold px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition">
            Notre Programme
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[
          "Apprentissage théoriques en présentiel",
          "Apprentissage sur supports numériques",
          "Travaux individuels de l’étudiant",
          "Apprentissage en entreprise",
        ].map((label, idx) => (
          <div
            key={idx}
            className="bg-yellow-100 text-center rounded-xl px-4 py-8 shadow-sm"
          >
            <p className="text-4xl font-bold text-yellow-500 mb-4">25%</p>
            <p className="text-gray-800 font-bold text-xl leading-relaxed">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          "https://hei.school/wp-content/uploads/2025/05/Mask-group-1.webp",
          "https://hei.school/wp-content/uploads/2025/05/Mask-group-2.webp",
          "https://hei.school/wp-content/uploads/2025/05/Mask-group-3.webp",
        ].map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Etudiant ${index}`}
            className="rounded-xl w-full h-80 object-cover shadow"
          />
        ))}
      </div>
    </section>
  );
}

export default Programme;
