function TechStack() {
  const techs = [
    {
      image: "https://hei.school/wp-content/uploads/2024/06/Java-150x150.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/06/python-150x150.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/06/JS-150x150.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/06/C-150x150.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/06/TS-150x150.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/09/docker-300x77.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/09/next.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/09/aws.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/09/serverless.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/09/react.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/09/openapi.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Les technos et langages utilisées
        </h2>
        <p>
          Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
        </p>

        <div className=" mt-4 grid lg:grid-cols-6 gap-8 items-center justify-center">
          {techs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-30 h-25 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
