const Navbar = () => {
    return (
        <nav className="text-white w-full flex justify-center gap-x-96 p-5 font-bold" id="navbar">
            <div>
                <img src="/logo-hei.png" width={87} alt="Logo bogosy de HEI" />
            </div>
            <div>
                <ul className="flex gap-7 items-center h-full justify-center" id="navbar-links">
                    <li><a id="current-page" href="">ACCUEIL</a></li>
                    <li><a href="">ACTUALITES</a></li>
                    <li><a href="">BOURSES D'ETUDES</a></li>
                    <li><a href="">INSCRIPTION</a></li>
                    <li><button className="p-2 rounded px-3">INTRANET</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;