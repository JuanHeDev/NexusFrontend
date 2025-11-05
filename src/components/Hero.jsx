export default function Hero({onNavigate, refs, onComenzarClick}) {
    return (
        <section className="bg-slate-800 text-center text-white py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bienvenido a Nuestra Plataforma
            </h1>
            <p className="max-w-xl mx-auto text-slate-300 mb-8">
                Conoce nuestros servicios y soluciones digitales diseñadas para hacer crecer tu negocio.
            </p>
            <div className="flex justify-center gap-4">
                <button 
                    onClick={onComenzarClick}
                    className="bg-emerald-500 px-6 py-3 rounded-lg hover:bg-emerald-600"
                >
                    Comenzar
                </button>
                <button 
                    onClick={() => onNavigate(refs.statsRef)} 
                    className="border border-emerald-500 px-6 py-3 rounded-lg hover:bg-emerald-500 hover:text-white"
                >
                    Más información
                </button>
            </div>
        </section>
    );
}
