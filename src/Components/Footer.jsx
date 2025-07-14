import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-900 text-white pt-12 ">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/logo-hei.png" width={87} alt="Logo bogosy de HEI" />
          <div className="space-y-2 text-sm">
            <p>Formation habilitée par</p>
            <p>l'Etat suivant le système</p>
            <p>LMD</p>
            <p className="mt-4">Habilitation MESupRes</p>
            <p>n°31309/2023</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Adresse</h3>
            <p className="text-sm">
              Il J 161 R Ambodivoanjo<br />
              Ivandry Antananarivo<br />
              101, Madagascar
            </p>
          </div>
      </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className=" font-bold text-amber-300">Accueil</a></li>
              <li>
                <a href="#" className="font-bold hover:text-amber-300">Actualités</a>
              </li>
              <li>
                <a href="#" className="font-bold hover:text-amber-300">Bourse d'études</a>
              </li>
              <li>
                <a href="#" className="font-bold hover:text-amber-300">Inscription</a>
              </li>
            </ul>
          </div>

        <div className="space-y-8">
          <h3 className="text-lg font-semibold mb-4">Médias sociaux</h3>
          <div className="flex space-x-4">
            <div className="bg-gray-700 p-2 rounded-full"> {/*icône Facebook*/}
            </div>
            <div className="bg-gray-700 p-2 rounded-full">{/*icône LinkedIn*/}
            </div>
            <div className="bg-gray-700 p-2 rounded-full">{/*icône Instagram/*/}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-12 p-2 text-center text-m text-gray-500">
        <p>© HEI Magascar</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;