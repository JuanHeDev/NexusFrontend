export default function Navbar({ onNavigate, refs, isLoggedIn, onLoginClick, onLogoutClick }) {
    return (
        <nav className="bg-slate-900 text-white flex justify-between items-center px-8 py-4">
            <div className="text-xl font-bold">Nexus</div>
            <ul className="hidden md:flex gap-6">
                <li>
                    <button onClick={() => onNavigate(refs.heroRef)}>Inicio</button>
                </li>
                <li>
                    <button onClick={() => onNavigate(refs.serviciosRef)}>Servicios</button>
                </li>
                <li>
                    <button onClick={() => onNavigate(refs.galeriaRef)}>Galería</button>
                </li>
                <li>
                    <button onClick={() => onNavigate(refs.statsRef)}>Nosotros</button>
                </li>
            </ul>
            <button
                onClick={isLoggedIn ? onLogoutClick : onLoginClick}
                className={`px-4 py-2 rounded-lg font-medium transition ${isLoggedIn
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-emerald-500 text-white hover:bg-emerald-600"
                    }`}
            >
                {isLoggedIn ? "Cerrar sesión" : "Acceder"}
            </button>
        </nav>
    );
}