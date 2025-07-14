function TechStack() {
  const techs = [
    {
      image: "https://hei.school/wp-content/uploads/2024/05/LOGO-NEXTA-1536x862.webp",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/05/PN_Logo_baseline_color_ENG.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/05/Yooz-2023-Logo-2.webp",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/05/logo-etech.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/09/logo_emit.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/06/Logo-Numer-vf.png",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/05/bp-logo-full-1024x331.webp",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/05/YIF_LOGO_512x512_BL_on_WH-1.webp",
    },
    {
      image: "https://hei.school/wp-content/uploads/2024/05/logo-kante-company-1.png",
    }
  ];

  return (
    <section className="bg-white-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Nos partenaires
        </h2>
        <p>
          L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires
        </p>

        <div className=" mt-4 grid lg:grid-cols-5 gap-8 items-center justify-center">
          {techs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-35 h-25 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
