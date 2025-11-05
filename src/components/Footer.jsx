export default function Footer({ onNavigate, refs }) {
    
    return (
        <footer className="bg-slate-900 text-slate-300 py-10 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Acerca de</h3>
                    <p>Somos una empresa dedicada a crear soluciones digitales innovadoras.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Enlaces</h3>
                    <ul>
                        <li>
                            <button onClick={() => onNavigate(refs.heroRef)}>Inicio</button>
                        </li>
                        <li>
                            <button onClick={() => onNavigate(refs.serviciosRef)}>Servicios</button>
                        </li>
                        <li>
                            <button onClick={() => onNavigate(refs.statsRef)}>Contacto</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Síguenos</h3>
                    <p>@Nexus</p>
                </div>
            </div>
            <p className="text-center mt-8 text-sm text-slate-500">
                © {new Date().getFullYear()} . Todos los derechos reservados.
            </p>
        </footer>
    );
}
