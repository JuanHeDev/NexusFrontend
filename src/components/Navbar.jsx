export default function Navbar({ onNavigate, refs, onAccessClick }) {
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
                onClick={onAccessClick}
                className="bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600"
            >
                Acceder
            </button>
        </nav>
    );
}