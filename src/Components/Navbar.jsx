import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-white w-full px-6 py-5 flex justify-evenly items-center bg-black font-bold" id="navbar">
            
            <div className="flex items-center justify-between w-full md:w-auto">
                <img src="/logo-hei.png" width={87} alt="Logo bogosy de HEI" />
                <button
                    className="md:hidden text-white ml-4"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Close" : "Menu"}
                </button>
            </div>


            <ul className="hidden md:flex gap-6 items-center">
                <li><a id="current-page" href="">ACCUEIL</a></li>
                <li><a href="">ACTUALITES</a></li>
                <li><a href="">BOURSES D'ETUDES</a></li>
                <li><a href="">INSCRIPTION</a></li>
                <li><button className="p-2 rounded px-3 bg-white text-black">INTRANET</button></li>
            </ul>

            {isOpen && (
                <ul className="absolute top-20 left-0 w-full flex flex-col items-center bg-black gap-4 py-4 md:hidden z-50">
                    <li><a id="current-page" href="">ACCUEIL</a></li>
                    <li ><a href="">ACTUALITES</a></li>
                    <li><a href="">BOURSES D'ETUDES</a></li>
                    <li><a href="">INSCRIPTION</a></li>
                    <li><button className="p-2 rounded px-3 bg-white text-black">INTRANET</button></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
